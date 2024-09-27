"use client"
import React from "react"
import getStripe from "@/utils/getStripejs"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "@/components/ui/CheckoutForm"
import formatAmountForStripe from "@/utils/stripe-helper"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs"
import { PriceModalMobile } from "@/components/ui/Checkout/PriceModalMobile"
import CheckoutPackageDetails from "@/components/ui/Checkout/CheckoutPackageDetails"
import ContactForm from "@/components/ui/Checkout/ContactForm"

const stripePromise = getStripe()

export default function Checkout() {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("Contact Details")

  const amount = 100
  return (
    <div className=" mx-auto max-w-[1400px]  lg:px-8 mt-4 mb-[1000px]  ">
      <Breadcrumbs
        className="flex justify-center items-center space-x-4 py-4"
        aria-label="Checkout Steps"
        onAction={(key) => setCurrentPage(key)}
      >
        <BreadcrumbItem
          key="Contact Details"
          isCurrent={currentPage === "Contact Details"}
          className={`text-lg ${
            currentPage === "Contact Details" ? "font-bold text-black" : "text-gray-600"
          }`}
        >
          <span className="flex items-center space-x-2">
            {currentPage === "Contact Details" && (
              <span className="bg-black text-white rounded-full w-4 h-4 md:w-6 md:h-6 text-xs flex items-center justify-center">
                1
              </span>
            )}
            <span>Contact Details</span>
          </span>
        </BreadcrumbItem>

        <BreadcrumbItem
          key="Activity Details"
          isCurrent={currentPage === "Activity Details"}
          className={`text-lg ${
            currentPage === "Activity Details" ? "font-bold text-black" : "text-gray-600"
          }`}
        >
          <span className="flex items-center space-x-2">
            {currentPage === "Activity Details" && (
              <span className="bg-black text-white rounded-full w-4 h-4 md:w-6 md:h-6 text-xs flex items-center justify-center">
                2
              </span>
            )}
            <span>Activity Details</span>
          </span>
        </BreadcrumbItem>

        <BreadcrumbItem
          key="Payment Details"
          isCurrent={currentPage === "Payment Details"}
          className={`text-lg ${
            currentPage === "Payment Details" ? "font-bold text-black" : "text-gray-600"
          }`}
        >
          <span className="flex items-center space-x-1">
            {currentPage === "Payment Details" && (
              <span className="bg-black text-white rounded-full w-4 h-4 md:w-6 md:h-6 flex text-xs items-center justify-center">
                3
              </span>
            )}
            <span>Payment Details</span>
          </span>
        </BreadcrumbItem>
      </Breadcrumbs>

      <PriceModalMobile />
      <div className="">
        <div>
          {currentPage === "Contact Details" ? <ContactForm /> : ""}
          {currentPage === "Activity Details" ? <p>Activity Details</p> : ""}
          {currentPage === "Payment Details" ? (
            <Elements
              options={{ mode: "payment", amount: formatAmountForStripe(amount), currency: "aed" }}
              stripe={stripePromise}
            >
              <CheckoutForm amount={amount} />
            </Elements>
          ) : (
            ""
          )}
        </div>
        <div className="hidden lg:block">
          <CheckoutPackageDetails />
        </div>
      </div>
    </div>
  )
}
