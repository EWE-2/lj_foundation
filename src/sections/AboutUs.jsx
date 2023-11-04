import { about } from "../assets/images"

const AboutUs = () => {
  return (
    // <section id="about-us" className="max-container">
    //   <h3 className="font-palanquin text-center text-4xl  max-sm:text-3xl font-bold">
    //     About Us
    //   </h3>
    //   <p className="info-text m-auto mt-4 max-w-lg max-sm:text-sm text-center">Hear genuine stories of our leaders.</p>
    //   <div className="mt-24 flex -flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        
    //   </div>
    // </section>
    <div id="about-us" class="max-container sm:flex items-center justify-between max-w-screen-xl">
        <div class="sm:w-1/2 p-2">
            <div class="image object-start text-center">
                <img src={about} />
            </div>
        </div>
        <div class="sm:w-1/2 p-5">
            <div class="text font-montserrat">
                <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-coral-red">Ligong Joanna </span> Foundation
                </h2>
                <p class="text-gray-700">
                  Promote the benefit of the inhabitants of the greater Mondoni Community area and its environs (hereinafter described as "the area of benefit") without distinction of age, sex, race, political, religious or other opinion. It will so do by associating the statutory authorities, voluntary organisations and inhabitants in a common effort to advance education and to provide facilities in the interests of the social welfare, education, recreation or other leisure-time occupation with the object of improving the conditions of life for the said inhabitants;
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs