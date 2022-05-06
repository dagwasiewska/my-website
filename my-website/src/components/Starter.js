import React, { useEffect } from "react"
import { gsap } from "gsap"

function Starter() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } })
    // tl -> timeline

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 })
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1")
  })

  return (
    <>
      {/* <div className="bg-black fixed top-0 left-0 w-full h-full"> */}
        {/* <div className="text-orange-50 uppercase font-heebo font-bold sans-serif text-5xl flex justify-center items-center">
          Welcome
        </div> */}
      {/* </div> */}
      {/* <div></div> */}
      {/* <div className="bg-blue-200 fixed top-0 left-0 w-full h-full translate-y-full">
        Slider{" "}
      </div> */}
      <div className="intro z-20">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Front </span>
          </h1>
          <h1 className="hide">
            <span className="text">End</span>
          </h1>
          <h1 className="hide">
            <span className="text">Dev</span>
          </h1>
        </div>
      </div>
      <div className="slider bg-white fixed z-20 top-0 left-0 w-full h-full translate-y-full"></div>
    </>
  )
}

export default Starter
