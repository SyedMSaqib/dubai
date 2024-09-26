import Ratings from "../Ratings"
type PropType = {
  rating: number
  totalRatings: number | string
}

const TourReviews = ({ rating, totalRatings }: PropType) => {
  return (
    <>
      <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
        <div className="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
          <div className="flex items-center gap-3">
            <Ratings rating={rating} totalRatings={totalRatings} />
          </div>
          <div className="flex items-center gap-3">
            <h6 className="font-semibold text-lg leading-8 text-black">@john.doe</h6>
            <p className="font-medium text-base leading-7 text-gray-400">Nov 01, 2023</p>
          </div>
        </div>

        <p className="font-normal text-lg leading-8 text-gray-500">
          I recently had the opportunity to explore Pagedones UI design system, and it left a
          lasting impression on my workflow. The system seamlessly blends user-friendly features
          with a robust set of design components, making it a go-to for creating visually stunning
          and consistent interfaces.
        </p>
        <aside className="flex items-center mt-3">
          <p className="inline-flex items-center text-sm font-medium text-gray-600 hover:underline  hover:cursor-pointer">
            <svg
              className="w-3.5 h-3.5 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
            </svg>
            Helpful
          </p>
          <p className="inline-flex items-center text-sm font-medium text-gray-600 hover:underline hover:cursor-pointer  group ms-5">
            <svg
              className="w-3.5 h-3.5 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z" />
            </svg>
            Not helpful
          </p>
        </aside>
      </div>
    </>
  )
}

export default TourReviews
