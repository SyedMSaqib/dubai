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

  const amount = 100

  return (
    <Elements
      options={{
        mode: "payment",
        amount: formatAmountForStripe(packageDetails[0].totalPrice),
        currency: "aed",
      }}
      stripe={stripePromise}
    >
      <CheckoutForm amount={packageDetails[0].totalPrice} />
    </Elements>
  )
}

export default StripeElements
