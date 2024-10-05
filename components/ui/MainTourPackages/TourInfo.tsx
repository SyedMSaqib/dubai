import { Duration, LiveGuide, MobileTicket, StartTime } from "@/utils/StaticSvgs"

const TourInfo = ({ time, duration }: { time: Date; duration: number }) => {
  // Convert the incoming time string to a Date object
  const date = new Date(time)

  // Extract and format the time from the Date object
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Change to false for 24-hour format
  })

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly gap-2">
      <div className="flex items-center gap-2">
        <p>{Duration}</p>
        <p>Duration : {duration}h</p>
      </div>
      <div className="flex items-center gap-2">
        <p>{StartTime}</p>
        <p>Time: {formattedTime}</p> {/* Show the formatted time */}
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
