import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className=' fixed top-0 w-screen px-3 py-2 flex border-b border-gray-300 shadow-md bg-white'>
        <div className=' flex justify-center items-center space-x-5'>
        <div className=' hover:bg-gray-200 p-3 rounded-full cursor-pointer'>
            <MenuIcon />
        </div>
        <img className=' h-12' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png' />
        <h1 className=' capitalize '> KEEP</h1>
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar