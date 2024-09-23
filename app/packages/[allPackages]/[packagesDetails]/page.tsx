import { slugToText } from "@/utils/slug"
import React from "react"

const PackagesDetails = ({ params }: { params: { packagesDetails: string } }) => {
  const { packagesDetails } = params
  return <div>{slugToText(packagesDetails)}</div>
}

export default PackagesDetails
