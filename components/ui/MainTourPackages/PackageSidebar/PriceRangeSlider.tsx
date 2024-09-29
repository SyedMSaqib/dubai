"use client"
import React from "react"
import { Slider, SliderValue } from "@nextui-org/slider"
import { AddPrice } from "@/lib/Redux/features/sidebarSlice"
import { useAppDispatch } from "@/lib/Redux/hooks"

export default function App() {
  const dispatch = useAppDispatch()

  const [value, setValue] = React.useState<SliderValue>([0, 5000])
  React.useEffect(() => {
    if (Array.isArray(value)) {
      dispatch(AddPrice([value[0], value[1]])) // Dispatch the price range (min and max)
    }
  }, [value, dispatch])

  return (
    <div className="flex flex-col gap-2 pt-4">
      <h4 className="font-bold text-large">Price</h4>
      <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
        <Slider
          label="Select a budget"
          formatOptions={{ style: "currency", currency: "USD" }}
          step={10}
          maxValue={5000}
          minValue={0}
          value={value}
          onChange={setValue}
          className="max-w-md "
          classNames={{
            base: "max-w-md",
            filler: "bg-black",
            thumb: "bg-black border-black",
            track: "bg-gray-200",
          }}
          color="success"
          size="sm"
        />
        <p className="text-default-500 font-medium text-small">
          Selected budget: {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
        </p>
      </div>
    </div>
  )
}
