import ClockIcon from "@/utils/ClockIcon"
import { FullStar } from "@/utils/StaticSvgs"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"

type PropType = {
  src: string
  title: string
  price: number
  rating: number
  totalRatings: number
  time: number
  description: string
}

const PackagesItem = ({ src, title, price, rating, totalRatings, time, description }: PropType) => {
  console.log(time)
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
          <div className="flex flex-col w-full py-3 gap-2 pr-4 relative ">
            <div className="flex justify-between items-start">
              <p className="text-sm md:text-base flex items-center gap-2">
                <span className="text-yellow-500 font-bold">{FullStar}</span>
                <span className="font-semibold text-gray-800">{rating.toFixed(1)}</span>
                <span className="text-gray-600 text-xs md:text-sm">
                  ({totalRatings} {totalRatings === 1 ? "review" : "reviews"})
                </span>
              </p>

              <p className="font-bold text-medium md:text-xl m-0 hidden md:block">${price}</p>
            </div>
            <p className="text-sm md:text-xl font-semibold m-0">{title}</p>
            <p className="line-clamp-3 text-sm  hidden md:block m-0  text-justify max-h-[2.5rem] lg:max-h-[4rem] text-[#4d4d4d]">
              {description}
            </p>
            <span className="underline hover:cursor-pointer hidden md:block">Read more</span>

            <p className="text-sm md:text-md flex items-center m-0 gap-2">
              <span>{ClockIcon}</span>
              <span>{time} hrs</span>
            </p>
            <p className="font-bold text-lg md:text-xl m-0 md:hidden absolute bottom-0 right-4 mb-4">
              ${price}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PackagesItem
