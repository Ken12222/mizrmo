import { Link } from "react-router-dom";
import mizrmologo from "../../images/mizrmo_logo.png";

export default function Navbar() {
  return (
    <header className=" bg-blue-800 h-1/5 z-50">
      <div className="navbar w-4/5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className="text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-blue-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact_us" className="text-blue-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl">
            <img className="w-56" src={mizrmologo} alt="brand_logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-yellow-400 ease-in-out duration-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-white hover:bg-yellow-400 ease-in-out duration-700"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact_us"
                className="text-white hover:bg-yellow-400 ease-in-out duration-700"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-full bg-yellow-400 border-0 text-blue-800">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
