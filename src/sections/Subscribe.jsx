import ContactCard from "../components/contactCard"
import PassedEventCard from "../components/PassedEventCard"
import { contacts,events } from "../constants"

const Subscribe = () => {
  return (
    // <section className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    // id="contact-us">
    //   <h3 className="text-4xl leading-[68px] lg-max-w-md font-palanquin font-bold">
    //   Join Us
    //   <span className="text-coral-red">
    //     Submit
    //   </span> your email
    //   </h3>
    //   <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
    //     <input type="text" 
    //     placeholder="joinus@libong.cm"
    //     className="input"/>
    //     <div className="flex max-sm:justify-center items-center max-sm:w-full">
    //       <Button label="Join Us"
    //       fullWidth/>
    //     </div>
    //   </div>
    // </section>

    <div id="contact-us" class="max-container mx-auto md:px-6">
      {/* <!-- Section: Design Block --> */}
      <section class="">
        <div class="flex justify-center items-center mb-10">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 class="px-6 text-4xl leading-[68px] lg-max-w-md font-palanquin font-bold">Contact us</h2>
          </div>
        </div>

        <div class="flex flex-wrap items-center">
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input type="text"
                  class="peer block min-h-[auto] w-full rounded border py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-slate-gray data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput90" placeholder="Name" />
                <label
                  class="pointer-events-none font-montserrat  absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.8] peer-focus:text-slate-gray peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  for="exampleInput90">Name
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input type="email"
                  class="peer block min-h-[auto] w-full rounded border py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-slate-gray data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput91" placeholder="Email address" />
                <label
                  class="pointer-events-none font-montserrat absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.8] peer-focus:text-slate-gray peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  for="exampleInput91">Email address
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  class="peer block min-h-[auto] w-full rounded border py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                <label for="exampleFormControlTextarea1"
                  class="pointer-events-none font-montserrat absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.8] peer-focus:text-slate-gray peer-data-[te-input-state-active]:-translate-y-[1.3rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Message</label>
              </div>
              
              <button type="button" data-te-ripple-init data-te-ripple-color="light"
                class="mb-6 inline-block w-full rounded bg-coral-red px-6 pt-2.5 pb-2 text-xs font-montserrat font-bold leading-normal text-white shadow-[0_4px_9px_-4px_#FF0066FF] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(255,0,102,0.6),0_4px_18px_0_rgba(255,0,102,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(255,0,102,0.6),0_4px_18px_0_rgba(255,0,102,0.3)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(255,0,102,0.6),0_4px_18px_0_rgba(59,113,202,0.2)]">
                Send
              </button>
            </form>
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div class="flex flex-wrap">
              {contacts.map((contact) => (
                <ContactCard key={contact.title} {...contact} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  )
}

export default Subscribe