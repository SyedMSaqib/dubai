import PackageSidebar from "@/components/ui/MainTourPackages/PackageSidebar/PackageSidebar"
import MobilePackageFilter from "@/components/ui/MainTourPackages/PackageSidebar/MobilePackageFilter"
import PackagesItem from "@/components/ui/MainTourPackages/PackagesItem"
import { packagesData } from "@/utils/ToursStatic"
import PackagePagination from "@/components/ui/MainTourPackages/PackagePagination"
import Link from "next/link"
import { createSlug, slugToText } from "@/utils/slug"
import Ratings from "@/components/ui/Ratings"

const Packages = ({ params }: { params: { allPackages: string } }) => {
  const { allPackages } = params

  const packageName = slugToText(allPackages)
  return (
    <div className="mx-auto  2xl:max-w-[80vw] px-4 sm:px-6 lg:px-8 mt-10">
      <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold">{packageName}</h3>
      <div className="flex items-center ">
        <Ratings rating={3.5} totalRatings={10023} />
        <p className=" ml-2"> Reviews</p>
      </div>
      <div>
        <MobilePackageFilter />
      </div>
      <div className=" flex flex-row gap-2 mt-5 lg:mt-0">
        <div className="hidden lg:block">
          <PackageSidebar />
        </div>

        <div className="lg:mt-[20px] flex flex-col gap-2 w-full">
          {packagesData.map((item) => (
            <Link href={`/packages/${allPackages}/${createSlug(item.title)}`} key={item.title}>
              <PackagesItem
                key={item.title} // Use a unique key, here we can use title or any unique identifier
                src={item.src}
                title={item.title}
                price={item.price}
                rating={item.rating}
                totalRatings={item.totalRatings}
                time={item.time}
                description={item.description}
              />
            </Link>
          ))}
          <div className="flex justify-center mt-[50px] mb-[20px]">
            <PackagePagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
