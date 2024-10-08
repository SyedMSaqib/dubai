import prisma from '@/lib/prisma';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

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
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  console.log("Event (stringified):", JSON.stringify(event, null, 2));

  // Extract metadata from the paymentIntent
  let metadata: Record<string, any> = {};

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    
    if (paymentIntent.metadata) {
      metadata = paymentIntent.metadata;
    }
  } else {
    return NextResponse.json({ error: 'Unhandled event type' }, { status: 400 });
  }

  // Check if metadata is populated
  if (!metadata || !metadata.user_first_name) {
    return NextResponse.json({ error: 'Missing metadata' }, { status: 400 });
  }

  try {
    // Create BookingUser
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
   
    // Then create Booking with reference to BookingUser
   
       // Assuming metadata.booking_addons is defined and is an array of objects



   
      const booking = await prisma.booking.create({
        data: {
          adults: parseInt(metadata.booking_adults),
          child: parseInt(metadata.booking_child),
          transportType: metadata.booking_transport_type,
          totalPrice: parseInt(metadata.booking_total_price), // Use totalPrice directly from metadata
          bookingUserId: bookingUser.id,
          subTourId: metadata.booking_subTourId,
          tourDate:new Date(metadata.tour_date),
        },
      });
 
     
      let bookingAddons;

        bookingAddons = JSON.parse(metadata.booking_addons);
      // Ensure bookingAddons is an array
     
        await prisma.bookingAddonWithQuantity.createMany({
          data: bookingAddons.map((addon: { id: string; quantity: number }) => ({
            addonId: addon.id, // The ID of the addon
            quantity: addon.quantity, // The quantity of the addon
            bookingId: booking.id, // The booking ID
          })),
        });
      
      
    console.log('Booking created:', booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Error creating booking' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
