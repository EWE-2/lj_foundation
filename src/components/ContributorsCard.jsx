import { star } from "../assets/icons"

const ContributorsCard = ({customerName, imgUrl, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgUrl} alt="contributor"
        className="rounded-full object-contain w-[120px] h-[120px]" />
        <p className="mt-6 max-w-sm text-center info-text max-sm:text-sm">{feedback}</p>
        <div className="mt-3 flex justify-center items-center">
            {/* <img src={star} alt="star"
            width={24} height={24} 
            className="object-contain m-0"/>
            <p className="text-xl max-sm:text-lg font-montserrat text-slate-gray">({rating})</p> */}
            <h3 className="mt-1 font-palanquin text-3xl max-sm:text-2xl text-center font-bold">{customerName}</h3>
        </div>
    </div>
  )
}

export default ContributorsCard