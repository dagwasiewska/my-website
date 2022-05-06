import React from "react"
import "animate.css"

function NavItem() {
  return (
    <ul className="font-mono bg-black tracking-wider border-solid border-2 border-black pt-4 pb-4 uppercase text-xs sm:text-l md:text-xl text-orange-50 sans-serif flex flex-row space-x-4 justify-center mt-32 animate__animated animate__backInDown animate__delay-3s">
      <li className="hover:text-purple-400 hover:cursor-pointer" id="about"><a href="#about">About</a></li>
      <li className="">|</li>
      <li className="hover:text-purple-400 hover:cursor-pointer">Skills</li>
      <li className="">|</li>
      <li className="hover:text-purple-400 hover:cursor-pointer">Github</li>
      <li className="">|</li>
      <li className="hover:text-purple-400 hover:cursor-pointer">Contact</li>
    </ul>
  )
}

export default NavItem
