"use client"
import React, { useState, useEffect } from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
import { useRouter, useSearchParams } from "next/navigation"

const TimeOfDay = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedTimes, setSelectedTimes] = useState<string[]>([])

  const handleTimeChange = (time: string) => {
    setSelectedTimes((prev) => {
      const newTimes = prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]

      return newTimes
    })
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (selectedTimes.length > 0) {
      params.set("timeOfDay", selectedTimes.join(","))
    } else {
      params.delete("timeOfDay")
    }
    router.push(`?${params.toString()}`)
  }, [selectedTimes, router, searchParams])

  return (
    <>
      <h4 className="font-bold text-large">Time of Day</h4>
      <div className="flex flex-col gap-2 pt-4">
        <Checkbox
          isSelected={selectedTimes.includes("morning")}
          onChange={() => handleTimeChange("morning")}
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
          isSelected={selectedTimes.includes("afternoon")}
          onChange={() => handleTimeChange("afternoon")}
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
          isSelected={selectedTimes.includes("evening")}
          onChange={() => handleTimeChange("evening")}
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
