import { FullStar, EmptyStar, HalfStar } from "@/utils/StaticSvgs"

type PropType = {
  rating: number
  totalRatings: number | string
}

const Ratings: React.FC<PropType> = ({ rating, totalRatings }) => {
  /**
   * A component that displays a rating system of 5 stars.
   *
   * @param {number} rating - The rating to be displayed, from 0 to 5.
   * @param {number} totalRatings - The total number of ratings.
   *
   * @returns {React.ReactElement} A React element of the rating system.
   */

  const isFloat = (num: number) => {
    return num !== Math.floor(num)
  }

  const getRatings = (rating: number) => {
    let fullStar = 0
    let halfStar = 0
    let emptyStar = 0
    const rounded = Number(rating.toFixed(1))

    if (isFloat(rounded)) {
      const firstDigit = Math.trunc(rounded)
      fullStar = firstDigit
      halfStar = 1
      emptyStar = 5 - (fullStar + halfStar)
    } else {
      fullStar = Math.trunc(rounded)
      halfStar = 0
      emptyStar = 5 - fullStar
    }

    return { fullStar, halfStar, emptyStar }
  }

  const { fullStar, halfStar, emptyStar } = getRatings(rating)

  const generateFullStars = Array.from({ length: fullStar }, (_, index) => (
    <span key={index} className="text-yellow-500">
      {FullStar}
    </span>
  ))
  const generateHalfStars = Array.from({ length: halfStar }, (_, index) => (
    <span key={index} className="text-yellow-500">
      {HalfStar}
    </span>
  ))
  const generateEmptyStars = Array.from({ length: emptyStar }, (_, index) => (
    <span key={index} className="text-gray-300">
      {EmptyStar}
    </span>
  ))

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center">
        {generateFullStars}
        {generateHalfStars}
        {generateEmptyStars}
      </div>

      <p className="pl-2 text-gray-600 text-sm md:text-base">
        ({totalRatings} {totalRatings === 1 ? "review" : "reviews"})
      </p>
    </div>
  )
}

export default Ratings
