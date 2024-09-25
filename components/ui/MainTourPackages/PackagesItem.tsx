import ClockIcon from "@/utils/ClockIcon"
import { FullStar } from "@/utils/Stars"
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
  return (
    <Card className="shadow-lg md:shadow-2xl rounded-lg md:border md:border-zinc-300">
      <CardBody className="p-0">
        <div className="flex flex-row gap-4 w-full rounded-lg overflow-hidden">
          <div className="flex-shrink-0 w-[170px] md:w-[350px] md:p-4">
            <Image
              alt="image"
              className="w-full object-cover h-[160px] md:h-[240px] md:rounded-lg"
              src={src}
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col w-full py-3 gap-2 pr-4 relative ">
            <div className="flex justify-between items-start">
              <p className="text-sm md:text-medium flex items-center gap-2">
                <span>{FullStar}</span>
                {rating} ({totalRatings})
              </p>
              <p className="font-bold text-medium md:text-xl m-0 hidden md:block">${price}</p>
            </div>
            <p className="text-md md:text-xl font-semibold m-0">{title}</p>
            <p className="line-clamp-3 text-sm hidden md:block m-0  text-justify max-h-[4rem] text-[#4d4d4d]">
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
