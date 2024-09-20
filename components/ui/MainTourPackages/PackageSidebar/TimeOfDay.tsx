import React from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"

const TimeOfDay = () => {
  return (
    <>
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
    </>
  )
}

export default TimeOfDay
