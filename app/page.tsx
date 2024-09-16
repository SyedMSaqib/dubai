import ImageCarousel from "@/components/ui/ImageCarousel"
import TourPackages from "@/components/ui/TourPackages"
import WhyBookUs from "@/components/ui/WhyBookUs"
import { Divider } from "@nextui-org/divider"

export default function Home() {
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
          <TourPackages src="/images/dubai1.jpg" text="Desert Safari" />
          <TourPackages src="/images/dubai2.jpg" text="Helicopter Ride" />
          <TourPackages src="/images/dubai3.jpg" text="Dhow Cruise Dinner" />
          <TourPackages src="/images/dubai4.jpg" text="Burj Khalifa Tour" />
          <TourPackages src="/images/dubai5.jpg" text="Dubai City Tour" />
          <TourPackages src="/images/dubai1.jpg" text="Atlantis Aquaventure" />
          <TourPackages src="/images/dubai2.jpg" text="Hot Air Balloon Ride" />
          <TourPackages src="/images/dubai3.jpg" text="Dubai Marina Yacht Cruise" />
          <TourPackages src="/images/dubai4.jpg" text="Dubai Miracle Garden" />
          <TourPackages src="/images/dubai5.jpg" text="Dubai Frame Experience" />
          <TourPackages src="/images/dubai1.jpg" text="Ski Dubai Adventure" />
          <TourPackages src="/images/dubai2.jpg" text="Ferrari World Tour" />
          <TourPackages src="/images/dubai3.jpg" text="Worlds of Adventure" />
          <TourPackages src="/images/dubai4.jpg" text="Dubai Fountain Show" />
          <TourPackages src="/images/dubai5.jpg" text="Palm Jumeirah Sightseeing" />
          <TourPackages src="/images/dubai1.jpg" text="Dubai Mall Aquarium" />
          <TourPackages src="/images/dubai2.jpg" text="Al Fahidi Historical Tour" />
          <TourPackages src="/images/dubai3.jpg" text="Jebel Jais Zipline" />
          <TourPackages src="/images/dubai4.jpg" text="Global Village Experience" />
          <TourPackages src="/images/dubai5.jpg" text="Wild Wadi Waterpark" />
        </div>
      </div>
    </>
  )
}
