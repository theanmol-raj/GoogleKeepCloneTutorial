import React from 'react'
import Homescreen from './Homescreen'

function NoteScreen() {
  return (
    <div className=' relative'>
        <Homescreen />
        <div className='flex absolute top-0 bottom-0 left-0 right-0 bg-black/20 z-50 justify-center items-center h-screen w-screen'>
            <div className=' max-w-2xl bg-white mx-auto justify-center items-center'>
                    helllo
            </div>
        </div>
    </div>
  )
}

export default NoteScreen