import { Card, CardBody } from "@nextui-org/card"
import PriceRangeSlider from "./PriceRangeSlider"
import RatingSelection from "./RatingsSelection"
import TimeOfDay from "./TimeOfDay"
import Duration from "./Duration"

const PackageSidebar = () => {
  return (
    <Card className="lg:w-[300px] w-[200px] rounded-lg border  border-zinc-300 mt-[20px]">
      <CardBody>
        <TimeOfDay />
        <Duration />
        <PriceRangeSlider />
        <RatingSelection />
      </CardBody>
    </Card>
  )
}

export default PackageSidebar