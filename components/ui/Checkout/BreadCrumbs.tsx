import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs"
import React from "react"

const BreadCrumbs = () => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("Contact Details")

  return (
    <Breadcrumbs
      className="flex justify-center items-center space-x-4 py-4"
      aria-label="Checkout Steps"
      onAction={(key) => setCurrentPage(key)}
    >
      <BreadcrumbItem
        key="Contact Details"
        isCurrent={currentPage === "Contact Details"}
        className={`text-lg ${
          currentPage === "Contact Details" ? "font-bold text-black" : "text-gray-600"
        }`}
      >
        <span className="flex items-center space-x-2">
          {currentPage === "Contact Details" && (
            <span className="bg-black text-white rounded-full w-4 h-4 md:w-6 md:h-6 text-xs flex items-center justify-center">
              1
            </span>
          )}
          <span>Contact Details</span>
        </span>
      </BreadcrumbItem>

      <BreadcrumbItem
        key="Activity Details"
        isCurrent={currentPage === "Activity Details"}
        className={`text-lg ${
          currentPage === "Activity Details" ? "font-bold text-black" : "text-gray-600"
        }`}
      >
        <span className="flex items-center space-x-2">
          {currentPage === "Activity Details" && (
            <span className="bg-black text-white rounded-full w-4 h-4 md:w-6 md:h-6 text-xs flex items-center justify-center">
              2
            </span>
          )}
          <span>Activity Details</span>
        </span>
      </BreadcrumbItem>

      <BreadcrumbItem
        key="Payment Details"
        isCurrent={currentPage === "Payment Details"}
        className={`text-lg ${
          currentPage === "Payment Details" ? "font-bold text-black" : "text-gray-600"
        }`}
      >
        <span className="flex items-center space-x-1">
          {currentPage === "Payment Details" && (
            <span className="bg-black text-white rounded-full w-4 h-4 md:w-6 md:h-6 flex text-xs items-center justify-center">
              3
            </span>
          )}
          <span>Payment Details</span>
        </span>
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadCrumbs
