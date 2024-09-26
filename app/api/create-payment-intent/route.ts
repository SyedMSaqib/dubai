import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20", // or the latest version you want to use
});



// const calculateOrderAmount = (items:any) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

export async function POST(request: NextRequest) {
    try {
  const { amount } = await request.json();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "aed",
    automatic_payment_methods: { enabled: true },
  });
  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
catch (error) {
  console.log(error)
  return NextResponse.json({ error })
}
}