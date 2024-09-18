type PropType = {
  rating: number
  totalRatings: number
}

const Ratings: React.FC<PropType> = ({ rating, totalRatings }) => {
  const FullStar = (
    /**
     * A component that displays a rating system of 5 stars.
     *
     * @param {number} rating - The rating to be displayed, from 0 to 5.
     * @param {number} totalRatings - The total number of ratings.
     *
     * @returns {React.ReactElement} A React element of the rating system.
     */

    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="gold">
      <path d="M12 .587l3.668 7.431 8.2 1.19-5.934 5.77 1.401 8.182L12 18.897l-7.334 3.863 1.4-8.182L.132 9.208l8.2-1.19L12 .587z" />
    </svg>
  )

  const HalfStar = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="gold">
      <defs>
        <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="gold" />
          <stop offset="50%" stopColor="lightgray" />
        </linearGradient>
      </defs>
      <path
        fill="url(#half)"
        d="M12 .587l3.668 7.431 8.2 1.19-5.934 5.77 1.401 8.182L12 18.897l-7.334 3.863 1.4-8.182L.132 9.208l8.2-1.19L12 .587z"
      />
    </svg>
  )
  const EmptyStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="lightgray"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.19-5.934 5.77 1.401 8.182L12 18.897l-7.334 3.863 1.4-8.182L.132 9.208l8.2-1.19L12 .587z" />
    </svg>
  )
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
      <div className="flex flex-row">
        {generateFullStars}
        {generateHalfStars}
        {generateEmptyStars}
      </div>
      <p className="pl-2">{totalRatings}</p>
    </div>
  )
}

export default Ratings
