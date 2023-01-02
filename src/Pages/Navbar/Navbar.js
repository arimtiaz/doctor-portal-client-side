import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/home">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a>About</a>
                </li>
              </Link>
              <Link to="/appointment">
                <li>
                  <a>Appointment</a>
                </li>
              </Link>
              <Link to="/reviews">
                <li>
                  <a>Reviews</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a>Contact Us</a>
                </li>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctor Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/home">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link to="/appointment">
              <li>
                <a>Appointment</a>
              </li>
            </Link>
            <Link to="/reviews">
              <li>
                <a>Reviews</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a>Contact Us</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {" "}
          <Link to="/login">
            <button className="btn rounded-full bg-blue hover:bg-blueHover text-white border-none">
              <a>Login</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
