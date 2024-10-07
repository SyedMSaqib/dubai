import React from "react"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import { Divider } from "@nextui-org/divider"
import { useAppSelector } from "@/lib/Redux/hooks"

const CheckoutPackageDetails = () => {
  const packageDetails = useAppSelector((state) => state.booking.Data)
  const date = useAppSelector((state) => state.booking.date)
  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const totalPrice = packageDetails[0]?.totalPrice || 0
  const taxRate = 0.05 // 5%
  const taxAmount = totalPrice * taxRate
  const finalTotal = totalPrice + taxAmount

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <Card className="shadow-none bg-transparent">
        <CardBody className="p-2 space-y-4">
          <div className="flex flex-row gap-2 w-full overflow-hidden">
            <div className="w-[120px] h-[90px]">
              <Image
                alt="image"
                className="w-full object-cover h-[80px] md:h-[90px] rounded-md"
                src={packageDetails[0]?.subtourThumbnail ?? "/"}
                width={600}
                height={400}
                sizes="33vw"
              />
            </div>
            <p className="font-bold flex-1">{packageDetails[0]?.subTourName}</p>
          </div>

          <Divider className="my-2" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-600">Adults</p>
              <p>{packageDetails[0]?.adults}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Child</p>
              <p>{packageDetails[0]?.child}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Date</p>
              <p>{formattedDate}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Time</p>
              <p>5 AM</p>
            </div>
          </div>

          <Divider className="my-2" />

          <div className="flex justify-between">
            <p className="">Package</p>
            <p className="">AED {packageDetails[0]?.packagePrice?.toLocaleString()}</p>
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
  )
}

export default CheckoutPackageDetails
