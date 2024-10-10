"use client"
import React, { useEffect } from "react"
import { Slider, SliderValue } from "@nextui-org/slider"
import { useRouter, useSearchParams } from "next/navigation"

export default function PriceSlider() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [value, setValue] = React.useState<SliderValue>([0, 5000])

  const [hasInteracted, setHasInteracted] = React.useState(false) // Track user interaction

  const handleSliderChange = (newValue: SliderValue) => {
    setValue(newValue)
    setHasInteracted(true) // Mark that the user has interacted
  }

  useEffect(() => {
    if (hasInteracted && Array.isArray(value)) {
      // Only update the URL if the user has interacted
      //Now it doesn't allow it to update the URL if the user hasn't interacted i.e initial load
      const params = new URLSearchParams(searchParams)
      params.set("minPrice", value[0].toString())
      params.set("maxPrice", value[1].toString())
      router.push(`?${params.toString()}`)
    }
  }, [value, hasInteracted, router, searchParams])
  return (
    <div className="flex flex-col gap-2 pt-4">
      <h4 className="font-bold text-large">Price</h4>
      <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
        <Slider
          label="Select a budget"
          formatOptions={{ style: "currency", currency: "AED" }}
          step={100}
          maxValue={5000}
          minValue={0}
          value={value}
          onChange={handleSliderChange}
          className="max-w-md"
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
          Selected budget: {Array.isArray(value) && value.map((b) => `AED ${b}`).join(" – ")}
        </p>
      </div>
    </div>
  )
}
