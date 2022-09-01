import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function Homescreen() {
    const [sidebar , SetSidebar] = useState(false);

    console.log(sidebar);
  
  return (
    <div className=' h-screen'>
        <Navbar showtitle="Keeper" cont={SetSidebar} prev={sidebar} />
        <Sidebar sidebar={sidebar} />


        
    </div>
  )
}

export default Homescreen;