import React from "react"

function Contact() {
  return (
    <div
      id="contact"
      className="contact text-center max-w-md mx-auto mt-8 border-dotted border-black border-2 pt-8 pb-8 "
    >
      {" "}
      Contact
      <div className="container mt-8 mb-8">
        <form action="https://formspree.io/f/xnqwppwa" method="POST">
          <input
            className="border-dotted border-black border-2 space-x-4 ml-4 mr-4 mt-4 mb-4"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="border-dotted border-black border-2 space-x-4"
            type="email"
            placeholder="E-mail"
            name="email"
          />
          <textarea
            className="border-dotted border-black border-2 mt-4 "
            placeholder="Message"
            name="message"
          ></textarea>
          <input
            className="border-black border-black border-2"
            type="submit"
          ></input>
        </form>
      </div>
    </div>
  )
}

export default Contact
