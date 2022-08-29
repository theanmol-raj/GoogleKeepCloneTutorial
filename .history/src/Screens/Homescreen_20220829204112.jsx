import React, { useState } from 'react'
import Navbar from '../Components/Navbar';

function Homescreen() {
  let [temp,setTemp] = useState(0) ;

  function Adder(){
    setTemp(temp + 1) ;
    console.log(temp)
  }

  function Adder2(){
    temp += 1;
    console.log(temp)
  }

  return (
    <div className=' m-8'>
        {/* <Navbar /> */}
        <p className=' mb-8 font-black text-4xl'>{temp}</p>
        <button onClick={Adder} className=' bg-gray-500 p-8 '>Click me</button>
    </div>
  )
}

export default Homescreen;