"use client"
import React from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
import { AddDuration } from "@/lib/Redux/features/sidebarSlice"
import { useAppDispatch } from "@/lib/Redux/hooks"
const Duration = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="flex flex-col gap-2 pt-4">
        <h4 className="font-bold text-large">Duration</h4>
        <Checkbox
          onClick={() => dispatch(AddDuration(1))}
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
          onClick={() => dispatch(AddDuration(3))}
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
          onClick={() => dispatch(AddDuration(6))}
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
          onClick={() => dispatch(AddDuration(24))}
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
          onClick={() => dispatch(AddDuration(26))}
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
