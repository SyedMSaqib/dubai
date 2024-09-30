"use client"
import React, { useEffect } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import formatAmountForStripe from "@/utils/stripe-helper"
import lottieSpinner from "@/utils/lottieSpinner.json"
import Lottie from "lottie-react"

/**
 * CheckoutForm
 *
 * A React component that renders a payment form for making a payment with
 * Stripe.
 *
 * @param {number} amount - The amount to charge the customer.
 *
 * @returns {React.ReactElement} - The rendered payment form.
 */

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = React.useState<string | null>()
  const [isLoading, setIsLoading] = React.useState(true)
  const [clientSecret, setClientSecret] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState<string | null>()

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: formatAmountForStripe(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
        setIsLoading(false)
      })
  }, [amount])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setErrorMessage(submitError.message)
      setIsLoading(false)
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://dubai-seven.vercel.app/checkout/paymentSuccess",
      },
    })
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message)
    } else {
      setMessage("An unexpected error occurred.")
    }

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setErrorMessage(error.message)
    // } else {
    //   setErrorMessage("An unexpected error occurred.")
    // }

    setIsLoading(false)
  }

  return (
    <div className="p-10 lg:p-0 pb-[100px] mx-auto">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
        <div id="payment-element" className="space-y-4">
          <PaymentElement />
        </div>
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="w-full bg-black text-white font-semibold py-3 rounded-lg   disabled:cursor-not-allowed transition duration-300"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="flex justify-center items-center" id="spinner">
                <Lottie
                  animationData={lottieSpinner}
                  loop={true}
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center" id="spinner">
                Pay
              </div>
            )}
          </span>
        </button>

        {/* Show any error or success messages */}
        {message && (
          <div id="payment-message" className="mt-4 text-center text-red-600 font-medium">
            {message}
          </div>
        )}
      </form>
    </div>
  )
}

export default CheckoutForm
