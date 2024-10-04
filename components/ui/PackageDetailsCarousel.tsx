"use client"
import { useState } from "react"
import Image from "next/image"
import { useSwipeable } from "react-swipeable"

type SubTourImageType = {
  id: string // Unique identifier for the image
  src: string // URL of the image
  altText?: string | null // Optional alt text for accessibility
  subTourId: string // Foreign key to the SubTours model
  createdAt: Date // Timestamp for when the image was added
  updatedAt: Date // Timestamp for the last update
}

const ImageCarousel = ({ items }: { items: SubTourImageType[] | [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
    trackTouch: true,
  })

  return (
    <div className="mx-auto flex gap-2">
      {/* Left gallery */}
      <div className="w-[150px] space-y-2 hidden lg:block">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative w-full h-[106px] cursor-pointer border-2 rounded-lg overflow-hidden ${
              activeIndex === index ? "bg-transparent brightness-100" : "bg-no-repeat brightness-50"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={item.src}
              alt={item.altText || "image"}
              fill
              style={{ objectFit: "cover" }}
              draggable="false"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Main Carousel */}
      <div className="relative w-full lg:w-5/5 overflow-hidden lg:rounded-lg" {...handlers}>
        <div className="relative h-80 md:h-[560px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 duration-700 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item
            >
              <Image
                src={item.src}
                alt={item.altText || "image"}
                fill
                blurDataURL="data:..."
                placeholder="blur"
                style={{ objectFit: "cover" }}
                draggable="false"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Left button */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 bg-white/80 text-black rounded-full hover:bg-white focus:outline-none transform -translate-y-1/2"
            aria-label="Previous slide"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          {/* Right button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 bg-white/80 text-black rounded-full hover:bg-white focus:outline-none transform -translate-y-1/2"
            aria-label="Next slide"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Slider indicators */}
        <div
          className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2 "
          data-carousel-indicators
        >
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
              } focus:outline-none`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
