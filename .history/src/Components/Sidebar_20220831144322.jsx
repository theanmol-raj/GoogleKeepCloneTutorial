import React from 'react'

function Sidebar(props) {
  return (
    <div className={` ${props.sidebar? ' md:w-72' : ' w-0'} py-2 transform transition-width duration-500 ease-out flex flex-row sidebar  font-semibold `}>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
    </div>
  )
}

export default Sidebar