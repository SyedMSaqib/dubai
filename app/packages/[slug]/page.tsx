import PackageSidebar from "@/components/ui/MainTourPackages/PackageSidebar/PackageSidebar"
import MobilePackageFilter from "@/components/ui/MainTourPackages/PackageSidebar/MobilePackageFilter"
import PackagesItem from "@/components/ui/MainTourPackages/PackagesItem"
import { packagesData } from "@/utils/ToursStatic"
const Packages = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const slugToText = (slug: string) => {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
  }
  const slugg = slugToText(slug)
  return (
    <div className="mx-auto  2xl:max-w-[80vw] px-4 sm:px-6 lg:px-8 mt-10">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{slugg}</h3>
      <div>
        <MobilePackageFilter />
      </div>
      <div className=" flex flex-row gap-2 mt-5">
        <div className="hidden lg:block">
          <PackageSidebar />
        </div>

        <div className="lg:mt-[20px] flex flex-col gap-2 w-full">
          {packagesData.map((item) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages
