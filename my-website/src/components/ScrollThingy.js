import React from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

function ScrollThingy() {
  gsap.registerPlugin(ScrollTrigger)

  const purple = "#854794"
  const blue = "#00A8DE"
  const green = "#54AE37"
  const yellow = "#FFDB00"
  const orange = "#F5A336"
  const red = "#E84750"
  const rainbow = [red, orange, yellow, green, blue, purple]
  //scrubbing animation
  //sets an animation on each stacked text element
  //but gives each one a slightly different scrub value
  //so when you scroll they separate and catch up at
  //different rates
  
  gsap.utils.toArray(".scrub").forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: ".scrub-wrapper",
        start: "top top",
        end: "bottom center+=150",
        pin: ".scrub-wrapper",
        scrub: (7 - i) * 0.1,
      },
      y: "45vh",
    })
  })

  return (
    <div className="scrub-wrapper">
      <h1 className="red stack scrub">scroll me!</h1>
      <h1 className="orange stack scrub">scroll me!</h1>
      <h1 className="yellow stack scrub">scroll me!</h1>
      <h1 className="green stack scrub">scroll me!</h1>
      <h1 className="blue stack scrub">scroll me!</h1>
      <h1 className="purple stack scrub">scroll me!</h1>
    </div>
  )
}

export default ScrollThingy
