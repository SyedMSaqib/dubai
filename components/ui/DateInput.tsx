"use client"
import React from "react"
import { DatePicker } from "@nextui-org/date-picker"
import { DateValue, getLocalTimeZone, today } from "@internationalized/date"
import { useDateFormatter } from "@react-aria/i18n"

export default function DateInput() {
  const [value, setValue] = React.useState<DateValue>(() => today(getLocalTimeZone()))
  let formatter = useDateFormatter({ dateStyle: "full" })
  console.log(value ? formatter.format(value.toDate(getLocalTimeZone())) : "--")

  return (
    <div className="w-full flex flex-col gap-y-2">
      <DatePicker
        className="border border-zinc-400  rounded-xl bg-none"
        label="Date"
        value={value}
        onChange={setValue}
        // visibleMonths={2}
        color="success"
        calendarWidth={350}
      />
      <p className=" text-sm">
        Selected date: {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
      </p>
    </div>
  )
}
