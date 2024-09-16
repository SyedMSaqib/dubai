"use client"
import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons"
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import TourPackages from "../TourPackages" // Import TourPackagesProps here

type PropType = {
  // Updated type to be an array of TourPackageType
  options?: EmblaOptionsType
}
const slides = [
  { src: "/images/desertSafari.jpg", text: "s" },
  { src: "/images/heliride.jpg", text: "s" },
  { src: "/images/dowCuise.jpg", text: "s" },
  { src: "/images/burjKhalifa.jpg", text: "s" },
  { src: "/images/dubaiCity.jpg", text: "s" },
  { src: "/images/atlantas.jpg", text: "s" },
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
              <TourPackages src={tourPackage.src} text={tourPackage.text} />
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
