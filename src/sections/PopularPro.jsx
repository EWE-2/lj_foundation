import { events } from "../constants"
import PassedEventCard from '../components/PassedEventCard'

const PopularPro = () => {
  return (
    // <section id="event"
    // className="max-container max-sm:mt-12">
    //   <div className="flex flex-1 justify-start gap-5">
    //     <h2 className="text-2xl font-palanquin font-bold">
    //       Passed <span className="text-coral-red">events</span>
    //     </h2>
    //     <p className="lg:max-x-lg mt-2 text-slate-gray font-montserrat">

    //     </p>
    //   </div>

    //   <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
    //     grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-14">
    //       {events.map((event) => (
    //         <PassedEventCard key={event.labelName} {...event} />
    //       ))}
    //   </div>
    // </section>

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