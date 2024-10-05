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
import { SubTourInfo, subTourRatingsCount } from "@/lib/db"

const PackagesDetails = async ({ params }: { params: { packagesDetails: string } }) => {
  const { packagesDetails } = params
  const subTourInfo = SubTourInfo(packagesDetails)
  const tourInfo = await subTourInfo()
  const rating = subTourRatingsCount(packagesDetails)
  const totalRating = await rating()

  return (
    <div className=" mx-auto max-w-[1400px]  lg:px-8 mt-4">
      <h1 className="text-xl lg:text-3xl font-bold  p-4">{slugToText(packagesDetails)}</h1>
      <div className="flex pl-4 ">
        <Ratings
          rating={totalRating._avg?.rating || 0}
          totalRatings={totalRating._count?.rating || 0}
        />
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between mt-2">
        <div className="w-full   lg:mb-0 ">
          <PackageDetailsCarousel items={tourInfo?.subTour.images || []} />
        </div>
        <div className=" w-full lg:w-[500px] xl:w-[600px] lg:shadow-lg  rounded-lg lg:border lg:border-gray-300 lg:bg-gray-200 ">
          <div className="px-8 py-6 space-y-3">
            <p className="text-xl font-semibold">
              From{" "}
              <span className="md:text-3xl text-2xl font-bold text-black">
                AED {tourInfo?.adultPrice.toLocaleString()}
              </span>
            </p>

            <div className="space-y-3">
              <p className="text-md ">Select Date</p>
              <DateInput />
              <PeopleModal addOns={tourInfo?.addOns || []} price={tourInfo?.adultPrice || 0} />
              <FullRefundChip />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4 lg:max-w-[80vw]  mx-auto">
        <Divider />
        <TourInfo time={tourInfo?.time ?? new Date()} duration={tourInfo?.duration ?? 0} />
        <Divider />
        <div>
          <p className="font-bold text-xl ">Overview</p>
          <p>{tourInfo?.description}</p>
        </div>
        <Divider />

        <TourInclusions
          highlights={tourInfo?.Highlight || []}
          whatsIncluded={tourInfo?.whatsIncluded || []}
          whatToExpect={tourInfo?.whatToExpect || null}
          additionalInfo={tourInfo?.additionalInfo || []}
          addOns={tourInfo?.addOns || []}
        />

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
