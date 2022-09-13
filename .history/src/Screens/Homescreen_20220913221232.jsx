import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Reader from "../Components/Reader";
import Sidebar from "../Components/Sidebar";
import Writer from "../Components/Writer";

function Homescreen({ SO, user }) {
  const [sidebar, SetSidebar] = useState(false);

  return (
    <div className=" h-screen">
      <Navbar
        showtitle="Keeper"
        user={user}
        cont={SetSidebar}
        SO={SO}
        prev={sidebar}
      />
      <div className="flex pt-[72px] h-full">
        <Sidebar sidebar={sidebar} />
        <div className="w-full items-center ">
        {/* data write on database */}
          <Writer />
          {/* Show the data from database */}
          <div className=" max-w-7xl mx-auto pt-12">
          <Reader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
