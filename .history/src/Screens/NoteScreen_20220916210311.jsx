import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Homescreen from './Homescreen'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from '../Firebase';

function NoteScreen() {
    const db = getFirestore(app);
    const {id}  = useParams() ;

    const [note ,SetNote] = useState(null) ;



  return (
    <div className=' relative'>
        <Homescreen />
        <div className='flex absolute top-0 bottom-0 left-0 right-0 bg-black/20 z-50 justify-center items-center h-screen w-screen'>
            <div className=' max-w-2xl bg-white mx-auto justify-center rounded-2xl shadow-2xl items-center'>
            <div className='px-2 w-96 h-48  rounded-2xl py-6 border shadow-lg ' >
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