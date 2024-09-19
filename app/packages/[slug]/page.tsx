import PackageSidebar from "@/components/ui/PackageSidebar"

const Packages = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const slugToText = (slug: string) => {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
  }
  const slugg = slugToText(slug)
  return (
    <div className="mx-auto  lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
      <h3 className="  text-xl sm:text-2xl lg:text-3xl font-bold">{slugg}</h3>
      <div className="flex flex-row gap-5">
        <div className="hidden md:block">
          <PackageSidebar />
        </div>
      </div>
    </div>
  )
}

export default Packages
