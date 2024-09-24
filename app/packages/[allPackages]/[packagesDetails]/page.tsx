import PackageDetailsCarousel from "@/components/ui/PackageDetailsCarousel"
import Ratings from "@/components/ui/Ratings"
import { slugToText } from "@/utils/slug"
import React from "react"

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
        <div className="w-full  mb-6 lg:mb-0 ">
          <PackageDetailsCarousel items={items} />
        </div>
        <div className="bg-black w-full lg:w-[500px] h-[560px] hidden lg:block">rightbar</div>
      </div>
    </div>
  )
}

export default PackagesDetails
