import "./App.css"
import { useState } from "react"
// import About from "./components/About"
import Bottom from "./components/Bottom"
import A from "./components/A"
// import Message from "./components/Message"
// import ScrollThingy from "./components/ScrollThingy"
// import Plane from "./components/Plane"
// import Skills from "./components/Skills"
// import Social from "./components/Social"
import Starter from "./components/Starter"
import AAHome from "./components/AAHome"
import AANavbar from "./components/AANavbar"
import AAWork from "./components/AAWork"
import AASkills from "./components/AASkills"
import AAContact from "./components/AAContact"


function App() {
  const [nav, setNav] = useState(false)

  return (
    <>
      
      <Starter />
      <AANavbar setNav={setNav} nav={nav} />
      {/* <Main /> */}
      <AAHome />
      <A />
      <AASkills />
      <AAWork />
      <AAContact />
      {/* <div className="App bg-orange-50"></div> */}
      {/* <About /> */}
      {/* <ScrollThingy /> */}
      {/* <Skills /> */}
      {/* <Plane /> */}
      {/* <Message /> */}
      <Bottom />
    </>
  )
}

export default App
