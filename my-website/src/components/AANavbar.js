import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const AANavbar = ({setNav, nav}) => {

  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed z-10 w-full h-[80px] flex justify-between tracking-wider items-center px-4 bg-[#0a192f] text-gray-300">
      {/* <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div> */}

      {/* menu */}
      <ul className="hidden font-raleway md:flex hover:cursor-pointer">
        <li className="px-4 hover:text-pink-600">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4 hover:text-pink-600">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4 hover:text-pink-600">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4 hover:text-pink-600">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="px-4 hover:text-pink-600">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AANavbar
