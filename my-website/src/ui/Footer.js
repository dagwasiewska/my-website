import React from "react"
import Social from "../components/Social"
import PathConnect from "./PathConnect"

function Footer({ children }) {
  return (
    <div className="bg-[#0a192f] w-full pb-12 text-white text-m font-serif tracking-wide text-right pt-12 pr-4 ">
      <PathConnect />
      <Social />
      {children}
    </div>
  )
}

export default Footer
