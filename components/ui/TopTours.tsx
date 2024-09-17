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
    <div className="w-full max-w-sm mx-auto p-4">
      <Card className="shadow-none">
        <CardBody className="overflow-visible p-0">
          <Image
            alt={title}
            width={500}
            height={500}
            className="w-full object-cover h-[190px] md:h-[240px]"
            src={src}
            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 70vw, 100vw"
            priority
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
