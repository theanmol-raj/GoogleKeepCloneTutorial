import React from 'react'
import Homescreen from './Homescreen'

function NoteScreen() {
  return (
    <div className=' relative'>
        <Homescreen />
        <div className=' absolute top-0 bottom-0 left-0 right-0 bg-black z-50 h-screen w-screen'></div>
    </div>
  )
}

export default NoteScreen