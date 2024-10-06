"use client"
import { Dot, DoubleTick, DropOff, PickUp } from "@/utils/StaticSvgs"
import { Accordion, AccordionItem } from "@nextui-org/accordion"

// Types for the data models related to SubTourInfo

type HighlightType = {
  id: string // Unique identifier for the highlight
  highlight: string // The actual highlight text
}

type WhatsIncludedType = {
  id: string // Unique identifier for the included item
  included: string // Description of what's included
}

type WhatToExpectType = {
  id: string // Unique identifier for the expectation
  expectation: string // Description of what to expect
}

type AdditionalInfoType = {
  id: string // Unique identifier for the additional info
  info: string // Description of additional information
}

type TourInclusionsProps = {
  highlights: HighlightType[] // Array of highlights
  whatsIncluded: WhatsIncludedType[] // Array of what's included
  whatToExpect: WhatToExpectType | null // Optional expectation info
  additionalInfo: AdditionalInfoType[] // Array of additional info
}

// The complete SubTourInfo type, including all inclusions

const TourInclusions = ({
  highlights,
  whatsIncluded,
  whatToExpect,
  additionalInfo,
}: TourInclusionsProps) => {
  return (
    <Accordion defaultSelectedKeys="all" selectionMode="multiple">
      <AccordionItem key="6" aria-label="Accordion 6" title={<strong>Highlights</strong>}>
        {highlights.map(({ id, highlight }) => (
          <div key={id} className="flex mt-2">
            <div>{Dot}</div>
            <div className="ml-2">{highlight}</div>
          </div>
        ))}
      </AccordionItem>
      <AccordionItem key="1" aria-label="Accordion 1" title={<strong>What&apos;s included</strong>}>
        {whatsIncluded.map(({ id, included }) => (
          <div key={id} className="flex mt-2">
            <div>{DoubleTick}</div>
            <div className="ml-2">{included}</div>
          </div>
        ))}
      </AccordionItem>

      <AccordionItem key="2" aria-label="Accordion 2" title={<strong>What to expect</strong>}>
        {whatToExpect ? whatToExpect.expectation : "No expectations provided."}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={<strong>Travel Initiation and Conclusion</strong>}
      >
        <div className="flex">
          <div>{PickUp}</div>
          <div className="ml-2">Pickup from your hotel for a seamless start to your adventure.</div>
        </div>
        <div className="flex mt-2">
          <div>{DropOff}</div>
          <div className="ml-2">
            Drop-off at your hotel to conclude your experience comfortably.
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title={<strong>Additional information</strong>}
      >
        {additionalInfo.map(({ id, info }) => (
          <div key={id} className="flex mt-2">
            <div>{Dot}</div>
            <div className="ml-2">{info}</div>
          </div>
        ))}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title={<strong>Cancellation</strong>}>
        <div className="flex">
          <div>{Dot}</div>
          <div className="ml-2 flex ">
            <p className="font-bold">
              Full Refund:
              <span className="font-normal">
                {" "}
                If you cancel your booking at least 24 hours before the scheduled start time, you
                will receive a full refund.
              </span>
            </p>
          </div>
        </div>
        <div className="flex">
          <div>{Dot}</div>
          <div className="ml-2 flex ">
            <p className="font-bold">
              No Refund:
              <span className="font-normal">
                {" "}
                Cancellations made less than 24 hours before the scheduled start time are
                non-refundable.
              </span>
            </p>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default TourInclusions
