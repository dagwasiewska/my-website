import React from 'react'

function Intro({ children, additionalcss }) {
  const className=`text-5xl flex flex-row justify-center animate__animated animate__backInLeft animate__delay-1s ${additionalcss || ''}`
  return (
    <div className={className}>{children}
    </div>
// 
    
  )
}

export default Intro