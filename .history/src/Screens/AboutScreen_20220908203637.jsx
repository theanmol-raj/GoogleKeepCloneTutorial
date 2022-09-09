import React, { useState } from 'react'

function AboutScreen() {



    const [nam ,SetName] = useState({
        fn: "" ,
        ln : ""
    });
    

    function Handler(e){
        
    }






  return (
    <div>
        <h1 className=' text-5xl'> Hello {nam.fn} {nam.ln} </h1>
        <input value={nam.fn} onChange={Handler} className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='fname' /><br />
        <input value={nam.ln} onChange={Handler} className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='lName' /><br />
        <button className=" bg-yellow-500 border-yellow-500 text-white p-2 px-4 rounded-lg rounded-l-none border-2 ">Click me</button>
    </div>
  )
}

export default AboutScreen