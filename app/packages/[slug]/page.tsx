import PackageSidebar from "@/components/ui/MainTourPackages/PackageSidebar/PackageSidebar"
import MobilePackageFilter from "@/components/ui/MainTourPackages/PackageSidebar/MobilePackageFilter"
import PackagesItem from "@/components/ui/MainTourPackages/PackagesItem"

const Packages = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const slugToText = (slug: string) => {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
  }
  const slugg = slugToText(slug)
  return (
    <div className="mx-auto  lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{slugg}</h3>
      <div>
        <MobilePackageFilter />
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-5">
        {/* Sidebar */}
        <div className="hidden md:block">
          <PackageSidebar />
        </div>

        {/* PackagesItem and additional content */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0 w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0  w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0 w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0 w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0 w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0 w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0 w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full border border-zinc-300 rounded-lg sm:p-4">
            <div className="flex-shrink-0 w-[150px] sm:w-[300px]">
              <PackagesItem />
            </div>
            <div className="flex flex-col pt-2 gap-y-2 pr-4">
              <p className="text-sm">4.5 (1221)</p>
              <p className=" text-sm font-semibold">
                Las Vegas Helicopter Night Flight and Optional VIP Transportation
              </p>
              <p className="text-sm">1 to 3 hrs</p>
              <p className=" text-end font-bold text-medium">$500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
