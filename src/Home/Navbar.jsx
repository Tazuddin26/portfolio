import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const NavMenu = (
    <>
      <li>
        <button
          onClick={() => handleNavigation("/", "home")}
          className=" hover:text-blue-700 transition"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => handleNavigation("/about", "about")}
          className=" hover:text-blue-700 transition"
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={() => handleNavigation("/projects", "projects")}
          className=" hover:text-blue-700 transition"
        >
          Projects
        </button>
      </li>

      <li>
        <button
          onClick={() => handleNavigation("/contact", "contact")}
          className=" hover:text-blue-700 transition"
        >
          Contact
        </button>
      </li>
    </>
  );
  return (
    <div className="navbar  shadow-gray-200 shadow-lg bg-white dark:bg-gray-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
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
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {NavMenu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">My Details</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white text-xl gap-4 px-1">
          {NavMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://drive.google.com/file/d/1J40u3duOBnST8IOx0o5Nyszxpd0v2qIi/view?usp=drive_link">
          <button
            title="right arrow"
            className="p-2 px-6 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-green-600"
          >
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
