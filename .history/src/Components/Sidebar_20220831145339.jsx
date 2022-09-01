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
    <div className={` ${props.sidebar? ' md:w-72' : ' w-0'} pt-20 flex shadow-md flex-col items-start  h-full transform transition-width duration-500 ease-out  font-semibold `}>
        {array.map((item ,index) => <button>{item.icon} {props.sidebar && item.text }</button>)}
    </div>
  )
}

export default Sidebar