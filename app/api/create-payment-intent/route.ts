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
    const { packageDetails } = await request.json();
    console.log(packageDetails)
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
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
