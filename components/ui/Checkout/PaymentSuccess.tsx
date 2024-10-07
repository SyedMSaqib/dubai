"use client"
import React, { useRef } from "react"
import Lottie from "lottie-react"
import Success from "@/utils/success.json"
import html2canvas from "html2canvas"
import { useSearchParams } from "next/navigation"
import { Divider } from "@nextui-org/divider"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"

const PaymentSuccess = () => {
  const searchParams = useSearchParams()

  const packageDetailsString = searchParams.get("packageDetails")

  // Parse packageDetails if it exists
  const parsedPackageDetails = packageDetailsString
    ? JSON.parse(decodeURIComponent(packageDetailsString))
    : null

  const totalPrice = parsedPackageDetails?.[0]?.totalPrice || 0 // Use optional chaining
  const taxRate = 0.05 // 5%
  const taxAmount = totalPrice * taxRate
  const finalTotal = totalPrice + taxAmount

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
    <div className="h-screen" ref={screenshotRef}>
      <div className="bg-white px-6 md:mx-auto">
        <div className="flex justify-center mr-5">
          <Lottie
            animationData={Success}
            loop={false}
            style={{ width: "80px", height: "80px", marginLeft: "20px" }}
          />
        </div>
        <div className="text-center">
          <h2 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Booking ID: 194813421
          </h2>
          <p className="text-gray-600 my-2 max-w-lg mx-auto">
            Thank you for your booking! Your payment was successful, and your tour is confirmed. You
            will receive a confirmation email shortly with all the details. We look forward to
            hosting you on an unforgettable journey!
          </p>
          <p>Have a great day!</p>
          <div className="text-center">
            <div>
              <div className="w-full max-w-sm mx-auto p-4">
                <Card className="shadow-none bg-transparent">
                  <CardBody className="p-2 space-y-4">
                    <div className="flex flex-row gap-2 w-full overflow-hidden">
                      <div className="w-[120px] h-[90px]">
                        <Image
                          alt="image"
                          className="w-full object-cover h-[80px] md:h-[90px] rounded-md"
                          src={parsedPackageDetails?.[0]?.subtourThumbnail ?? "/"}
                          width={600}
                          height={400}
                          sizes="33vw"
                        />
                      </div>
                      <p className="font-bold flex-1">{parsedPackageDetails?.[0]?.subTourName}</p>
                    </div>

                    <Divider className="my-2" />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-gray-600">Adults</p>
                        <p>{parsedPackageDetails?.[0]?.adults}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Child</p>
                        <p>{parsedPackageDetails?.[0]?.child}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Date</p>
                        <p>{parsedPackageDetails?.[0]?.date || "N/A"}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Time</p>
                        <p>{parsedPackageDetails?.[0]?.time || "N/A"}</p>
                      </div>
                    </div>

                    <Divider className="my-2" />

                    <div className="flex justify-between">
                      <p className="">Package</p>
                      <p className="">
                        AED {parsedPackageDetails?.[0]?.packagePrice?.toLocaleString() || "0"}
                      </p>
                    </div>

                    <Divider className="my-2" />
                    <div className="flex justify-between">
                      <p className="">Tax (5% VAT)</p>
                      <p className="">AED {taxAmount.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">Total</p>
                      <p className="font-bold">AED {finalTotal.toLocaleString()}</p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            <button
              ref={downloadRef}
              type="button"
              onClick={handleDownload}
              className="bg-black text-white rounded-md w-full max-w-sm mx-auto p-4"
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
