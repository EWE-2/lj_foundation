import { ljflogo } from "../assets/images"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between gap-20 flex-wrap max:lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="">
            <img src={ljflogo}
            width={30} height={30} alt="" />
          </a>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer