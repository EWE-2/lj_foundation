import { headerLogo, ljflogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={ljflogo} 
                    alt=""
                    width={40}
                    height={25}/>
            </a>
            <ul className="flex-1 
                flex 
                justify-center
                items-center
                gap-16 max-md:hidden">
                    {navLinks.map((item) =>
                        <li key={item.label}>
                            <a href="{items.href}"
                                className="font-montserrat leading-normal text-lg text-slate-gray">
                                    {item.label}
                                </a>
                        </li>
                    )}
            </ul>
            <div className="hidden max-md:block">
                <img src={hamburger}
                    alt="Hamburger"
                    width={25}
                    height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav