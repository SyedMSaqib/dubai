import { Duration, LiveGuide, MobileTicket, StartTime } from "@/utils/StaticSvgs"

const TourInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly gap-2">
      <div className="flex items-center gap-2">
        <p>{Duration}</p>
        <p>Duration : 1h</p>
      </div>
      <div className="flex items-center gap-2">
        <p>{StartTime}</p>
        <p>9:30 AM</p>
      </div>
      <div className="flex items-center gap-2">
        <p>{MobileTicket}</p>
        <p>Mobile Ticket</p>
      </div>
      <div className="flex items-center gap-2">
        <p>{LiveGuide}</p>
        <p>Tour Guide : English</p>
      </div>
    </div>
  )
}

export default TourInfo
