import { Card, CardBody } from "@nextui-org/card"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"

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
          <Checkbox color="success">Morning</Checkbox>
          <Checkbox color="success">Afternoon</Checkbox>

          <Checkbox color="success">Evening</Checkbox>
          <Divider className="my-4" />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h4 className="font-bold text-large">Time of Day</h4>
          <Checkbox color="success">Morning</Checkbox>
          <Checkbox color="success">Afternoon</Checkbox>

          <Checkbox color="success">Evening</Checkbox>
          <Divider className="my-4" />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h4 className="font-bold text-large">Time of Day</h4>
          <Checkbox color="success">Morning</Checkbox>
          <Checkbox color="success">Afternoon</Checkbox>

          <Checkbox color="success">Evening</Checkbox>
          <Divider className="my-4" />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h4 className="font-bold text-large">Time of Day</h4>
          <Checkbox color="success">Morning</Checkbox>
          <Checkbox color="success">Afternoon</Checkbox>

          <Checkbox color="success">Evening</Checkbox>
          <Divider className="my-4" />
        </div>
      </CardBody>
    </Card>
  )
}

export default PackageSidebar
