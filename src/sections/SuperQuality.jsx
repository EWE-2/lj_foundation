import Button from "../components/Bbutton"
import { ljflogo } from "../assets/images"

const SuperQuality = () => {
  return (
    <section 
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
          <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            We Work Together
            <br />
            <span className='text-coral-red inline-block mt-3'> To Help </span>
            Disadvantaged Populations
          </h1>
          <p className='mt-4 lg:max-w-lg info-text'>
            Promote the benefit of the inhabitants of the greater <span className='text-coral-red'>Mondoni Community</span> area
            and its environs (here in after descibed as "the area of benefit")
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Promote the benefit of the inhabitants of the greater Mondoni Community
          </p>
          <div className="mt-11">
            <Button label="View more" />
          </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={ljflogo} alt="shoe8"
        width={450}
        height={422} 
        className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality