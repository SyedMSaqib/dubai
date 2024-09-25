export const FullStar: JSX.Element = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="gold">
    <path d="M12 .587l3.668 7.431 8.2 1.19-5.934 5.77 1.401 8.182L12 18.897l-7.334 3.863 1.4-8.182L.132 9.208l8.2-1.19L12 .587z" />
  </svg>
)

export const HalfStar: JSX.Element = (
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
export const EmptyStar: JSX.Element = (
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
