import React from "react"

const A = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-96">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-96">
          <div className="sm:text-right text-4xl font-bold">
            {/* <p>Hi. I'm Dagmara, nice to meet you. Please take a look around.</p> */}
            <img className="rounded-full " src="/my-website/img/photo.jpeg" />
          </div>
          <div>
            <p className="mt-28">
              I am passionate about building web applications. I started my programming journey by
              joining an intensive bootcamp where I had the opportunity to learn
              the basics of front-end development. Ever since then I have
              continued to learn on my own. I never would have thought
              programming would bring me so much satisfaction and joy. I have
              always considered myself a creative person and front-end
              development gives me the possibility of building something from
              scratch. Seeing the finished product on screen after long time of
              hard work gives me a feeling of satisfaction that keeps me
              motivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default A
