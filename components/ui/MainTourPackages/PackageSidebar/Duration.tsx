import React from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
const Duration = () => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-4">
        <h4 className="font-bold text-large">Duration</h4>
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          color="success"
        >
          Up to 1 hour
        </Checkbox>
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          color="success"
        >
          1 to 3 hours
        </Checkbox>
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          color="success"
        >
          3 to 6 hours
        </Checkbox>
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          color="success"
        >
          6 to 1 Day
        </Checkbox>
        <Checkbox
          classNames={{
            base: "inline-flex max-w-md w-full bg-content1 m-0",
            wrapper:
              "before:border-black before:transition-colors group-data-[selected=true]:before:border-transparent",
            icon: "text-black",
          }}
          color="success"
        >
          1 Day +
        </Checkbox>
        <Divider className="my-4" />
      </div>
    </>
  )
}

export default Duration
