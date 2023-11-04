import { events } from "../constants"
import PassedEventCard from '../components/PassedEventCard'

const PopularPro = () => {
  return (
    <div id="event" className="max-container max-sm:mt-12">
      <div className="mx-auto">
        <div className="flex flex-1 justify-start gap-5">
          <h2 className="text-2xl font-palanquin font-bold">
            Passed <span className="text-coral-red">events</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <PassedEventCard key={event.labelName} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularPro