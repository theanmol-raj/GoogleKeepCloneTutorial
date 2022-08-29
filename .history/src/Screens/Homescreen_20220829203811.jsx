import React, { useState } from 'react'
import Navbar from '../Components/Navbar';

function Homescreen() {
  let [temp,setTemp] = useState(0) ;

  function Adder(){
    temp +=1;
    console.log(temp)
  }

  return (
    <div>
        {/* <Navbar /> */}
        <p className=' mb-8 font-black text-4xl'>{temp}</p>
        <button className=' bg-gray-500 p-8 '>Click me</button>
    </div>
  )
}

export default Homescreen;