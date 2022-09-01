import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

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
      <div className="flex h-full">
        {/* <Sidebar sidebar={sidebar} /> */}
        <div className="w-full">
          <div className=" w-full">
          ll
            <input />
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
