"use client"
import React, { useEffect } from "react"
import { DatePicker } from "@nextui-org/date-picker"
import { DateValue, getLocalTimeZone, today } from "@internationalized/date"
import { useDateFormatter } from "@react-aria/i18n"
import { useDispatch } from "react-redux"
import { AddDate } from "@/lib/Redux/features/bookingSlice"

export default function DateInput() {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState<DateValue>(() => today(getLocalTimeZone()))

  useEffect(() => {
    // Convert the Date object to an ISO string before dispatching
    dispatch(AddDate(value.toDate(getLocalTimeZone()).toISOString()))
  }, [value, dispatch])
  const formatter = useDateFormatter({ dateStyle: "full" })

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
        {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
      </p>
    </div>
  )
}
