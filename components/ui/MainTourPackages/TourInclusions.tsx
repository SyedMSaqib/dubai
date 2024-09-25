"use client"
import { Dot, DoubleTick, DropOff, PickUp } from "@/utils/StaticSvgs"
import { Accordion, AccordionItem } from "@nextui-org/accordion"

const TourInclusions = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  return (
    <Accordion selectionMode="multiple">
      <AccordionItem key="6" aria-label="Accordion 6" title={<strong>Highlights</strong>}>
        <div className="flex">
          <div>{Dot}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
        <div className="flex mt-2">
          <div>{Dot}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
        <div className="flex mt-2">
          <div>{Dot}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
      </AccordionItem>
      <AccordionItem key="1" aria-label="Accordion 1" title={<strong>What's included</strong>}>
        <div className="flex">
          <div>{DoubleTick}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
        <div className="flex mt-2">
          <div>{DoubleTick}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
        <div className="flex mt-2">
          <div>{DoubleTick}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
      </AccordionItem>

      <AccordionItem key="2" aria-label="Accordion 2" title={<strong>What to expect</strong>}>
        {defaultContent}
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
        <div className="flex">
          <div>{Dot}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
        <div className="flex mt-2">
          <div>{Dot}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
        <div className="flex mt-2">
          <div>{Dot}</div>
          <div className="ml-2">{defaultContent}</div>
        </div>
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
