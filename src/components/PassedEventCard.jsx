const PassedEventCard = ({imgUrl, labelName,smallDesc, description, rate, date, datetime, category}) => {
  return (
    // <div className="static flex flex-1 flex-col w-full max-sm:w-full">
    //     <img src={imgUrl} alt={labelName} className='w-full h-[280] rounded-lg' />
        
    //     <div className="relative pl-2">
    //         <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin text-coral-red'>
    //             {labelName}
    //         </h3>
    //         <p className='mt-2 font-semibold font-montserrat text-sm leading-normal text-clip overflow-hidden'>
    //             {smallDesc}
    //         </p>

    //     </div>
    // </div>

    <article key={labelName} className="static flex flex-1 flex-col w-full max-sm:w-full max-w-xl items-start justify-between">
      <img src={imgUrl} alt={labelName} className='w-auto h-[280] rounded-lg' />
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={datetime} className="text-red-300">
          {date}
        </time>
        <a
          href={category}
          className="relative z-10 rounded-full bg-red-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-red-100"
        >
          {category}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-coral-red group-hover:text-red-600">
          <a href={labelName}>
            <span className="absolute inset-0" />
            {labelName}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{smallDesc}</p>
      </div>
      
    </article>
    
  )
}

export default PassedEventCard