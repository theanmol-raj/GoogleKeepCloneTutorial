import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {getFirestore , doc, deleteDoc } from "firebase/firestore";
import app from '../Firebase';

function Note({data}) {
    const db = getFirestore(app) ;

    async function Delete(){
        if (!data) return ;
        await deleteDoc(doc(db, "Notes", data.id));
    }
    
    

  return (
    <div className='px-2 py-6 border shadow-lg rounded-lg ' >
    <p>{data.note}</p>
    <button>Update</button>
    <button className='' onClick={Delete}><DeleteIcon /></button>
    </div>
  )
}

export default Note