const PassedEventCard = ({imgUrl, labelName, rate}) => {
  return (
    <div className="static flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgUrl} alt={labelName} className='w-full h-[280] rounded-lg' />
        
        <div className="relative pl-2">
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin text-coral-red'>
                {labelName}
            </h3>
            <p className='mt-2 font-semibold font-montserrat text-sm leading-normal text-clip overflow-hidden'>
                {description}
            </p>

        </div>
    </div>
  )
}

export default PassedEventCard