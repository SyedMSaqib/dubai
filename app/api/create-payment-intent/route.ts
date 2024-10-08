import { checkOutInfo } from "@/lib/db";
import { TotalPrice } from "@/utils/priceCalculations";
import formatAmountForStripe from "@/utils/stripe-helper";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20", // or the latest version you want to use
});


export async function POST(request: NextRequest) {
  
  
  try {
    type AddOn = {
      id: string;
      quantity: number;
    };
    const { packageDetails,userDetails } = await request.json();
  
    
   
    const addOns:AddOn[] = packageDetails[0]?.addOns || []; // Default to empty array if addOns don't exist

    const idsAndQuantities = addOns.map((addon: AddOn) => ({
      id: addon.id,
      quantity: addon.quantity,
    }));

    const data = await checkOutInfo(packageDetails[0]?.subTourSlug || "");
    const addonsFromDb = data?.addOns || [];
    
    let totalAddonsPrice = 0;
    
    // Iterate over each add-on in idsAndQuantities
    const addonsMap = new Map(addonsFromDb.map((addon) => [addon.id, addon]));

// Iterate through idsAndQuantities
idsAndQuantities.forEach(({ id, quantity }: AddOn) => {
  const addonFromDb = addonsMap.get(id);
  if (addonFromDb) {
    totalAddonsPrice += addonFromDb.price * quantity;
  }
});


    const totalPrice = TotalPrice(
      data?.adultPrice || 0,
      data?.childPrice || 0,
      packageDetails[0]?.adults || 0,
      packageDetails[0]?.child || 0,
      totalAddonsPrice,
      packageDetails[0]?.transportType,
      data?.privatePrice || 0
    );
    const taxRate = 0.05 // 5%
    const taxAmount = totalPrice * taxRate
    const finalTotal = totalPrice + taxAmount
    
    

    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(finalTotal),
      currency: "aed",
      automatic_payment_methods: { enabled: true },
      metadata: {
        // Booking details
        booking_adults: packageDetails[0].adults.toString(),
        booking_child: packageDetails[0].child.toString(),
        booking_transport_type: packageDetails[0].transportType,
        booking_total_price: finalTotal.toString(),
        booking_addons:JSON.stringify(idsAndQuantities),
        booking_subTourId: packageDetails[0].subTourId,
        tour_date: packageDetails[0].date,
        
        // User details
        user_first_name: userDetails.firstName,
        user_last_name: userDetails.lastName,
        user_phone:userDetails.phone,
        user_whatsapp: userDetails.whatsApp || '',
        user_pickup_point: userDetails.area,
        user_room: userDetails.room || '',
        user_email: userDetails.email,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
