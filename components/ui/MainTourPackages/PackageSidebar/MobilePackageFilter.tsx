"use client"
import React from "react"
import { Modal, ModalContent, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"

import PriceRangeSlider from "./PriceRangeSlider"
// import RatingSelection from "./RatingsSelection"
// import TimeOfDay from "./TimeOfDay"
import Duration from "./Duration"

const MobilePackageFilter = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="lg:hidden mt-[10px]">
      <button
        onClick={onOpen}
        className="flex items-center border border-black px-2 py-1 rounded-full"
      >
        <svg
          className="w-6 h-6 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="style=linear">
            <g id="filter-circle">
              <path
                id="vector"
                d="M2 17.5H7"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="vector_2"
                d="M22 6.5H17"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="vector_3"
                d="M13 17.5H22"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="vector_4"
                d="M11 6.5H2"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="vector_5"
                d="M10 20.3999C8.34315 20.3999 7 19.0568 7 17.3999C7 15.743 8.34315 14.3999 10 14.3999C11.6569 14.3999 13 15.743 13 17.3999C13 19.0568 11.6569 20.3999 10 20.3999Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="vector_6"
                d="M14 9.3999C15.6569 9.3999 17 8.05676 17 6.3999C17 4.74305 15.6569 3.3999 14 3.3999C12.3431 3.3999 11 4.74305 11 6.3999C11 8.05676 12.3431 9.3999 14 9.3999Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
        <span className="text-black font-semibold">All filters</span>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
              <ModalBody>
                {/* <TimeOfDay /> */}
                <Duration />
                <PriceRangeSlider />
                {/* <RatingSelection /> */}
              </ModalBody>
              <ModalFooter className="border-t border-zinc-300">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose} className="rounded-full">
                  See Results
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
export default MobilePackageFilter
