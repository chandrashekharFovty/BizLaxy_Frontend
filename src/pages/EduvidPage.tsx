import React from "react";
import ReelCard from "../components/eduvid/eduvidCard"; // adjust the path if needed
import Sidebar from "@/components/layout/Sidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";

const ReelsPage = () => {
  return (
    <div className="w-screen h-auto flex overflow-x-hidden overflow-y-clip">
      <div className="w-1/12 z-50"><Sidebar/></div>
      <div className=" dark:bg-gray-800 dark:text-white w-8/12 h-full z-0 flex justify-center bg-gray-100 overflow-x-hidden overflow-y-clip">
      <div className="ml-[412px] mr-[290px] my-5 mb-3 relative transparent rounded-3xl">
         {/* {reelsData.map((reel, index) => (
        <ReelCard key={index} {...reel} />
      ))} */}
      <ReelCard/>
      </div>
      </div>
       {/* Right Sidebar */}
            <div className="fixed right-0 top-0 w-[350px] h-full z-50 bg-white">
              <RightSidebar />
            </div>
    </div>
    
  );
};

export default ReelsPage;
