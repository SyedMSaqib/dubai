import { Card, CardBody } from "@nextui-org/card"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
import PriceRangeSlider from "../ui/PriceRangeSlider"
import Ratings from "./RatingsSelection"

const PackageSidebar = () => {
  return (
    <Card className="lg:w-[300px] w-[200px] rounded-lg border  border-zinc-300 mt-[20px]">
      <CardBody>
        <h4 className="font-bold text-large">Time of Day</h4>
        <div className="flex flex-col gap-2 pt-4">
          <Checkbox color="success">Morning</Checkbox>
          <p className="text-[14px] text-zinc-500 pl-[30px]">Starts before 12pm</p>
          <Checkbox color="success">Afternoon</Checkbox>
          <p className="text-[14px] text-zinc-500 pl-[30px]">Starts after 12pm</p>
          <Checkbox color="success">Evening</Checkbox>
          <p className="text-[14px] text-zinc-500 pl-[30px]">Starts after 5pm</p>
          <Divider className="my-4" />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h4 className="font-bold text-large">Duration</h4>
          <Checkbox color="success">Up to 1 hour</Checkbox>
          <Checkbox color="success">1 to 3 hours</Checkbox>
          <Checkbox color="success">3 to 6 hours</Checkbox>
          <Checkbox color="success">6 to 1 Day</Checkbox>
          <Checkbox color="success">1 Day +</Checkbox>
          <Divider className="my-4" />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h4 className="font-bold text-large">Price</h4>
          <PriceRangeSlider />
          <Divider className="my-4" />
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <h4 className="font-bold text-large">Ratings</h4>
          <Ratings />
        </div>
      </CardBody>
    </Card>
  )
}

export default PackageSidebar
