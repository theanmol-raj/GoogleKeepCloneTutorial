import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

function Sidebar(props) {
  return (
    <div className={` ${props.sidebar? ' md:w-72' : ' w-0'} pt-20 h-full transform transition-width duration-500 ease-out  font-semibold `}>
        <button>

        </button>
    </div>
  )
}

export default Sidebar