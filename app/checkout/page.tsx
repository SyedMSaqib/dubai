"use client"
import getStripe from "@/utils/getStripejs"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "@/components/ui/CheckoutForm"
import formatAmountForStripe from "@/utils/stripe-helper"

const stripePromise = getStripe()

export default function Checkout() {
  const amount = 100
  return (
    <Elements
      options={{ mode: "payment", amount: formatAmountForStripe(amount), currency: "aed" }}
      stripe={stripePromise}
    >
      <CheckoutForm amount={amount} />
    </Elements>
  )
}
