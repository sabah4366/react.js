import { useContext, useState } from "react";
import { LOGO_CDN  } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [btnName,setBtnName] = useState("Login")
    const isOnlineStatus = useOnlineStatus()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { loggedInUser } = useContext(UserContext)


    return  (
        <div className=" from-red-100 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="logo-container">
          <img className="w-20 rounded-full shadow-lg" src={LOGO_CDN} alt="Logo" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Menu icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center space-y-4 md:space-y-0 md:space-x-6`}
        >
          <ul className="flex flex-col md:flex-row items-center text-black text-lg font-semibold">
            <li className="px-3 py-2 hover:text-yellow-300 transition duration-300">
              Online Status: {isOnlineStatus ? "✅" : "🟥"}
            </li>
            <li className="px-3 py-2 hover:text-yellow-300 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 py-2 hover:text-yellow-300 transition duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-3 py-2 hover:text-yellow-300 transition duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-3 py-2 hover:text-yellow-300 transition duration-300">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-3 py-2 hover:text-yellow-300 transition duration-300">
              {loggedInUser}
            </li>
            <li>
              <button
                className="text-black bg-yellow-400 px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
                onClick={() =>
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                }
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Header;