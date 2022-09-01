import React from 'react'

function Sidebar() {
  return (
    <div className={` ${sidebar? ' md:w-72' : ' w-0'} py-2 transform transition-width duration-500 ease-out flex flex-row sidebar  font-semibold `}>

    </div>
  )
}

export default Sidebar