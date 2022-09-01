import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const array = [{text: "Notes" , icon : <LightbulbOutlinedIcon />},
{text: "Remainder" , icon : <NotificationsActiveOutlinedIcon />},{text: "ddgd" , icon : <BookmarkBorderOutlinedIcon />},{text: "Edit Label" , icon : <CreateOutlinedIcon />},{text: "Archive" , icon : <SaveAltOutlinedIcon />},{text: "Bin" , icon : <DeleteOutlineOutlinedIcon />}]




function Sidebar(props) {
  return (
    <div className={` ${props.sidebar? ' md:w-72' : ' w-0'} pt-20 flex shadow-2xl flex-col items-start  h-full transform transition-width duration-500 ease-out  font-semibold `}>
        {array.map((item ,index) => <div  className=' hover:bg-yellow-200 w-full rounded-3xl'><button className='py-4 px-5 hover:bg-yellow-200 rounded-full'>{item.icon} {props.sidebar && item.text }</button></div>)}

    </div>
  )
}

export default Sidebar