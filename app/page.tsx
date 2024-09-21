import ImageCarousel from "@/components/ui/ImageCarousel"
import TourPackages from "@/components/ui/TourPackages"
import WhyBookUs from "@/components/ui/WhyBookUs"
import { Divider } from "@nextui-org/divider"
import EmblaCarousel from "@/components/ui/EmblaCarousel/EmblaCarousel"
import Link from "next/link"
import TopTours from "../components/ui/TopTours"
import { tourPackages, topTours, topTours2 } from "../utils/ToursStatic"
import Tesimonial from "@/components/ui/Tesimonial"
import testimonials from "@/utils/TestimonialStatic"

export default function Home() {
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
      <div className="mx-auto  xl:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className=" text-center text-xl sm:text-2xl lg:text-3xl font-bold">Why Book Us?</h3>
        <div className="mx-auto gap-y-7 grid grid-cols-2 md:grid-cols-4 xl:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
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
        <div className=" gap-y-7 gap-x-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  mt-[20px]">
          {tourPackages.map(({ src, text }, index) => (
            <Link key={index} href={`/packages/${createSlug(text)}`}>
              <TourPackages src={src} text={text} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#74DFA2] mt-[50px] py-[100px] sm:py-[150px]">
        <div className="mx-auto xl:max-w-[70vw] px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-4xl font-bold">Explore, Experience, Enjoy</h3>
          <p className="text-center text-xl mt-[20px]">
            Book your next trip today and start your adventure.
          </p>
        </div>
      </div>
      <div className="mx-auto xl:max-w-[70vw] px-4 sm:px-6 lg:px-8">
        <div className=" text-center  mt-[50px]">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Top Tours</h3>
          <p className=" text-sm lg:text-lg  text-[#333]">More things to do in UAE</p>
        </div>
        <div className=" mt-[20px]">
          <EmblaCarousel options={{ loop: false }}>
            {topTours.map(({ src, title, price, rating, totalRatings }, index) => (
              <TopTours
                key={index}
                src={src}
                title={title}
                price={price}
                rating={rating}
                totalRatings={totalRatings}
              />
            ))}
          </EmblaCarousel>
        </div>
        <div className=" text-center  mt-[50px]">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">You might like these</h3>
          <p className=" text-sm lg:text-lg  text-[#333]">More things to do in UAE</p>
        </div>

        <div className=" mt-[20px]">
          <EmblaCarousel options={{ loop: false }}>
            {topTours2.map(({ src, title, price, rating, totalRatings }, index) => (
              <TopTours
                key={index}
                src={src}
                title={title}
                price={price}
                rating={rating}
                totalRatings={totalRatings}
              />
            ))}
          </EmblaCarousel>
        </div>
        <div className=" text-center  mt-[50px]">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Client Testimonials</h3>
          <p className=" text-sm lg:text-lg  text-[#333]">
            See what our clients are saying about their experience with us.
          </p>
        </div>
        <div className=" mt-[20px]">
          <EmblaCarousel options={{ loop: false }}>
            {testimonials.map(({ comment, name }, index) => (
              <Tesimonial comment={comment} personName={name} key={index} />
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </>
  )
}
