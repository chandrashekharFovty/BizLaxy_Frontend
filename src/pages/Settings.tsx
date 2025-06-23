import { ThemeContext } from "@/DarkTheme/contentThem";
import { ThemeContext1 } from "@/DarkTheme/Setting";


import React, { useContext } from "react";

function AllSettings() {
     const { toggleTheme } = useContext(ThemeContext);
  const Logout = () => {

    // TODO: Add your logout logic here
    console.log("Logged out");
  };

  return (
    <div className="dark:glass-bg-dark dark:border dark:border-white rounded-xl absolute z-50 w-[347px] h-[326px] left-full -translate-y-1/2 ml-4 bg-white shadow-lg p-2 mb-10">
      <div className="w-[159px] dark:text-white dark:font-mediam h-[24px] text-[18px] font-bold px-3 py-2 mt-2">
        More Options
      </div>

      <div className="w-[307px] h-[100px] rounded-3xl mt-6 px-4 flex flex-col">
        <button className="dark:hover:text-gray-400 dark:text-white w-full h-[48px] text-left px-2 py-1  flex gap-2">
          {/* <img src={addsettings} alt="Settings Icon" className="w-7 h-7" /> */}
          Settings
        </button>
        <button className="dark:hover:text-gray-400 dark:text-white  w-full h-[48px] text-left px-2 py-1  flex gap-2"
          onClick={toggleTheme}>
          {/* <img src={addmoon} alt="Switch Appearance Icon" className="w-7 h-7" /> */}
         Switch
        </button>
      </div>
        <button
          onClick={Logout}
          className="w-full h-[48px] text-red-800 text-left px-2 py-1 font-medium hover:text-red-400 flex gap-2"
        >
          Log Out
        </button>
      </div>
    // </div>
  );
}

export default AllSettings;
