import React from 'react'

function Header({ children }) {
  return (
    <div className="bg-gray-800 w-full text-start text-black text-2xl font-serif font-semibold text-lg tracking-wide">{children}</div>
  )
}


export default Header