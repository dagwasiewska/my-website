import React from "react"
// import photo from '../../public/img/photo.jpeg'

const AAWork = () => {
  const photo = "/my-website/img/photo.jpeg"
  const projects = "https://dagwasiewska.github.io/website-sass/"
  const project1 = "/my-website/img/project1.png"

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {/* <iframe src="https://dagwasiewska.github.io/website-sass/" title="W3Schools Free Online Web Tutorials"></iframe> */}
          {/* Grid Item */}

          <div className="max-w-sm rounded overflow-hidden shadow-lg font-thin">
            <iframe
              className="w-full h-48"
              src="https://dagwasiewska.github.io/spa-website/"
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
            <div className="py-4 text-center">
              <a href="https://dagwasiewska.github.io/spa-website/" className="font-roboto text-white border-2 hover:bg-pink-600 transition duration-150 ease-out hover:ease-in hover:border-pink-600 items-center mx-auto px-4 mx-2 inline-block inline-grid font-bold text-xl mb-2">LIVE</a>
              <a href="https://github.com/dagwasiewska/spa-website" className="text-white border-2 hover:bg-pink-600 transition duration-150 ease-out hover:ease-in hover:border-pink-600 items-center mx-auto px-4 mx-2 inline-block inline-grid font-bold text-xl mb-2">CODE</a>
              {/* <p class="text-gray-700 text-base">LINK</p> */}
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <iframe
              className="w-full h-48"
              src="https://dagwasiewska.github.io/website-sass/"
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
            <div className="py-4 text-center">
              <a href="https://dagwasiewska.github.io/website-sass/" className="text-white border-2 hover:bg-pink-600 transition duration-150 ease-out hover:ease-in hover:border-pink-600 items-center mx-auto px-4 mx-2 inline-block inline-grid font-bold text-xl mb-2">LIVE</a>
              <a href="https://github.com/dagwasiewska/website-sass" className="text-white border-2 hover:bg-pink-600 transition duration-150 ease-out hover:ease-in hover:border-pink-600 items-center mx-auto px-4 mx-2 inline-block inline-grid font-bold text-xl mb-2">CODE</a>
              {/* <p class="text-gray-700 text-base">LINK</p> */}
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <iframe
              className="w-full h-48"
              src="https://dagwasiewska.github.io/landing-page/"
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
            <div className="py-4 text-center">
              <a href="https://dagwasiewska.github.io/landing-page/" className="text-white border-2 hover:bg-pink-600 transition duration-150 ease-out hover:ease-in hover:border-pink-600 items-center mx-auto px-4 mx-2 inline-block inline-grid font-bold text-xl mb-2">LIVE</a>
              <a href="https://github.com/dagwasiewska/landing-page" className="text-white border-2 hover:bg-pink-600 transition duration-150 ease-out hover:ease-in hover:border-pink-600 items-center mx-auto px-4 mx-2 inline-block inline-grid font-bold text-xl mb-2">CODE</a>
              {/* <p class="text-gray-700 text-base">LINK</p> */}
            </div>
          </div>
       

    
        </div>
      </div>
    </div>
  )
}

export default AAWork
