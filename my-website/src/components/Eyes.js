import React from "react"

function Eyes() {
  const balls = document.getElementsByClassName("ball")
  document.onmousemove = function (e) {
    let x = (e.clientX * 100) / window.innerWidth - 80
    let y = (e.clientY * 100) / window.innerHeight - 80

    for (let i = 0; i < 2; i++) {
      balls[i].style.left = x + "%"
      balls[i].style.top = y + "%"
    }

    // let x = e.clientX * 100 / window.innerWidth + "%"
    // let y = e.clientY * 100 / window.innerHeight + "%"

    // for(let i=0; i<2; i++){
    //   balls[i].style.left = x
    //   balls[i].style.top = y
    //   balls[i].style.transform = "translate("+x+", "+y+");"
    //   console.log(x)
    // }
  }

  return (
    <div className="eyes absolute top-0 border-solid border-black translate-y-5 w-full text-right pr-8">
      <div className="eye w-10 h-10 bg-white border-2 border-black inline-block m-6 rounded-full relative overflow-hidden">
        <div className="ball w-4 h-4 bg-black absolute translate-y-5 rounded-full"></div>
      </div>
      <div className="eye w-10 h-10 bg-white border-2 border-black inline-block m-6 rounded-full relative overflow-hidden">
        <div className="ball w-4 h-4 bg-black absolute translate-y-5 rounded-full"></div>
      </div>
    </div>
  )
}

export default Eyes
