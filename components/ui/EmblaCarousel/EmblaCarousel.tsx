"use client"
import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons"
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import TopTours from "../TopTours"

type PropType = {
  // Updated type to be an array of TourPackageType
  options?: EmblaOptionsType
}
const slides = [
  {
    src: "/images/desertSafari.jpg",
    price: 200,
    title: "Desert Safari",
    rating: 0,
    totalRatings: 0,
  },
  {
    src: "/images/heliride.jpg",
    price: 299.99,
    title: "Helicopter Ride",
    rating: 2,
    totalRatings: 148,
  },
  {
    src: "/images/dowCuise.jpg",
    price: 322,
    title: "Dhow Cruise Dinner",
    rating: 3.5,
    totalRatings: 234,
  },
  {
    src: "/images/burjKhalifa.jpg",
    price: 130,
    title: "Burj Khalifa Tour",
    rating: 5,
    totalRatings: 100,
  }, // Add totalRatings
  {
    src: "/images/dubaiCity.jpg",
    price: 180,
    title: "Dubai City Tour",
    rating: 4.5,
    totalRatings: 87,
  },
  {
    src: "/images/atlantas.jpg",
    price: 499.9,
    title: "Atlantis Aquaventure",
    rating: 4.5,
    totalRatings: 29,
  },
  {
    src: "/images/desertSafari.jpg",
    price: 200,
    title: "Desert Safari",
    rating: 4.5,
    totalRatings: 441,
  },
  {
    src: "/images/heliride.jpg",
    price: 299.99,
    title: "Helicopter Ride",
    rating: 5,
    totalRatings: 148,
  },
  {
    src: "/images/dowCuise.jpg",
    price: 322,
    title: "Dhow Cruise Dinner",
    rating: 4.5,
    totalRatings: 234,
  },
  {
    src: "/images/burjKhalifa.jpg",
    price: 130,
    title: "Burj Khalifa Tour",
    rating: 5,
    totalRatings: 100,
  }, // Add totalRatings
  {
    src: "/images/dubaiCity.jpg",
    price: 180,
    title: "Dubai City Tour",
    rating: 4.5,
    totalRatings: 87,
  },
  {
    src: "/images/atlantas.jpg",
    price: 499.9,
    title: "Atlantis Aquaventure",
    rating: 4.5,
    totalRatings: 29,
  },
]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((tourPackage, index) => (
            <div className="embla__slide" key={index}>
              <TopTours
                src={tourPackage.src}
                title={tourPackage.title}
                price={tourPackage.price}
                rating={tourPackage.rating}
                totalRatings={tourPackage.totalRatings}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel