import React from 'react'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

function LoginScreen() {
  return (
    <div className=' h-screen  w-screen flex justify-center items-center bg-gray-100'>
        <div className=' bg-white'>
            <h1>Hello Login To Continue</h1>
            <button> <VpnKeyOutlinedIcon />Sign In with Google</button>
        </div>

    </div>
  )
}

export default LoginScreen