import React from "react"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import { Divider } from "@nextui-org/divider"

const CheckoutPackageDetails = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <Card className="shadow-none bg-transparent">
        <CardBody className="p-0 space-y-4">
          <div className="flex flex-row gap-2 w-full overflow-hidden">
            <div className="w-[130px] h-[90px]">
              <Image
                alt="image"
                className="w-full object-cover h-[80px] md:h-[90px] rounded-lg"
                src={"/images/atlantas.jpg"}
                width={600}
                height={400}
                sizes="33vw"
              />
            </div>
            <p className="font-bold flex-1">
              Dubai Atlantis City of Stars Dubai Atlantis City of Stars
            </p>
          </div>

          <Divider className="my-2" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-600">Adults</p>
              <p>2</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Child</p>
              <p>1</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Date</p>
              <p>Tue, Oct 01, 2024</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Time</p>
              <p>5 AM</p>
            </div>
          </div>

          <Divider className="my-2" />

          <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">$382 (incl Tax)</p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CheckoutPackageDetails
