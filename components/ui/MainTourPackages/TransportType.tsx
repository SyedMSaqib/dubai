"use client"
import { RadioGroup, Radio } from "@nextui-org/radio"
import React from "react"

export default function TransportType() {
  const [value, setValue] = React.useState("private")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
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
