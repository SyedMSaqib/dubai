import React from "react"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import Image from "next/image"
import Ratings from "./Ratings"

type TopToursProps = {
  src: string
  title: string
  price: number
  rating: number
  totalRatings: number
}
const TopTours: React.FC<TopToursProps> = ({ src, title, price, rating, totalRatings }) => {
  return (
    <div className="w-full gap-2 max-w-sm mx-auto px-[2px]">
      <Card className="shadow-none">
        <CardBody className="overflow-visible p-0">
          <Image
            alt={title}
            className="w-full object-cover h-[190px] md:h-[240px]"
            src={src}
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </CardBody>

        <CardFooter className="text-small flex flex-col items-start p-4">
          <div>
            <b className="text-lg">{title}</b>
          </div>
          <div className="text-default-500">
            {<Ratings rating={rating} totalRatings={totalRatings} />}
          </div>
          <div className="font-semibold text-lg">${price}</div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TopTours
