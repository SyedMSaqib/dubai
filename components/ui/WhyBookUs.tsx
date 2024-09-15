import Image from "next/image"
import React from "react"

interface WhyBookUsProps {
  logo: string
  header: string
  body: string
}

const WhyBookUs: React.FC<WhyBookUsProps> = ({ logo, header, body }) => {
  return (
    <div className="flex flex-col items-center ">
      <Image src={logo} alt={"icon"} width={50} height={50} priority />
      <h3 className="text-center sm:text-xl  pt-2 font-bold">{header}</h3>
      <h3 className="text-center sm:text-lg  pt-2">{body}</h3>
    </div>
  )
}

export default WhyBookUs
