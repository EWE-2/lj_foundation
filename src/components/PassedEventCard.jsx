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

    // <article key={labelName} className="static flex flex-1 flex-col w-full max-sm:w-full max-w-xl items-start justify-between">
    //   <img src={imgUrl} alt={labelName} className=' rounded-lg' />
    //   <div className="flex items-center gap-x-4 text-xs">
    //     <time dateTime={datetime} className="text-red-300">
    //       {date}
    //     </time>
    //     <a
    //       href="#"
    //       className="relative z-10 rounded-full bg-red-50 px-3 py-1 font-medium text-slate-gray hover:bg-red-100"
    //     >
    //       {category}
    //     </a>
    //   </div>
    //   <div className="group relative">
    //     <h3 className="mt-3 text-lg font-semibold leading-6 text-coral-red group-hover:text-red-600">
    //       <a href={labelName}>
    //         <span className="absolute inset-0" />
    //         {labelName}
    //       </a>
    //     </h3>
    //     <p className="mt-5 line-clamp-3 font-montserrat text-sm leading-6 text-slate-gray">{smallDesc}</p>
    //   </div>
      
    // </article>
    <div class="rounded-[20px] overflow-hidden shadow-[0_4px_9px_-4px_#6D6D6D] hover:shadow-[0_8px_9px_-4px_rgba(109,109,109,0.8),0_4px_18px_0_rgba(109,109,109,0.5)] flex flex-col">
        <a href="#"></a>
        <div class="relative"><a href="#">
                <img class="w-full"
                    src={`${imgUrl}?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500`}
                    alt={labelName} />
                <div
                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
            <a href="#!">
                <div
                    class="text-xs absolute top-0 right-0 rounded-sm bg-coral-red px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-coral-red transition duration-500 ease-in-out">
                    {category}
                </div>
            </a>
        </div>
        <div class="px-6 py-4 mb-auto">
            <a href="#"
                class="font-montserrat font-bold text-lg inline-block hover:text-coral-red transition duration-500 ease-in-out mb-2">{labelName}</a>
            <p class="text-slate-gray text-sm">
                {smallDesc}
            </p>
        </div>
        <div class="px-6 py-3 flex flex-row items-center justify-between bg-blue-100">
            <span href="#" class="py-1 text-xs font-regular text-slate-gray mr-1 flex flex-row items-center">
                
                <time dateTime={datetime} className="font-palanquin font-medium text-slate-gray">
                  {date}
                </time>
            </span>

        </div>
    </div>
    
  )
}

export default PassedEventCard