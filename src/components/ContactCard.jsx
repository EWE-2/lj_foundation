const ContactCard = ({title, imgUrl, email, phonenumber}) => {
  return (
    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
        <div class="flex items-start">
            <div class="shrink-0">
            <div class="inline-block rounded-md bg-coral-red p-4 text-primary">
                <img src={imgUrl} alt={title} color="#ECEEFF"/>
            </div>
            </div>
            <div class="ml-6 grow">
            <p class="mb-2 font-montserrat font-bold">
                {title}
            </p>
            <p class="text-neutral-500">
                {email}
            </p>
            <p class="text-neutral-500">
                {phonenumber}
            </p>
            </div>
        </div>
    </div>
  )
}

export default ContactCard