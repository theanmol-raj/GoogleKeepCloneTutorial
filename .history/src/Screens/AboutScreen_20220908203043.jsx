import React, { useState } from 'react'

function AboutScreen() {
    const [fn ,Setfn] = useState("");
    const [ln ,Setln] = useState("");

    function Handler1(e){
        Setfn(e.target.value)
    }

    function Handler2(e){
        Setln(e.target.value) ;
    }




  return (
    <div>
        <h1 className=' text-5xl'> Hello {fn} {ln} </h1>
        <input value={fn} onChange={Handler1} className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='fname' /><br />
        <input value={ln} onChange={Handler2} className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='lName' /><br />
        <button className=" bg-yellow-500 border-yellow-500 text-white p-2 px-4 rounded-lg rounded-l-none border-2 ">Click me</button>
    </div>
  )
}

export default AboutScreen