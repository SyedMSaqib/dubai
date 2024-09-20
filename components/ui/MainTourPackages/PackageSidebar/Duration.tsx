import React from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
const Duration = () => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-4">
        <h4 className="font-bold text-large">Duration</h4>
        <Checkbox color="success">Up to 1 hour</Checkbox>
        <Checkbox color="success">1 to 3 hours</Checkbox>
        <Checkbox color="success">3 to 6 hours</Checkbox>
        <Checkbox color="success">6 to 1 Day</Checkbox>
        <Checkbox color="success">1 Day +</Checkbox>
        <Divider className="my-4" />
      </div>
    </>
  )
}

export default Duration
