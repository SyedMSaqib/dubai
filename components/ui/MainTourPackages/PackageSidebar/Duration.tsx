"use client"
import React, { useEffect } from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
import { useRouter, useSearchParams } from "next/navigation"

const Duration = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedDurations, setSelectedDurations] = React.useState<number>()

  // Move URL update logic to an effect
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (selectedDurations) {
      params.set("duration", selectedDurations.toString())
      router.push(`?${params.toString()}`)
    } else {
      params.delete("duration")
      router.push(`?${params.toString()}`)
    }
  }, [selectedDurations, router, searchParams])

  const handleDurationChange = (duration: number) => {
    setSelectedDurations((prevDuration) => (prevDuration === duration ? undefined : duration))
  }

  return (
    <>
      <div className="flex flex-col gap-2 pt-4">
        <h4 className="font-bold text-large">Duration</h4>
        <Checkbox
          onChange={() => handleDurationChange(1)}
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
          onChange={() => handleDurationChange(2)}
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
          onChange={() => handleDurationChange(6)}
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
          onChange={() => handleDurationChange(24)}
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
          onChange={() => handleDurationChange(26)}
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
