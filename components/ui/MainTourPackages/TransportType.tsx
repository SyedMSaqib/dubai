"use client"
import { AddRideType } from "@/lib/Redux/features/peopleModal"
import { useAppDispatch } from "@/lib/Redux/hooks"
import { RadioGroup, Radio } from "@nextui-org/radio"
import React from "react"

export default function TransportType() {
  const dispatch = useAppDispatch()

  const [value, setValue] = React.useState("shared")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    dispatch(AddRideType(e.target.value))
  }

  return (
    <RadioGroup color="warning" defaultValue={value} onChange={handleChange}>
      <p className="font-bold">Transport type</p>
      <div className="flex flex-row justify-between md:justify-start md:gap-[200px]">
        <Radio value="private" description="Exclusive vehicle, flexible schedule">
          Private
        </Radio>
        <Radio value="shared" description="Cost-effective, meet travelers">
          Shared
        </Radio>
      </div>
    </RadioGroup>
  )
}
