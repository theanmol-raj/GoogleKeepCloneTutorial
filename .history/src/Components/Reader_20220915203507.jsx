import React, { useEffect, useState } from 'react'
import { getFirestore, collection,  onSnapshot } from "firebase/firestore";
import app from '../Firebase';
import Note from './Note';


function Reader() {
    const db = getFirestore(app) ;
    const [notes , SetNotes] = useState([]) ;

    useEffect(()=>
         onSnapshot(collection(db , "Notes"), (dbphoto) => {
            const newNotesArray = [];
            dbphoto.forEach((doc) => {
                newNotesArray.push({ id: doc.id , ...doc.data()});
            });
            newNotesArray.reverse() ;
            console.log(newNotesArray)
            // SetNotes(newNotesArray);

          })
   ,[db]);
   



  return (
    <div className=" grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
        {notes.map((item , index) => <Note key={index} data={item}  /> )}
    </div>
  )
}

export default Reader