import React from "react"

interface WhyBookUsProps {
  logo: string
  header: string
  body: string
}

const WhyBookUs: React.FC<WhyBookUsProps> = ({ logo, header, body }) => {
  return (
    <div>
      <h3 className="text-center sm:text-xl  ">{logo}</h3>
      <h3 className="text-center sm:text-xl  pt-2">{header}</h3>
      <h3 className="text-center sm:text-xl  pt-2">{body}</h3>
    </div>
  )
}

export default WhyBookUs
