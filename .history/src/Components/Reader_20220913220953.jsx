import React, { useEffect, useState } from 'react'
import { getFirestore, collection,  onSnapshot } from "firebase/firestore";
import app from '../Firebase';


function Reader() {
    const db = getFirestore(app) ;
    const [notes , SetNotes] = useState([]) ;

    useEffect(()=>
         onSnapshot(collection(db , "Notes"), (dbphoto) => {
            const newNotesArray = [];
            dbphoto.forEach((doc) => {
                newNotesArray.push(doc.data());
            });
            SetNotes(newNotesArray);

          })
   ,[db]);


   console.log(notes)




  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {notes.map((item , index) => <div key={index}>

</div> )}
    </div>
  )
}

export default Reader