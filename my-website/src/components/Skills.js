import PathSkills from "../ui/PathSkills"
import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "animate.css"

function Skills() {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline()
  useEffect(() => {
    tl.from(".skills", { xPercent: -300 })
  })

  ScrollTrigger.create({
    animation: tl,
    trigger: ".skills",
    start: "20px 1000%",
    // end: "bottom 100px",
    scrub: true,
    pin: true,
    anticipatePin: 3,
  })
  return (
    <>
      <div className="w-full mb-96 mt-96">
        <div className="mt-8 pt-8 mb-6 bg-orange-50 w-full border-solid border-2 border-black">
          <div className="skills ml-12 sm:ml-64 md:ml-64">
            <PathSkills />
          </div>
        </div>
        <div className="flex font-mono mx-4 mt-8 sm:mt-32 md:mt-32 sm:mx-12 md:mx-32 lg:mx-48 bg-orange-50 drop-shadow-xl border-solid border-2 border-black ">
          <div className="flex font-mono mt-8 mb-8 space-x-12 text-center mx-auto">
            <ul className="grid grid-cols-1 gap-2 py-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-4 animate__animated animate__backInDown">
              <li> HTML</li>
              <li className="w-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                </svg>
              </li>
              <li className=""> CSS</li>
              {/* <FontAwesomeIcon icon="fab fa-react" /> */}
              <li> Javascript</li>
              <li> React</li>
              <li> Node.js</li>
              <li> npm</li>
              <li> SASS</li>
              <li> Bootstrap</li>
              <li> Tailwind</li>
              <li> GSAP</li>
              <li> Styled components</li>
              <li> Headless CMSs</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
