import ImageCarousel from "@/components/ui/ImageCarousel"
import TourPackages from "@/components/ui/TourPackages"
import WhyBookUs from "@/components/ui/WhyBookUs"
import { Divider } from "@nextui-org/divider"
import EmblaCarousel from "@/components/ui/EmblaCarousel/EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel"
import Link from "next/link"

const tourPackages = [
  { src: "/images/desertSafari.jpg", text: "Desert Safari" },
  { src: "/images/heliride.jpg", text: "Helicopter Ride" },
  { src: "/images/dowCuise.jpg", text: "Dhow Cruise Dinner" },
  { src: "/images/burjKhalifa.jpg", text: "Burj Khalifa Tour" },
  { src: "/images/dubaiCity.jpg", text: "Dubai City Tour" },
  { src: "/images/atlantas.jpg", text: "Atlantis Aquaventure" },
  { src: "/images/hotAir.jpg", text: "Hot Air Balloon Ride" },
  { src: "/images/marinaYacht.jpg", text: "Dubai Marina Yacht Cruise" },
  { src: "/images/garden.jpg", text: "Dubai Miracle Garden" },
  { src: "/images/dubai5.jpg", text: "Dubai Frame Experience" },
  { src: "/images/dubai1.jpg", text: "Ski Dubai Adventure" },
  { src: "/images/dubai2.jpg", text: "Ferrari World Tour" },
]

export default function Home() {
  const OPTIONS: EmblaOptionsType = {}
  const createSlug = (text: string) => {
    return text
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "") // Remove non-word characters
      .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim() // Trim leading and trailing hyphens
  }
  return (
    <>
      <ImageCarousel />
      <div className="mx-auto  lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className=" text-center text-xl sm:text-2xl lg:text-3xl font-bold">Why Book Us?</h3>
        <div className="mx-auto gap-y-7 grid grid-cols-2 md:grid-cols-4 lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
          <WhyBookUs
            logo="icons/svg/map.svg"
            header="Expert guides"
            body="Enjoy detailed tours guided by our knowledgeable experts."
          />
          <WhyBookUs
            logo="icons/svg/priceTag.svg"
            header="Best price guarantee"
            body="Enjoy competitive prices with no hidden fees."
          />
          <WhyBookUs
            logo="icons/svg/calender.svg"
            header="Flexible Booking"
            body="free cancellation and the choice to pay later at no extra cost."
          />
          <WhyBookUs
            logo="icons/svg/stars.svg"
            header="Trusted by thousands"
            body="Book confidently with verified customer feedback."
          />
        </div>
        <Divider className="my-8" />
        <h3 className=" text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-[50px]">
          Tour Categories
        </h3>
        <div className=" gap-y-7 gap-x-2 grid grid-cols-2 md:grid-cols-4  mt-[20px]">
          {tourPackages.map(({ src, text }, index) => (
            <Link key={index} href={`/packages/${createSlug(text)}`}>
              <TourPackages src={src} text={text} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#74DFA2] mt-[50px] py-[100px] sm:py-[150px]">
        <div className="mx-auto lg:max-w-[70vw] px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-4xl font-bold">Explore, Experience, Enjoy</h3>
          <p className="text-center text-xl mt-[20px]">
            Book your next trip today and start your adventure.
          </p>
        </div>
      </div>
      <div className="mx-auto lg:max-w-[70vw] px-4 sm:px-6 lg:px-8">
        <div className=" text-center  mt-[50px]">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Top Tours</h3>
          <p className=" text-sm lg:text-lg  text-[#333]">More things to do in Dubai</p>
        </div>
        <div className=" mt-[10px]">
          <EmblaCarousel options={OPTIONS} />
        </div>
      </div>
    </>
  )
}
