import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function Homescreen({SO,user}) {
    const [sidebar , SetSidebar] = useState(false);
  
  return (
    <div className=' h-screen'>
        <Navbar showtitle="Keeper" user={user} cont={SetSidebar} SO={SO} prev={sidebar} />
        <Sidebar sidebar={sidebar} />


        
    </div>
  )
}

export default Homescreen;