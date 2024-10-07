"use client"
import React from "react"
import getStripe from "@/utils/getStripejs"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "@/components/ui/Checkout/CheckoutForm"
import formatAmountForStripe from "@/utils/stripe-helper"
import { useAppSelector } from "@/lib/Redux/hooks"
const stripePromise = getStripe()

const StripeElements = () => {
  const packageDetails = useAppSelector((state) => state.booking.Data)

  return (
    <Elements
      options={{
        mode: "payment",
        amount: formatAmountForStripe(packageDetails[0].totalPrice),
        currency: "aed",
      }}
      stripe={stripePromise}
    >
      <CheckoutForm />
    </Elements>
  )
}

export default StripeElements
