"use client"
import React, { useEffect } from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
import { useRouter, useSearchParams } from "next/navigation"

const Duration = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedDurations, setSelectedDurations] = React.useState<number | null>(null)
  const [hasInteracted, setHasInteracted] = React.useState(false)
  // Move URL update logic to an effect
  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (hasInteracted) {
      if (selectedDurations !== null) {
        params.set("duration", selectedDurations.toString())
      } else {
        params.delete("duration")
      }
      router.push(`?${params.toString()}`)
    }
  }, [selectedDurations, hasInteracted, router, searchParams])

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    const duration = params.get("duration")

    if (duration) {
      setSelectedDurations(parseInt(duration, 10)) // Adding radix 10 for clarity
    }
  }, [])

  const handleDurationChange = (duration: number) => {
    setSelectedDurations((prev) => (prev === duration ? null : duration)) // Toggle selection
    setHasInteracted(true)
  }

  return (
    <>
      <div className="flex flex-col gap-2 pt-4">
        <h4 className="font-bold text-large">Duration</h4>
        <Checkbox
          onValueChange={() => handleDurationChange(1)}
          isSelected={selectedDurations === 1}
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
          onValueChange={() => handleDurationChange(2)}
          isSelected={selectedDurations === 2}
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
          onValueChange={() => handleDurationChange(6)}
          isSelected={selectedDurations === 6}
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
          onValueChange={() => handleDurationChange(24)}
          isSelected={selectedDurations === 24}
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
          onValueChange={() => handleDurationChange(26)}
          isSelected={selectedDurations === 26}
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
