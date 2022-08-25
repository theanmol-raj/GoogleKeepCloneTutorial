import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className=' fixed top-0 w-screen p-3 flex border-b border-gray-300 shadow-md bg-white'>
        <div>
        <div className=' hover:bg-gray-200'>
            <MenuIcon />
        </div>
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar