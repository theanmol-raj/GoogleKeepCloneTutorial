import React from 'react'
import Homescreen from './Homescreen'

function NoteScreen() {
  return (
    <div className=' relative'>
        <Homescreen />
        <div className='flex absolute top-0 bottom-0 left-0 right-0 bg-black/20 z-50 justify-center items-center h-screen w-screen'>
            <div className=' max-w-2xl bg-white mx-auto justify-center items-center'>
            <div className='px-2 py-6 border shadow-lg rounded-lg ' >
    <p>title</p>
    <button>Update</button>
    <button className=''></button>
    </div>
            </div>
        </div>
    </div>
  )
}

export default NoteScreen