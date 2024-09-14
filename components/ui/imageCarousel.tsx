"use client"
import { useState } from "react"
import Image from "next/image"
import { useSwipeable } from "react-swipeable"
// import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = () => {
  interface CarouselItem {
    src: string
    alt: string
  }
  const [activeIndex, setActiveIndex] = useState(0)
  const items: CarouselItem[] = [
    {
      src: "/images/dubai4.jpg",
      alt: "Dubai Image 4",
    },
    {
      src: "/images/dubai.jpg",
      alt: "Dubai Image 1",
    },
    {
      src: "/images/dubai2.jpg",
      alt: "Dubai Image 2",
    },
    {
      src: "/images/dubai3.jpg",
      alt: "Dubai Image 3",
    },
    {
      src: "/images/dubai5.jpg",
      alt: "Dubai Image 5",
    },
  ]

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
    <div className="mx-auto absolute inset-0" {...handlers}>
      <div className="relative overflow-hidden" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-80 md:h-[60vh]">
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
                alt={item.alt}
                fill
                blurDataURL="data:..."
                placeholder="blur"
                style={{
                  objectFit: "cover",
                }}
                draggable="false"
                priority
              />
            </div>
          ))}
        </div>

        

        {/* Slider indicators */}
        <div
          className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
          data-carousel-indicators
        >
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
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
