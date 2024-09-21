import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"

const PackagesItem = () => {
  return (
    <Card className="shadow-none lg:rounded-lg">
      <CardBody className="overflow-visible p-0">
        <Image
          alt="image"
          className="w-full object-cover h-[190px] md:h-[240px]"
          src="/images/marinaYacht.jpg"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardBody>
    </Card>
  )
}

export default PackagesItem
