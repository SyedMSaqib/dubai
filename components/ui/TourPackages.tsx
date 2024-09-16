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
      <Card className="w-[160px] h-[200px] lg:w-[250px] lg:h-[250px] relative ">
        <Image
          // removeWrapper
          alt="packages image"
          className="z-0 w-full h-full scale-125  object-cover"
          src={src}
          width={500}
          height={500}
        />
        <CardFooter className="absolute w-full bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between flex flex-col items-center">
          <div className="text-center w-full">
            <p className="text-white text-sm font-semibold text-center uppercase w-full break-words rounded shadow-lg">
              {text}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TourPackages
