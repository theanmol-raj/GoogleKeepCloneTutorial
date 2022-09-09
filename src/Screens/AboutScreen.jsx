import React, { useState } from 'react'

function AboutScreen() {



    // const [nam ,SetName] = useState({fn: "",ln : ""});
    

    // function Handler(e){
    //     const { name , value  } = e.target;
    //     SetName(prev => ({...prev ,[name] : value}))

    //     // if(name==="fName"){
    //         //     return {fn:value , ln:nam.ln}
    //         // }else if(name === "lName"){
    //         //     return {ln:value ,fn:nam.fn}
    //         // }

        
    //     // if(name==="fName"){
    //     //     SetName({fn:value , ln:nam.ln})
    //     // }else if(name === "lName"){
    //     //     SetName({ln:value ,fn:nam.fn})
    //     // }

        
        
    // }

    // function hk(e){
    //     console.log(nam)
    //     e.preventDefault();
    // }



  return (
    <div>
    <h1 className=' text-5xl'> Hello {} {} </h1>
        <form >
        <input name="fn" className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='fname' /><br />
        <input name="ln"  className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" placeholder='lName' /><br />
        <button type='submit' className=" bg-yellow-500 border-yellow-500 text-white p-2 px-4 rounded-lg rounded-l-none border-2 ">Click me</button>
        </form>    
    </div>
  )
}

export default AboutScreen