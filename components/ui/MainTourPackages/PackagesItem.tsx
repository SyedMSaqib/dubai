import { subTourRatingsCount } from "@/lib/db"
import ClockIcon from "@/utils/ClockIcon"
import { FullStar } from "@/utils/StaticSvgs"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"

type PropType = {
  src: string
  title: string
  price: number

  time: number
  description: string
  slug: string
  sharedRide: number
}

const PackagesItem = async ({
  src,
  title,
  price,
  time,
  description,
  slug,
  sharedRide,
}: PropType) => {
  const subTourRatingsCounts = subTourRatingsCount(slug)
  const ratings = await subTourRatingsCounts()
  const totalPrice = price + sharedRide

  return (
    <Card className="shadow-lg rounded-lg border md:border-zinc-300">
      <CardBody className="p-0">
        <div className="flex flex-row gap-4 w-full rounded-lg overflow-hidden">
          <div className="flex-shrink-0 w-[160px] h-[190px] md:w-[250px] md:h-[250px]  md:p-4">
            <Image
              alt="image"
              className="w-full object-cover h-[190px] md:h-[220px] md:rounded-lg"
              src={src}
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col w-full py-3 gap-y-6 md:gap-y-2 pr-4 relative ">
            <div className="flex justify-between items-start">
              <div className="text-sm md:text-base flex items-center gap-2">
                {ratings._count.rating > 0 && (
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <span className="text-yellow-500 font-bold">{FullStar}</span>
                    <span className="font-semibold text-gray-800 text-sm md:text-base">
                      {ratings._avg.rating?.toFixed(1)}
                    </span>
                    <span className="text-gray-600 text-xs md:text-sm">
                      ({ratings._count.rating} {ratings._count.rating === 1 ? "review" : "reviews"})
                    </span>
                  </div>
                )}
              </div>

              <p className="font-bold text-medium md:text-xl m-0 hidden md:block">
                AED {totalPrice?.toLocaleString()}
              </p>
            </div>
            <p className="text-sm md:text-xl font-semibold m-0 line-clamp-4 md:line-clamp-2">
              {title}
            </p>
            <p className="line-clamp-3 text-sm  hidden md:block m-0  text-justify max-h-[2.5rem] lg:max-h-[4rem] text-[#4d4d4d]">
              {description}
            </p>
            <span className="underline hover:cursor-pointer hidden md:block">Read more</span>

            <p className="text-sm md:text-md flex items-center m-0 gap-2">
              <span>{ClockIcon}</span>
              <span>{time} hrs</span>
            </p>
            <p className="font-bold text-lg md:text-xl m-0 md:hidden absolute bottom-0 right-4 mb-4">
              AED {totalPrice?.toLocaleString()}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PackagesItem
