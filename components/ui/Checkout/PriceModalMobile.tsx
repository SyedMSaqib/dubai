"use client"
import React, { useState } from "react"
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal"
import CheckoutPackageDetails from "./CheckoutPackageDetails"
import { DownwardArrow } from "@/utils/StaticSvgs"
import { useAppSelector } from "@/lib/Redux/hooks"

export const PriceModalMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const data = useAppSelector((state) => state.booking.Data)
  const totalPrice = data[0]?.totalPrice
  const taxRate = 0.05 // 5%
  const taxAmount = totalPrice * taxRate
  const finalTotal = totalPrice + taxAmount

  return (
    <div className="lg:hidden mt-[10px]">
      <div onClick={onOpen} className="flex justify-between bg-green-200 px-2 py-4 ">
        <p className="text-black font-semibold flex items-center space-x-1">
          <span>Package Details</span>
          <span className="inline-block">{DownwardArrow}</span>
        </p>
        <p className="text-black font-semibold">AED {finalTotal.toLocaleString()}</p>
      </div>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} scrollBehavior="inside">
        <ModalContent>
          <>
            <ModalBody className="">
              <CheckoutPackageDetails />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  )
}
