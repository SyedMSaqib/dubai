import React from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"

const TimeOfDay = () => {
  return (
    <>
      <h4 className="font-bold text-large">Time of Day</h4>
      <div className="flex flex-col gap-2 pt-4">
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          className="font-semibold"
          color="success"
        >
          Morning
        </Checkbox>
        <p className="text-[14px] text-zinc-500 pl-[30px]">Starts before 12pm</p>
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          className="font-semibold"
          color="success"
        >
          Afternoon
        </Checkbox>
        <p className="text-[14px] text-zinc-500 pl-[30px]">Starts after 12pm</p>
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          className="font-semibold"
          color="success"
        >
          Evening
        </Checkbox>
        <p className="text-[14px] text-zinc-500 pl-[30px]">Starts after 5pm</p>
        <Divider className="my-4" />
      </div>
    </>
  )
}

export default TimeOfDay
