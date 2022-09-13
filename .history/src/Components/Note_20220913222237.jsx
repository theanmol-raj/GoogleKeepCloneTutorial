import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function Note({data}) {

    async function Delete(){

    }


  return (
    <div className='px-2 py-6 border shadow-lg rounded-lg ' >
    <p>{data.note}</p>
    <button className='' onClick={Delete}><DeleteIcon /></button>
    </div>
  )
}

export default Note