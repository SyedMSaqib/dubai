import { Card, CardBody } from "@nextui-org/card"
import PriceRangeSlider from "./PriceRangeSlider"
import Duration from "./Duration"

const PackageSidebar = () => {
  return (
    <Card className="lg:w-[270px] xl:w-[300px] rounded-lg border  border-zinc-300 mt-[20px] shadow-lg">
      <CardBody>
        {/* <TimeOfDay /> */}
        <Duration />
        <PriceRangeSlider />
        {/* <RatingSelection /> */}
      </CardBody>
    </Card>
  )
}

export default PackageSidebar
