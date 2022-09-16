import React, { useState } from 'react'
import { getFirestore , collection, addDoc ,or  } from "firebase/firestore";
import app from '../Firebase';

function Writer() {
  const db = getFirestore(app);



 // DB Writes   
  const schema = {note : ""};

  const [notedata ,SetNoteData] = useState(schema);

    function Handler(e){
      const { name , value  } = e.target;
        SetNoteData(prev => ({...prev ,[name] : value}))
    }

    async function WritetoDB(e){
      if (notedata.note === "" || notedata.note === null || notedata.note === undefined) {
        alert("Please enter a valid string") ;
        return ;}

      await addDoc(collection(db, "Notes"), notedata)
      .then(()=>SetNoteData(schema))
      .catch((err)=>console.log(err))
      e.preventDefault();
    }

  return (
    <div className=" w-full flex justify-center mt-8  items-center ">
            <input value={notedata.note} name="note" onChange={Handler} placeholder="Take Note" className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" />
            <button onClick={WritetoDB} className=" bg-yellow-500 border-yellow-500 text-white p-2 px-4 rounded-lg rounded-l-none border-2 "> Make Note </button>
    </div>
  )
}

export default Writer