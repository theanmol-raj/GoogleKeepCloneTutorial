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
      <div className="flex pt-[72px] h-full">
        <Sidebar sidebar={sidebar} />
        <div className="w-full ">
          <div className=" w-full flex justify-center items-center ">
            <input placeholder="Take Note" className=" py-2 px-6 rounded-lg w-1/3 mt-8 border-2 shadow-lg" />
            <button>
              
            </button>

          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
