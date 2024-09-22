"use client"
import React from "react"
import { Pagination } from "@nextui-org/pagination"

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <div className="flex flex-col gap-5">
      <Pagination total={20} color="success" page={currentPage} onChange={setCurrentPage} />
      <div className="flex gap-2"></div>
    </div>
  )
}
