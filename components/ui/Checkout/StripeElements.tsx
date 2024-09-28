import React from "react"
import getStripe from "@/utils/getStripejs"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "@/components/ui/Checkout/CheckoutForm"
import formatAmountForStripe from "@/utils/stripe-helper"
const stripePromise = getStripe()
const StripeElements = () => {
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

export default StripeElements
