"use client"
import React, { useState } from "react"
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/modal"
import CheckoutPackageDetails from "./CheckoutPackageDetails"
import { DownwardArrow } from "@/utils/StaticSvgs"

export const PriceModalMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)

  return (
    <div className="lg:hidden mt-[10px]">
      <div onClick={onOpen} className="flex justify-between bg-green-200 px-2 py-1 ">
        <p className="text-black font-semibold flex items-center space-x-1">
          <span>Package Details</span>
          <span className="inline-block">{DownwardArrow}</span>
        </p>
        <p className="text-black font-semibold">$345</p>
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
