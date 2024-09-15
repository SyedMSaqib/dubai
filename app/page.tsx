import ImageCarousel from "@/components/ui/ImageCarousel"
import WhyBookUs from "@/components/ui/WhyBookUs"

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <div className="mx-auto  lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className=" text-center text-xl sm:text-2xl lg:text-3xl font-bold">Why Book Us?</h3>
        <div className="mx-auto gap-7  flex flex-grow justify-between lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
          <WhyBookUs
            logo="👨‍🍳"
            header="Expert local guides"
            body="Get local insights from our knowledgeable guides."
          />
          <WhyBookUs
            logo="👨‍🍳"
            header="Best price guarantee"
            body="Enjoy competitive prices with no hidden fees."
          />
          <WhyBookUs
            logo="👨‍🍳"
            header="Tailor-made experiences"
            body="Personalize your itinerary for a perfect journey."
          />
          <WhyBookUs
            logo="👨‍🍳"
            header="Trusted by thousands"
            body="Book confidently with verified customer feedback."
          />
        </div>
      </div>
    </>
  )
}
