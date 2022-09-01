import React from 'react'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

function LoginScreen() {
  return (
    <div className=' h-screen  w-screen flex justify-center items-center bg-gray-100'>
        <div className=' bg-white p-8 border- rounded-xl shadow-lg'>
            <h1 className=' text-2xl font-bold text-center'>Hello Login To Continue</h1>
            <button className=' w-full bg-fuchsia-200 rounded-2xl hover:bg-fuchsia-200 p-4 '> <VpnKeyOutlinedIcon />Sign In with Google</button>
        </div>

    </div>
  )
}

export default LoginScreen