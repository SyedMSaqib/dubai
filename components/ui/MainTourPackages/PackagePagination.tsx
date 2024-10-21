"use client"
import React from "react"
import { Pagination } from "@nextui-org/pagination"
import { useRouter, useSearchParams } from "next/navigation"

export default function App({ totalCount, itemsPerPage }: { totalCount: number, itemsPerPage: number }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get current page from URL or default to 1
  const pageParam = searchParams.get("page")
  const currentPage = pageParam ? Number(pageParam) : 1
  const totalPages = Math.max(1, Math.ceil(totalCount / itemsPerPage))

  // Validate current page
  const validatedPage = Math.min(Math.max(1, currentPage), totalPages)

  // If the current page in URL is invalid, correct it
  React.useEffect(() => {
    if (currentPage !== validatedPage) {
      router.replace(`?page=${validatedPage}`)
    }
  }, [currentPage, validatedPage, router])

  const startItem = (validatedPage - 1) * itemsPerPage + 1
  const endItem = Math.min(validatedPage * itemsPerPage, totalCount)

  return (
    <div className="flex flex-col gap-5">
      <div className="text-sm text-gray-500 flex justify-center items-center">
        {totalCount > 0
          ? `Showing ${startItem}-${endItem} of ${totalCount} items`
          : "No items to display"}
      </div>
      {totalCount > 0 && (
        <Pagination
          total={totalPages}
          page={validatedPage}
          initialPage={1}
          color="success"
          onChange={(page) => router.push(`?page=${page}`)}
        />
      )}
    </div>
  )
}
