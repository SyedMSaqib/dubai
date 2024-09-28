import { Card } from "@nextui-org/card"
import Image from "next/image"

interface TourPackagesProps {
  src: string
  text: string
}

const TourPackages: React.FC<TourPackagesProps> = ({ src, text }) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-[100%] h-[120px] sm:h-[160px] lg:h-[200px]   relative rounded-lg">
        <Image
          alt="packages image"
          className="z-0 w-full h-full scale-125 object-cover"
          src={src}
          fill
          blurDataURL="data:..."
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Card>
      <p className="mt-2 text-center text-xs lg:text-medium font-semibold uppercase break-words">
        {text}
      </p>
      <p className=" text-center text-gray-500 text-xs lg:text-medium font-semibold uppercase break-words">
        (200 tours)
      </p>
    </div>
  )
}

export default TourPackages
