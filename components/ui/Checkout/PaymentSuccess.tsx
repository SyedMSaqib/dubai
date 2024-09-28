"use client"
import React, { useRef } from "react"
import Lottie from "lottie-react"
import Success from "@/utils/success.json"
import CheckoutPackageDetails from "./CheckoutPackageDetails"
import html2canvas from "html2canvas"

const PaymentSuccess = () => {
  const downloadRef = useRef<HTMLButtonElement | null>(null) // Ref for the download button
  const screenshotRef = useRef<HTMLDivElement | null>(null) // Ref for the screenshot container

  const handleDownload = async () => {
    if (downloadRef.current) {
      // Hide the download button
      downloadRef.current.style.display = "none"
    }

    const canvas = await html2canvas(screenshotRef.current!)
    const dataURL = canvas.toDataURL("image/png")

    const link = document.createElement("a")
    link.href = dataURL
    link.download = "payment_confirmation.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    if (downloadRef.current) {
      // Show the download button again after taking the screenshot
      downloadRef.current.style.display = "block"
    }
  }

  return (
    <div className=" h-screen" ref={screenshotRef}>
      <div className="bg-white px-6 md:mx-auto">
        <div className="flex justify-center mr-5">
          <Lottie
            animationData={Success}
            loop={false}
            style={{ width: "80px", height: "80px", marginLeft: "20px" }}
          />
        </div>
        <div className="text-center">
          {/* <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3> */}
          <h2 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Purchase ID: 194813421
          </h2>
          <p className="text-gray-600 my-2 max-w-lg mx-auto">
            Thank you for your booking! Your payment was successful, and your tour is confirmed. You
            will receive a confirmation email shortly with all the details. We look forward to
            hosting you on an unforgettable journey!
          </p>
          <p>Have a great day!</p>
          <div className=" text-center">
            <div>
              <CheckoutPackageDetails />
            </div>
            <button
              ref={downloadRef}
              type="button"
              onClick={handleDownload}
              className="bg-black text-white rounded-md  w-full max-w-sm mx-auto p-4"
            >
              Save Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
