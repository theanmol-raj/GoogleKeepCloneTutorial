import React from 'react'

function AboutScreen() {
  return (
    <div>
        <h1 className=' text-5xl'> Hello </h1>
        <input className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='fname' />
        <input className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='lName' />
        <button>Click me</button>
    </div>
  )
}

export default AboutScreen