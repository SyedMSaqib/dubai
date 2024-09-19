"use client"
import React from "react"
import { Slider, SliderValue } from "@nextui-org/slider"

export default function App() {
  const [value, setValue] = React.useState<SliderValue>([100, 3000])

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider
        label="Select a budget"
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        maxValue={5000}
        minValue={0}
        value={value}
        onChange={setValue}
        className="max-w-md"
        color="success"
        size="sm"
      />
      <p className="text-default-500 font-medium text-small">
        Selected budget: {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
      </p>
    </div>
  )
}