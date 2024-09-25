import { FullStar, EmptyStar, HalfStar } from "@/utils/Stars"

type PropType = {
  rating: number
  totalRatings: number
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
    <p key={index}>{FullStar}</p>
  ))
  const generateHalfStars = Array.from({ length: halfStar }, (_, index) => (
    <p key={index}>{HalfStar}</p>
  ))
  const generateEmptyStars = Array.from({ length: emptyStar }, (_, index) => (
    <p key={index}>{EmptyStar}</p>
  ))

  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center">
        {generateFullStars}
        {generateHalfStars}
        {generateEmptyStars}
      </div>
      <p className="pl-2">{totalRatings}</p>
    </div>
  )
}

export default Ratings
