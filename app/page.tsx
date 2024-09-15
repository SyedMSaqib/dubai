import ImageCarousel from "@/components/ui/ImageCarousel"
import WhyBookUs from "@/components/ui/WhyBookUs"

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <div className="mx-auto  lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className=" text-center text-xl sm:text-2xl lg:text-3xl font-bold">Why Book Us?</h3>
        <div className="mx-auto gap-y-7 grid grid-cols-2 md:grid-cols-4 lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
          <WhyBookUs
            logo="icons/svg/map.svg"
            header="Expert local guides"
            body="Get local insights from our knowledgeable guides."
          />
          <WhyBookUs
            logo="icons/svg/priceTag.svg"
            header="Best price guarantee"
            body="Enjoy competitive prices with no hidden fees."
          />
          <WhyBookUs
            logo="icons/svg/gear.svg"
            header="Tailor-made experiences"
            body="Personalize your itinerary for a perfect journey."
          />
          <WhyBookUs
            logo="icons/svg/stars.svg"
            header="Trusted by thousands"
            body="Book confidently with verified customer feedback."
          />
        </div>
      </div>
    </>
  )
}
