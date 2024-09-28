"use client"
import React from "react"

import { PriceModalMobile } from "@/components/ui/Checkout/PriceModalMobile"
import CheckoutPackageDetails from "@/components/ui/Checkout/CheckoutPackageDetails"
import ContactForm from "@/components/ui/Checkout/ContactForm"
import BreadCrumbs from "@/components/ui/Checkout/BreadCrumbs"
import StripeElements from "@/components/ui/Checkout/StripeElements"

export default function Checkout() {
  const currentPage: string = "Payment Details"

  return (
    <div className=" mx-auto max-w-[1400px]  lg:px-8 mt-4 lg:mb-[100px]  ">
      <BreadCrumbs />
      <PriceModalMobile />
      <div className="lg:flex lg:justify-center gap-4 lg:mt-[30px]">
        <div className="lg:w-[600px] lg:border border-gray-300 lg:px-8 lg:py-8 lg:rounded-lg">
          {currentPage === "Contact Details" ? <ContactForm /> : ""}
          {currentPage === "Activity Details" ? <p>Activity Details</p> : ""}
          {currentPage === "Payment Details" ? <StripeElements /> : ""}
        </div>
        <div className="hidden lg:block border border-gray-300 rounded-lg lg:h-[350px]">
          <CheckoutPackageDetails />
        </div>
      </div>
    </div>
  )
}
