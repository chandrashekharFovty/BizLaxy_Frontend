import React, { useState } from "react";
import { MoreHorizontal, MoreVertical, X } from "lucide-react";
import Mute from "../../../public/mute.png";
import Report from "../../../public/Report.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StoryPopover = () => {
  const [open, setOpen] = useState(false);
  const showToast = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="absolute ml-[90%]">
      <MoreHorizontal
        onClick={() => setOpen(!open)}
        className="cursor-pointer justify-end text-white"
      />
      {open && (
        <div className="relative mt-[165%] -ml-[100%] bg-gray-100 border rounded-xl shadow-md z-10 w-[300px] h-[159px] text-sm">
          <div
            className="pl-5 border-b-2"
            onClick={() => showToast("Muted the creator")}
          >
            <div className="cursor-pointer h-[53px] text-black font-medium flex gap-2 items-center">
              <img src={Mute} alt="" className="w-5 h-5" />
              Mute This User
            </div>
          </div>
          <div
            className="pl-5 border-b-2"
            onClick={() => showToast("Reported the creator")}
          >
            <div className="cursor-pointer h-[53px] font-medium text-red-600 flex gap-2  items-center">
              <img src={Report} alt="" className="w-5 h-5" />
              Report This Account
            </div>
          </div>
          <div className="pl-5" onClick={() => setOpen(!open)}>
            <div className="cursor-pointer h-[53px] text-black font-normal flex gap-2 items-center"><X/>Cancel</div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default StoryPopover;
