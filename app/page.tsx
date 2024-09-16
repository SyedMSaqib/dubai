import ImageCarousel from "@/components/ui/ImageCarousel"
import TourPackages from "@/components/ui/TourPackages"
import WhyBookUs from "@/components/ui/WhyBookUs"
import { Divider } from "@nextui-org/divider"
import EmblaCarousel from "@/components/ui/EmblaCarousel/EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel"

export default function Home() {
  const OPTIONS: EmblaOptionsType = { align: "start" }
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
        <div className=" gap-y-7 gap-x-2 grid grid-cols-2 md:grid-cols-4  mt-10">
          <TourPackages src="/images/desertSafari.jpg" text="Desert Safari" />
          <TourPackages src="/images/heliride.jpg" text="Helicopter Ride" />
          <TourPackages src="/images/dowCuise.jpg" text="Dhow Cruise Dinner" />
          <TourPackages src="/images/burjKhalifa.jpg" text="Burj Khalifa Tour" />
          <TourPackages src="/images/dubaiCity.jpg" text="Dubai City Tour" />
          <TourPackages src="/images/atlantas.jpg" text="Atlantis Aquaventure" />
          <TourPackages src="/images/hotAir.jpg" text="Hot Air Balloon Ride" />
          <TourPackages src="/images/marinaYacht.jpg" text="Dubai Marina Yacht Cruise" />
          <TourPackages src="/images/garden.jpg" text="Dubai Miracle Garden" />
          <TourPackages src="/images/dubai5.jpg" text="Dubai Frame Experience" />
          <TourPackages src="/images/dubai1.jpg" text="Ski Dubai Adventure" />
          <TourPackages src="/images/dubai2.jpg" text="Ferrari World Tour" />
        </div>

        <h3 className=" text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-[100px]">
          Top Tours
        </h3>
        <div className=" mt-14">
          <EmblaCarousel options={OPTIONS} />
        </div>
      </div>
    </>
  )
}
