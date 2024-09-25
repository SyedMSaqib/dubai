import { Tick } from "@/utils/StaticSvgs"

export default function FullRefundChip() {
  return (
    <div className="bg-green-100 rounded-lg p-4">
      <div className="flex  gap-2">
        <div className="pt-1">{Tick}</div>
        <p className="flex-1">
          <span className="underline hover:cursor-pointer pr-1">Free cancellation </span> full
          refund available for cancellations made up to 24 hours prior to the start of the
          experience.
        </p>
      </div>
      {/* 2nd */}
      <div className="flex  gap-2">
        <div className="pt-1">{Tick}</div>

        <p className="flex-1">
          <span className="underline hover:cursor-pointer pr-1">Lowest price guarantee </span>We
          ensure you receive the best available rate, backed by our price match guarantee.
        </p>
      </div>
      {/* 3rd */}
      <div className="flex  gap-2">
        <div className="pt-1">{Tick}</div>

        <p className="flex-1">
          <span className="underline hover:cursor-pointer pr-1">Pay Now or Upon Arrival</span>Book
          now and pay when you arrive for added convenience and flexibility.
        </p>
      </div>
    </div>
  )
}
