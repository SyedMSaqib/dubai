"use client"
import React, { useEffect } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import formatAmountForStripe from "@/utils/stripe-helper"

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = React.useState<string | null>()
  const [isLoading, setIsLoading] = React.useState(false)
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
        return_url: "http://localhost:3000",
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
    if (error.type === "card_error" || error.type === "validation_error") {
      setErrorMessage(error.message)
    } else {
      setErrorMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  return (
    <div className="max-w-[900px] my-16 sm:my-24 p-8 sm:p-12 bg-white border border-gray-300 rounded-lg shadow-md mx-auto">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
        <div id="payment-element" className="space-y-4">
          <PaymentElement />
        </div>
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300"
        >
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && (
          <div id="payment-message" className="mt-4 text-center text-red-600 font-medium">
            {message}
          </div>
        )}
      </form>
      {/* [DEV]: For demo purposes only, display dynamic payment methods annotation and integration checker */}
    </div>
  )
}

export default CheckoutForm
