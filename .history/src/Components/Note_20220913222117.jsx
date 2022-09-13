import React from 'react'

function Note({data}) {


  return (
    <div className='px-2 py-6 border shadow-lg rounded-lg ' ><p>{data.note}</p>
    <button></button></div>
  )
}

export default Note