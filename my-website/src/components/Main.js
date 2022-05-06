import React from "react"
import Header from "../ui/Header"
import Nav from "../ui/Nav"
import "animate.css"
import Logo from "./Logo"

function Main() {
  return (
    <>
      <Header className="bg-#bdd0c4">
        <Logo />
        <Nav></Nav>
      </Header>
    </>
  )
}

export default Main
