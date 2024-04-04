import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/logo.png"
import './NavBar.scss'

export default function Header() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 inRightDiv">
          <div className="absolute inset-y-0 left-0 flex items-center inRightDivTwo sm:hidden">
            {/* Toggle button */}
            <button
              type="button"
              onClick={toggleMenu} // Add onClick event handler
              className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md inRight hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"} // Aria attribute based on isOpen state
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {/* Conditional rendering for menu icons */}
              <svg
                className={!isOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className={!isOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between flex-1 sm:items-stretch sm:justify-between">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img className="w-32" src={Logo} alt="" />
              </Link>
            </div>
            <div class="hidden sm:ml-6 sm:flex ">
              <div class="flex space-x-4 ">
                <ul className="gap-10 ulNavbar">
                  <li>
                    <Link to="/" className="text-lg text-white">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={!isOpen ? "block sm:hidden" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 addSomeWidth">
          <ul className="gap-10">
            <li>
              <Link to="/" className="text-lg text-white">
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
        </div>
      </div>
    </nav>
  )
}