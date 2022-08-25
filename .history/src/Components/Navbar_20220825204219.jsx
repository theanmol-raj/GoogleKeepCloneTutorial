import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from '@mui/icons-material/Apps';

function Navbar() {
  return (
    <div className=" fixed top-0 w-screen px-3 py-2 flex justify-between items-center border-b border-gray-300 shadow-md bg-white">
      <div className=" flex justify-center items-center space-x-5">
        <div className=" hover:bg-gray-200 p-3 rounded-full cursor-pointer">
          <MenuIcon />
        </div>
        <img
          className=" h-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png"
        />
        <h1 className=" capitalize text-2xl text-gray-600/ "> Keep</h1>
      </div>
      <div>
        {/* search bar */}
      </div>
      <div>
        <div></div>
        <div className=" flex items-center">
            <AppsIcon />
            <img
          className=" h-10 rounded-full"
          src="https://lh3.googleusercontent.com/ogw/AOh-ky1Fa9Rwlqh07SdVbhvWC33ehzXYuprR8mErUyRtUQ=s32-c-mo"
        />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
