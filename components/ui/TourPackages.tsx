import { Card } from "@nextui-org/card"
import Image from "next/image"

type Image = {
  id: string
  src: string
  altText: string | null
  tourId: string
  createdAt: Date
  updatedAt: Date
}

const TourPackages = ({
  image,
  name,
  count,
}: {
  image: Image | null
  name: string
  count: number
}) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-[100%] h-[120px] sm:h-[160px] lg:h-[200px]   relative rounded-lg">
        <Image
          alt={(image && image.altText) || "image"}
          className="z-0 w-full h-full scale-125 object-cover"
          src={image?.src || ""}
          fill
          blurDataURL="data:..."
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Card>
      <p className="mt-2 text-center text-xs lg:text-medium font-semibold uppercase break-words">
        {name}
      </p>
      <p className=" text-center text-gray-500 text-xs lg:text-medium font-semibold uppercase break-words">
        ({count} tours)
      </p>
    </div>
  )
}

export default TourPackages
