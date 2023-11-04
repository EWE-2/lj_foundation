import Button from '../components/Bbutton';
import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { evtImg1 } from '../assets/images';
import { eventsImages, statistics } from '../constants';
import EventCard from '../components/EventCard';

const Foundation = () => {
  const [EventImage, SetEventImage] = useState(evtImg1)

  return (
    <section
      id="home"
      className="w-full flex
        xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
          <div className="relative
            xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
              <p className='text-xl max-xs:text-sm font-montserrat text-coral-red'>Know us</p>
              <h1 className='mt-2 font-palanquin text-6xl max-sm:text-[42px] 
                max-sm:leading-[1] font-bold'>
                <span className='xl:bg-White xl:whitespace-nowrap relative z-10 pr-10'>The 
                <span className='text-coral-red inline-block mt-3'> Libong </span></span>
                <span className='text-coral-red inline-block mt-3'>Joanna</span><br/>Foundation 
              </h1>
              <p className='font-montserrat text-slate-gray text-xl leading-8 mt-6 mb-14 sm:max-w-m'>
                Her Heart Desires to help Others
              </p>

              <a href="#about-us"><Button label="Show more" iconUrl={arrowRight} /></a>

              <div className="flex
                justify-start items-start flex-wrap w-full mt-20 gap-16">
                  {statistics.map((stat) => 
                  (
                    <div key={stat.label}>
                      <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                      <p className='leading-6 font-montserrat'>{stat.label}</p>
                    </div>
                  )
                  )}
              </div>
          </div>

          <div className='relative flex-1 flex justify-center
            items-center xl:min-h-screen xl:py-30 bg-cover bg-center'>
            <img src={EventImage}
               alt="event" 
               width={610}
               height={500}
               className='object-contain rounded-lg border-coral-red border-2'/>
            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
              {eventsImages.map((ev) =>
                <div key={ev}>
                  <EventCard imgUrl={ev}
                  changeEventImage={(ev) => SetEventImage(ev)}
                  EventImage={EventImage}/>
                </div>
              )}
            </div>
          </div>
    </section>
  )
}

export default Foundation