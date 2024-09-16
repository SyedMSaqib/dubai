import React from "react"
import { Card, CardFooter } from "@nextui-org/card"
import Image from "next/image"
// import { Image } from "@nextui-org/image"

interface TourPackagesProps {
  src: string
  text: string
}
const TourPackages: React.FC<TourPackagesProps> = ({ src, text }) => {
  return (
    <div className="flex justify-center">
      <Card className="w-[160px] h-[200px] md:w-[250px] md:h-[250px] relative ">
        <Image
          // removeWrapper
          alt="packages image"
          className="z-0 w-full h-full scale-125  object-cover"
          src={src}
          width={500}
          height={500}
        />
        <CardFooter className="absolute w-full bg-gray-200/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between flex flex-col items-center">
          <div className="text-center h-[20px]">
            <p className="text-black text-medium font-semibold text-center uppercase">{text}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TourPackages
