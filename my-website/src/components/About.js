import React, { useEffect } from "react"
import PathAbout from "../ui/PathAbout"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Message from "./Message"

function About() {
  gsap.registerPlugin(ScrollTrigger)

  // let sections = gsap.utils.toArray(".abt")

  // gsap.to(".abt", {
  //   scrollTrigger: {
  //     trigger: ".abt",
  //     start: "top 50px",
  //     endTrigger: ".skills",
  //     pin: true,
  //     end: "bottom 80%",
  //   },
  // })

  const tl = gsap.timeline()
  useEffect(() => {
    tl.from(".abt", { xPercent: -300 })
  })

  ScrollTrigger.create({
    animation: tl,
    trigger: ".abt",
    start: "20px 1000%",
    // end: "bottom 100px",
    scrub: true,
    pin: true,
    anticipatePin: 3,
  })

  return (
    <>
      {/* <div className="about ml-96">
        <PathAbout />
      </div> */}
      <div className="ml-0 mb-96 mt-96 w-full sm:w-full md:w-full">
        <div className="mt-8 pt-8 mb-6 bg-orange-50 border-solid border-2 border-black w-full sm:w-full md:w-full">
          {/* <div className="daga max-w-xs mx-48 mb-8 pt-8 pb-8 px-8 mt-16 border-4 border-pink-200 border-dotted border-#bdd0c4 rounded rounded-full">
            <img
              className="rounded rounded-full"
              src="/img/photo.jpeg"
              alt="photo"
            ></img>
          </div> */}
          <div className="abt about ml-12 sm:ml-64 md:ml-64">
            <PathAbout />
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col ml:flex-row font-sans mt-12 font-sans font-mono mx-12 sm:mx-32 md:mx-48 pb-12 pt-12 md:pl-12 md:pr-12">
          {/*  */}
          <img
            className="rounded-full w-1/3 h-1/3 "
            src="/img/photo.jpeg"
            alt="photo"
          ></img>

          {/* img-  "rounded rounded-full daga w-64 center max-w-lg flex sm:w-16 sm:h-16 md:w-64 md:h-64 lg:w-96 lg:h-96 mr-8 mb-8 pt-8 pb-8 px-8 mt-16 rounded rounded-full"*/}

          {/* <div className="inline-grid ">
            <span class="flex flex-row h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75">
                {" "}
              </span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="inline-grid">
            <h1 className="flex flex-row ml-8 text-xl">Zurich</h1>
          </div> */}

          <div className="flex flex-row pt-12 indent-8 text-center mx-12 sm:mx-12 md:mx-32 lg:mx-64">
            I started my programming journey by joining an intensive bootcamp
            where I had the opportunity to learn the basics of front-end
            development. Ever since then I have continued to learn on my own. I
            never would have thought programming would bring me so much
            satisfaction and joy. I have always considered myself a creative
            person and front-end development gives me the possibility of
            building something from scratch. Seeing the finished product on
            screen after long time of hard work gives me a feeling of
            satisfaction that keeps me motivated. I want to learn more and to
            know more. I am ready to keep learning and apply my knowledge to new
            projects. The possibilities in this line of work are endless - it
            all depends on your imagination. That is why I like it so much!
          </div>
          <button className="w-64 h-12 border-solid border-black border-2 px-4 text-center align-center mt-24 align-baseline mx-auto hover:bg-orange-50">
            CONTACT ME
          </button>
        </div>
      </div>
    </>
  )
}

export default About
