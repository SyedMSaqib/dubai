"use client"
import React, { useRef } from "react"
import Lottie from "lottie-react"
import Success from "@/utils/success.json"

import { useSearchParams } from "next/navigation"
import { Divider } from "@nextui-org/divider"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import jsPDF from "jspdf"
import { useAppSelector } from "@/lib/Redux/hooks"

const PaymentSuccess = () => {
  const date = useAppSelector((state) => state.booking.date)
  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const searchParams = useSearchParams()
  const packageDetailsString = searchParams.get("packageDetails")

  // Parse packageDetails if it exists
  const parsedPackageDetails = packageDetailsString
    ? JSON.parse(decodeURIComponent(packageDetailsString))
    : null

  const totalPrice = parsedPackageDetails?.[0]?.totalPrice || 0
  const taxRate = 0.05 // 5%
  const taxAmount = totalPrice * taxRate
  const finalTotal = totalPrice + taxAmount

  const screenshotRef = useRef<HTMLDivElement | null>(null)

  const handleDownloadPDF = () => {
    // Create new PDF document
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4", // A4 size
    })

    // Set font and styles
    pdf.setFont("helvetica")
    pdf.setTextColor(40) // Set text color to a dark gray

    // Header
    pdf.setFontSize(24)
    pdf.text("Dubai Adventures", 105, 20, { align: "center" })

    pdf.setFontSize(12)
    pdf.text("Tourism LLC", 105, 28, { align: "center" })

    pdf.setFontSize(10)
    pdf.text("P.O. Box 123456, Dubai, UAE", 105, 34, { align: "center" })
    pdf.text("Tel: +971 4 123 4567", 105, 39, { align: "center" })

    // Receipt details
    pdf.setDrawColor(150) // Set color for lines
    pdf.line(20, 45, 190, 45) // Horizontal line

    pdf.setFontSize(12)
    pdf.text("RECEIPT", 20, 55)

    pdf.setFontSize(10)
    const currentDate = new Date().toLocaleDateString()
    pdf.text(`Date: ${currentDate}`, 20, 62)
    pdf.text(`Receipt No: #194813421`, 20, 68)
    pdf.text(`Time: ${parsedPackageDetails?.[0]?.time || "N/A"}`, 20, 74)

    // Customer details
    pdf.text("Bill To:", 120, 62)
    pdf.text("Walk-in Customer", 120, 68)

    // Tour details
    pdf.line(20, 80, 190, 80) // Horizontal line

    pdf.setFontSize(12)
    pdf.text("Tour Details", 20, 90)

    pdf.setFontSize(10)
    pdf.text(parsedPackageDetails?.[0]?.subTourName || "Desert Safari", 20, 98)
    pdf.text(`Date: ${parsedPackageDetails?.[0]?.date || "N/A"}`, 20, 104)

    // Item table
    const tableStart = 115
    pdf.line(20, tableStart - 5, 190, tableStart - 5)
    pdf.text("Description", 20, tableStart)
    pdf.text("Quantity", 150, tableStart)
    pdf.line(20, tableStart + 2, 190, tableStart + 2)

    // Add items
    let currentY = tableStart + 10

    // Add Adults
    if (parsedPackageDetails?.[0]?.adults) {
      pdf.text("Adult", 20, currentY)
      pdf.text(parsedPackageDetails[0].adults.toString(), 150, currentY)
      currentY += 8
    }

    // Add Child
    if (parsedPackageDetails?.[0]?.child) {
      pdf.text("Child", 20, currentY)
      pdf.text(parsedPackageDetails[0].child.toString(), 150, currentY)
      currentY += 8
    }

    // Totals
    currentY += 5
    pdf.line(20, currentY, 190, currentY)
    currentY += 5

    pdf.text("Subtotal:", 140, currentY)
    pdf.text(`${totalPrice.toFixed(2)} AED`, 170, currentY)
    currentY += 6

    pdf.text("VAT (5%):", 140, currentY)
    pdf.text(`${taxAmount.toFixed(2)} AED`, 170, currentY)
    currentY += 6

    pdf.setFontSize(12)
    pdf.text("Total:", 140, currentY)
    pdf.text(`${finalTotal.toFixed(2)} AED`, 170, currentY)

    // Payment details
    currentY += 15
    pdf.setFontSize(10)
    pdf.text("Payment Method: Visa ****1234", 20, currentY)
    pdf.text("Transaction ID: TXN123456789", 20, currentY + 6)

    // Footer
    pdf.setFontSize(9)
    pdf.text("Thank you for choosing Dubai Adventures!", 105, 250, { align: "center" })
    pdf.setFontSize(8)
    pdf.text("This is a computer-generated receipt and does not require a signature.", 105, 255, {
      align: "center",
    })

    // Save PDF
    pdf.save("payment_receipt.pdf")
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
                        <p>{formattedDate}</p>
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
              id="download-button"
              type="button"
              onClick={handleDownloadPDF}
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
