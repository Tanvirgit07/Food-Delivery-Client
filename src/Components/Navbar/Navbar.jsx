import { FaCartArrowDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-center"
          >
            <li className="font-semibold">
              <NavLink className="">Home</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink className="">Menu</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink className="">Mobile App</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink className="">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="text-2xl text-orange-600 font-bold">Tomato.</div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal flex gap-7">
          <li className="font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "text-green-400 font-semibold border-solid border-b-2 border-green-400 py-1"
                  : "text-black";
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/menu"
              className={({ isActive }) => {
                return isActive
                  ? "text-green-400 font-semibold border-solid border-b-2 border-green-400 py-1"
                  : "text-black";
              }}
            >
              Menu
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/mobile-app"
              className={({ isActive }) => {
                return isActive
                  ? "text-green-400 font-semibold border-solid border-b-2 border-green-400 py-1"
                  : "text-black";
              }}
            >
              Mobile App
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive
                  ? "text-green-400 font-semibold border-solid border-b-2 border-green-400 py-1"
                  : "text-black";
              }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <div>
          <IoSearch className="text-2xl" />
        </div>
        <div>
          <FaCartArrowDown className="text-2xl" />
        </div>
        <button className="btn btn-outline btn-sm rounded-full text-base">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
