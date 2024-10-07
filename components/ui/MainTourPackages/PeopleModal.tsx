"use client"
import React, { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import TransportType from "./TransportType"
import AdOns from "./AddOns"
import Link from "next/link"
import { encodeData } from "@/utils/urlEncoders"
import { useAppSelector } from "@/lib/Redux/hooks"
import { TotalPrice } from "@/utils/priceCalculations"

type addOns = {
  id: string
  price: number
  name: string
  subTourInfoId: string
}
export const PeopleModal = ({
  addOns,
  adultPrice,
  childPrice,
  privateRide,
  subTourId,
  subtourThumbnail,
  subTourName,
  subTourSlug,
}: {
  addOns: addOns[]
  adultPrice: number
  childPrice: number
  privateRide: number
  subTourId: string
  subtourThumbnail: string
  subTourName: string
  subTourSlug: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const [Adults, setAdults] = useState(1)

  const handleDecrement = () => {
    if (Adults > 1) {
      setAdults(Adults - 1)
    }
  }

  const handleIncrement = () => {
    setAdults(Adults + 1)
  }
  //Children
  const [Childrens, setChildrens] = useState(0)

  const handleDecrementChildrens = () => {
    if (Childrens > 0) {
      setChildrens(Childrens - 1)
    }
  }

  const handleIncrementChildrens = () => {
    setChildrens(Childrens + 1)
  }

  const [totalPrice, setTotalPrice] = useState(0)
  const transportType = useAppSelector((state) => state.peopleModal.ride)
  const addons = useAppSelector((state) => state.peopleModal.addOns)
  const Bookingdate = useAppSelector((state) => state.booking.date)

  const totalAddOnPrice = addons.reduce((sum, addon) => sum + addon.price * addon.quantity, 0)

  React.useEffect(() => {
    const total = TotalPrice(
      adultPrice,
      childPrice,
      Adults,
      Childrens,
      totalAddOnPrice,
      transportType,
      privateRide
    )

    setTotalPrice(total)
  }, [Adults, Childrens, adultPrice, childPrice, transportType, totalAddOnPrice, privateRide])

  const data = {
    Data: [
      {
        adults: Adults,
        child: Childrens,
        transportType: transportType,
        totalPrice: totalPrice,
        addOns: addons,
        subTourId: subTourId,
        subtourThumbnail: subtourThumbnail,
        subTourName: subTourName,
        packagePrice: totalPrice,
        subTourSlug: subTourSlug,
        date: Bookingdate,
      },
    ],
  }

  // Serialize and encode data
  const encodedData = encodeData(data)

  // Create URL with encoded data
  const url = `/checkout/${encodedData}`

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className="bg-[#F1C40F] w-full font-bold text-md rounded-full text-black "
        variant="flat"
      >
        Reserve Now
      </Button>
      <Modal
        backdrop="blur"
        size="5xl"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="flex"></div>
                <p className="font-bold">Select Visitors</p>
                <p>
                  Per Adult: <span className="font-bold">AED {adultPrice?.toLocaleString()}</span>
                </p>
                <p>
                  Per Child: <span className="font-bold">AED {childPrice?.toLocaleString()}</span>
                </p>
                <div className="flex flex-row justify-between md:justify-start md:gap-[300px]">
                  <div className="flex items-center gap-4">
                    <p className="">Adults: </p>
                    <button
                      className="bg-black text-white text-2xl font-bold w-6 h-6 rounded-full flex items-center justify-center"
                      onClick={handleDecrement}
                      disabled={Adults === 1}
                    >
                      -
                    </button>
                    <span className="text-lg">{Adults}</span>
                    <button
                      className="bg-black text-white text-2xl font-bold w-6 h-6 rounded-full flex items-center justify-center"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="">Child: </p>
                    <button
                      className="bg-black text-white text-2xl font-bold w-6 h-6 rounded-full flex items-center justify-center"
                      onClick={handleDecrementChildrens}
                      disabled={Childrens === 0}
                    >
                      -
                    </button>
                    <span className="text-lg">{Childrens}</span>
                    <button
                      className="bg-black text-white text-2xl font-bold w-6 h-6 rounded-full flex items-center justify-center"
                      onClick={handleIncrementChildrens}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <TransportType />
                </div>
                <div className="font-bold mt-4">
                  <p className="text-xl mb-2">Add-ons</p>
                  <AdOns addOns={addOns} />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between items-center border-t border-zinc-300">
                <p className="font-bold text-xl">
                  <span className="px-1">Total:</span>AED {totalPrice?.toLocaleString()}
                </p>
                <div className="flex gap-2">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Link href={url}>
                    <button className="bg-[#F1C40F] p-2 rounded-lg">Book Now</button>
                  </Link>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
