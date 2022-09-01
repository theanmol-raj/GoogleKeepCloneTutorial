import React, { useState } from 'react'
import Navbar from '../Components/Navbar';

function Homescreen() {
    const [sidebar , SetSidebar] = useState(false);

    console.log(sidebar);
  
  return (
    <div className=''>
        <Navbar showtitle="Keeper" cont={SetSidebar} />


        
    </div>
  )
}

export default Homescreen;