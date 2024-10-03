import PackageSidebar from "@/components/ui/MainTourPackages/PackageSidebar/PackageSidebar"
import MobilePackageFilter from "@/components/ui/MainTourPackages/PackageSidebar/MobilePackageFilter"
import PackagesItem from "@/components/ui/MainTourPackages/PackagesItem"
import { packagesData } from "@/utils/ToursStatic"
import PackagePagination from "@/components/ui/MainTourPackages/PackagePagination"
import Link from "next/link"
import { createSlug, slugToText } from "@/utils/slug"
import Ratings from "@/components/ui/Ratings"
import { getAllSubTours } from "@/lib/db"

type searchParams = { [key: string]: string }
const Packages = async ({
  params,
  searchParams,
}: {
  params: { allPackages: string }
  searchParams: searchParams
}) => {
  const { allPackages } = params
  const { page } = searchParams

  const getAllSubToursFunction = getAllSubTours(page, allPackages)
  const { totalCount, subTours, ratingStats } = await getAllSubToursFunction()

  const packageName = slugToText(allPackages)
  return (
    <div className="mx-auto  2xl:max-w-[80vw] px-4 sm:px-6 lg:px-8 mt-10">
      <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold">{packageName}</h3>
      <div className="flex items-center ">
        <Ratings
          rating={ratingStats._avg?.rating || 0}
          totalRatings={ratingStats._count?.rating || 0}
        />
      </div>
      <div>
        <MobilePackageFilter />
      </div>
      <div className=" flex flex-row gap-2 mt-5 lg:mt-0">
        <div className="hidden lg:block">
          <PackageSidebar />
        </div>

        <div className="lg:mt-[20px] flex flex-col gap-2 w-full">
          {subTours.map((subtour) => (
            <Link href={`/packages/${allPackages}/${subtour.slug}`} key={subtour.id}>
              <PackagesItem
                key={subtour.id} // Use a unique key, here we can use title or any unique identifier
                src={subtour.thumbnail}
                title={subtour.name}
                price={subtour.SubTourInfo?.price || 0}
                rating={subtour.averageRating || 0}
                totalRatings={subtour.totalRatings}
                time={0}
                description={subtour.SubTourInfo?.description || ""}
              />
            </Link>
          ))}
          <div className="flex justify-center mt-[50px] mb-[20px]">
            <PackagePagination totalCount={totalCount} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
