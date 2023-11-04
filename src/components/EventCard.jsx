const EventCard = ({ imgUrl, changeEventImage, EventImage}) => {
  const handleClick = () => {
    if(EventImage !== imgUrl.eventImg){
        changeEventImage(imgUrl.eventImg)
    }
  }
  
    return (
    <div className={`border-2
     rounded-xl
     ${EventImage === imgUrl.eventImg
        ? 'border-coral-red'
        : 'border-slate-gray'
      } cursor-pointer max-sm:flex-1 
     `}
     onClick={handleClick}>
        
      <div className="flex justify-center items-center 
        bg-card bg-center bg-cover sm:w-full sm:h-full rounded-xl">
        <img src={imgUrl.thumbnail} alt="Event collection"
        width={127} 
        height={103} 
        className="object-contain rounded-xl"/>
      </div>
    </div>
  )
}

export default EventCard