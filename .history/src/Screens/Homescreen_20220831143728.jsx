import React, { useState } from 'react'
import Navbar from '../Components/Navbar';

function Homescreen() {
    const [sidebar , SetSidebar] = useState(false);
  
  return (
    <div className=''>
        <Navbar showtitle="Keeper" />
        
        
    </div>
  )
}

export default Homescreen;