import PackageDetailsCarousel from "@/components/ui/PackageDetailsCarousel"
import Ratings from "@/components/ui/Ratings"
import DateInput from "@/components/ui/DateInput"
import { slugToText } from "@/utils/slug"
import React from "react"
import { Button } from "@nextui-org/button"

const PackagesDetails = ({ params }: { params: { packagesDetails: string } }) => {
  const { packagesDetails } = params
  const items: string[] = [
    "/images/dubai4.jpg",
    "/images/dubai.jpg",
    "/images/dubai2.jpg",
    "/images/dubai3.jpg",
    "/images/dubai5.jpg",
  ]

  return (
    <div className="mb-96 mx-auto max-w-[1400px]  lg:px-8 mt-4">
      <h1 className="text-3xl font-bold  pl-4">{slugToText(packagesDetails)}</h1>
      <div className="flex pl-4 ">
        <Ratings rating={3.5} totalRatings={100} />
        <p className=" ml-2"> Reviews</p>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between mt-2">
        <div className="w-full   lg:mb-0 ">
          <PackageDetailsCarousel items={items} />
        </div>
        <div className=" w-full lg:w-[500px]  rounded-lg lg:border lg:border-zinc-400 ">
          <div className="p-6 space-y-3">
            <p className="text-3xl font-semibold ">
              From <span>$999</span>
            </p>
            <div className="space-y-3">
              <p className="text-lg font-semibold">Select Date</p>
              <DateInput />
              <Button className="bg-[#74DFA2] w-full" href="#" variant="flat">
                Reserve Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesDetails
