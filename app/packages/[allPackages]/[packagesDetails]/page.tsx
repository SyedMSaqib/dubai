import PackageDetailsCarousel from "@/components/ui/PackageDetailsCarousel"
import { slugToText } from "@/utils/slug"
import React from "react"

const PackagesDetails = ({ params }: { params: { packagesDetails: string } }) => {
  const { packagesDetails } = params

  return (
    <div className="mb-96 mx-auto max-w-[1400px]  lg:px-8 mt-10">
      <h1 className="text-2xl font-bold mb-6">{slugToText(packagesDetails)}</h1>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full  mb-6 lg:mb-0 ">
          <PackageDetailsCarousel />
        </div>
        <div className="bg-black w-full lg:w-[500px] h-[560px] hidden lg:block">rightbar</div>
      </div>
    </div>
  )
}

export default PackagesDetails
