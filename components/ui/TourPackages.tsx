import React from "react"
import { Card, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"

interface TourPackagesProps {
  src: string
  text: string
}
const TourPackages: React.FC<TourPackagesProps> = ({ src, text }) => {
  return (
    <div className="flex justify-center">
      <Card isFooterBlurred className="w-[160px] h-[150px] md:w-[250px] md:h-[250px] relative ">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={src}
        />
        <CardFooter className="absolute w-full bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between flex flex-col items-center">
          <div className="text-center h-[20px]">
            <p className="text-white text-sm font-semibold text-center uppercase">{text}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TourPackages
