import React, { useState } from 'react'

function Writer() {
    
  const [notedata ,SetNoteData] = useState({note : ""});

    function Handler(e){
      const { name , value  } = e.target;
        SetNoteData(prev => ({...prev ,[name] : value}))
    }

    function WritetoDB(){
      console.log(notedata)
    }

  return (
    <div className=" w-full flex justify-center mt-8  items-center ">
            <input value={notedata.note} name="note" onChange={Handler} placeholder="Take Note" className=" py-2 px-6 rounded-lg w-1/3 rounded-r-none  border-2 shadow-lg" />
            <button onClick={WritetoDB} className=" bg-yellow-500 border-yellow-500 text-white p-2 px-4 rounded-lg rounded-l-none border-2 "> Make Note </button>
            <p>{notedata.note}</p>
    </div>
  )
}

export default Writer