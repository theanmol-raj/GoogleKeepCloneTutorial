import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import ReplayIcon from "@mui/icons-material/Replay";
import ViewStreamIcon from "@mui/icons-material/ViewStream";

function Navbar() {
  const [search , setSearch] = useState(false);

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
      <div className="w-full max-w-4xl">
        <input className=" border rounded-3xl bg-gray-200 p-2 max-w-3xl w-full" />
      </div>
      <div className=" flex items-center space-x-10">
        <div className=" flex items-center text-gray-700  text-2xl space-x-4 ">
          <ReplayIcon fontSize="inherit" />
          <ViewStreamIcon fontSize="inherit" />{" "}
          <SettingsIcon fontSize="inherit" />
        </div>
        <div className=" flex items-center space-x-2">
          <div className=" hover:bg-gray-200 p-2 text-gray-700  rounded-full cursor-pointer">
            <AppsIcon />
          </div>

          <img
            className=" h-10 p-1 bg-gray-200 rounded-full"
            src="https://lh3.googleusercontent.com/ogw/AOh-ky1Fa9Rwlqh07SdVbhvWC33ehzXYuprR8mErUyRtUQ=s32-c-mo"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
