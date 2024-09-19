"use client"
import { useState } from "react"
import { Checkbox } from "@nextui-org/checkbox"
import { FullStar, EmptyStar } from "@/utils/Stars"

const Ratings = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const handleCheckboxChange = (rating: number) => {
    setSelectedRating(selectedRating === rating ? null : rating)
  }

  return (
    <>
      <Checkbox
        color="success"
        isSelected={selectedRating === 1}
        onChange={() => handleCheckboxChange(1)}
      >
        <div className="flex items-center">
          <div className="flex">
            {FullStar}
            {FullStar}
            {FullStar}
            {FullStar}
            {FullStar}
          </div>
        </div>
      </Checkbox>
      <Checkbox
        color="success"
        isSelected={selectedRating === 2}
        onChange={() => handleCheckboxChange(2)}
      >
        <div className="flex items-center">
          <div className="flex">
            {FullStar}
            {FullStar}
            {FullStar}
            {FullStar}
            {EmptyStar}
          </div>
          <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-black bg-greenBG rounded-full">
            4 and above
          </span>
        </div>
      </Checkbox>
      <Checkbox
        color="success"
        isSelected={selectedRating === 3}
        onChange={() => handleCheckboxChange(3)}
      >
        <div className="flex items-center">
          <div className="flex">
            {FullStar}
            {FullStar}
            {FullStar}
            {EmptyStar}
            {EmptyStar}
          </div>
          <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-black bg-greenBG rounded-full">
            3 and above
          </span>
        </div>
      </Checkbox>
    </>
  )
}

export default Ratings
