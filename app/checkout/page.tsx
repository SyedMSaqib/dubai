"use client"
import React from "react"

import { PriceModalMobile } from "@/components/ui/Checkout/PriceModalMobile"
import CheckoutPackageDetails from "@/components/ui/Checkout/CheckoutPackageDetails"
import ContactForm from "@/components/ui/Checkout/ContactForm"
import BreadCrumbs from "@/components/ui/Checkout/BreadCrumbs"
import StripeElements from "@/components/ui/Checkout/StripeElements"

export default function Checkout() {
  const currentPage: string = "Contact Details"

  return (
    <div className=" mx-auto max-w-[1400px]  lg:px-8 mt-4 mb-[1000px]  ">
      <BreadCrumbs />
      <PriceModalMobile />
      <div className="">
        <div>
          {currentPage === "Contact Details" ? <ContactForm /> : ""}
          {currentPage === "Activity Details" ? <p>Activity Details</p> : ""}
          {currentPage === "Payment Details" ? <StripeElements /> : ""}
        </div>
        {/* <div className="hidden lg:block">
          <CheckoutPackageDetails />
        </div> */}
      </div>
    </div>
  )
}
