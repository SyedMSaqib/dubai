// import transporter from '@/lib/nodemailer';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { transportType } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: Request) {
  const body = await request.text();
  const headersList = headers();
  const signature = headersList.get('stripe-signature');

  let event: Stripe.Event;

  try {
    if (!signature || !endpointSecret) {
      throw new Error('Missing signature or endpoint secret');
    }
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  let metadata: Record<string, string> = {};

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    
    if (paymentIntent.metadata) {
      metadata = paymentIntent.metadata as Record<string, string>;
    }
  } else {
    return NextResponse.json({ error: 'Unhandled event type' }, { status: 400 });
  }

  if (!metadata || !metadata.user_first_name) {
    return NextResponse.json({ error: 'Missing metadata' }, { status: 400 });
  }

  // Validate transport type
  const transportTypeValue = metadata.booking_transport_type.toLowerCase();
  if (!isValidTransportType(transportTypeValue)) {
    return NextResponse.json({ 
      error: `Invalid transport type. Must be 'private' or 'shared'` 
    }, { status: 400 });
  }

  try {
    const bookingUser = await prisma.bookingUser.create({
      data: {
        firstName: metadata.user_first_name,
        lastName: metadata.user_last_name,
        phone: metadata.user_phone,
        whatsApp: metadata.user_whatsapp || undefined,
        pickUpPoint: metadata.user_pickup_point,
        room: metadata.user_room || undefined,
        email: metadata.user_email,
      },
    });

    const booking = await prisma.booking.create({
      data: {
        adults: parseInt(metadata.booking_adults),
        child: parseInt(metadata.booking_child),
        transportType: transportTypeValue as transportType,
        totalPrice: parseInt(metadata.booking_total_price),
        bookingUserId: bookingUser.id,
        subTourId: metadata.booking_subTourId,
        tourDate: new Date(metadata.tour_date),
      },
    });

    const bookingAddons = JSON.parse(metadata.booking_addons) as Array<{
      id: string;
      quantity: number;
    }>;

    if (bookingAddons.length > 0) {
      await prisma.bookingAddonWithQuantity.createMany({
        data: bookingAddons.map((addon) => ({
          addonId: addon.id,
          quantity: addon.quantity,
          bookingId: booking.id,
        })),
      });
    }

    // type MailError = Error & { code?: string };
    
    // const mailOptions = {
    //   from: process.env.EMAIL_USERNAME!,
    //   to: metadata.user_email,
    //   subject: 'Booking Confirmation',
    //   text: 'Booking Confirmation',
    //   html: `
    //     <h1>Booking Confirmation</h1>
    //     <p>Booking ID: ${booking.id}</p>
    //     <p>Tour Date: ${metadata.tour_date}</p>
    //     <p>Total Price: ${booking.totalPrice}</p>
    //   `,
    // };

    // await transporter.sendMail(mailOptions, function (err: MailError | null, info: { response: string }) {
    //   if (err)
    //     console.log(err);
    //   else
    //     console.log(info);
    // });
      
    console.log('Booking created:', booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Error creating booking' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

function isValidTransportType(value: string): value is transportType {
  return ['private', 'shared'].includes(value);
}