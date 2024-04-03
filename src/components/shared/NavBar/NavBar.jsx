// import React, { useState } from 'react';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
// import Logo from '../../../assets/logo.png'

// const NavBar = () => {
//     let Links =[
//         {name:"HOME",link:"Home"},
//         {name:"CREW",link:"Crew"},
//         {name:"ABOUT",link:"About"},
//         {name:"CONTACT",link:"Contact"},
//       ];
//       let [open, setOpen] =useState(false);

//     return (
//         <div className='  px-[6%]'>
//            <div className='items-center justify-between py-4 bg-white md:flex md:px-10 px-7'>
//             {/* logo section */}
//             <div className='w-32'>
//                 <img src={Logo} alt="" />
//             </div>
//             {/* Menu icon */}
//             <div onClick={()=>setOpen(!open)} className='absolute cursor-pointer right-8 top-6 md:hidden w-7 h-7'>
//                 {
//                     open ? <XMarkIcon/> : <Bars3BottomRightIcon />
//                 }
//             </div>
//             {/* linke items */}
//             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
//                 {
//                     Links.map((link) => (
//                     <li className='font-semibold md:ml-8 md:my-0 my-7'>
//                         <a href={link.link} className='text-gray-800 duration-500 hover:text-blue-400'>{link.name}</a>
//                     </li>))
//                 }
                
//             </ul>
//             {/* button */}
//            </div>
//         </div>
//     );
// };

// export default NavBar;

import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute flex items-center justify-between w-full p-5">
        <figure>
          <img className="w-32" src={Logo} alt="" />
        </figure>
        <nav className={`${isOpen ? "open" : ""}`}>
          <ul className="gap-10">
            <li>
              <Link to="/Home" className="text-lg text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Crew" className="text-lg text-white">
                Crew
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-lg text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="text-lg text-white">
                Contact
              </Link>
            </li>
   
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm tracking-wider text-white uppercase"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}