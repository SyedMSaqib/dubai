import PackageDetailsCarousel from "@/components/ui/PackageDetailsCarousel"
import Ratings from "@/components/ui/Ratings"
import DateInput from "@/components/ui/MainTourPackages/DateInput"
import { slugToText } from "@/utils/slug"
import React from "react"
import { PeopleModal } from "@/components/ui/MainTourPackages/PeopleModal"
import FullRefundChip from "@/components/ui/MainTourPackages/FullRefundChip"
import TourInfo from "@/components/ui/MainTourPackages/TourInfo"
import { Divider } from "@nextui-org/divider"
import TourInclusions from "@/components/ui/MainTourPackages/TourInclusions"
import TourReviews from "@/components/ui/MainTourPackages/TourReviews"
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
    <div className=" mx-auto max-w-[1400px]  lg:px-8 mt-4">
      <h1 className="text-xl lg:text-3xl font-bold  p-4">{slugToText(packagesDetails)}</h1>
      <div className="flex pl-4 ">
        <Ratings rating={3.5} totalRatings={100} />
        <p className=" ml-2"> Reviews</p>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between mt-2">
        <div className="w-full   lg:mb-0 ">
          <PackageDetailsCarousel items={items} />
        </div>
        <div className=" w-full lg:w-[500px]  rounded-lg lg:border lg:border-gray-200 lg:bg-gray-200 ">
          <div className="px-3 py-3 space-y-3">
            <p className="text-xl font-semibold ">
              From <span className="md:text-3xl text-2xl ">$999</span>
            </p>
            <div className="space-y-3">
              <p className="text-md ">Select Date</p>
              <DateInput />
              <PeopleModal />
              <FullRefundChip />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4 lg:max-w-[80vw]  mx-auto">
        <Divider />
        <TourInfo />
        <Divider />
        <div>
          <p className="font-bold text-xl ">Overview</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corrupti quo totam
            enim illo! Eveniet quibusdam cupiditate quidem tenetur deserunt error asperiores fugit
            eaque ullam vitae! Ut esse, aspernatur pariatur ea quod alias est consectetur error
            officiis exercitationem magni, voluptate non, excepturi earum at? Aspernatur
            consequuntur odio minima ullam magnam suscipit unde voluptatum saepe voluptatem non
            recusandae molestias eius magni quo vel et esse repellat tenetur facilis dicta, culpa
            blanditiis! Illo eveniet, sint dolor maxime numquam doloribus reiciendis ex veritatis
            ea! Voluptates similique itaque quidem sit, culpa reiciendis tenetur fugit aliquam
            perspiciatis dignissimos non repudiandae amet, omnis sunt illo doloribus!
          </p>
        </div>
        <Divider />
        <TourInclusions />
        <Divider />
        <div>
          <p className="font-bold text-xl mt-[50px] ">Reviews</p>
          <div className="py-4">
            <TourReviews rating={5} totalRatings={""} />
            <TourReviews rating={3} totalRatings={""} />
            <TourReviews rating={4.6} totalRatings={""} />
            <TourReviews rating={1} totalRatings={""} />
            <TourReviews rating={5} totalRatings={""} />
            <p className="text-center underline hover:cursor-pointer">Load more...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesDetails
