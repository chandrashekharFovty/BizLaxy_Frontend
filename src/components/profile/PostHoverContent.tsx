"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { BiComment } from "react-icons/bi";
import { Heart } from "lucide-react";


export function PostHoverContent({width = "", height = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="absolute w-full h-full">
        <button
          onMouseOver={() => setOpen(true)}
          className="absolute w-full h-full"
        ></button>
        <Dialog open={open} onClose={setOpen} className="absolute z-30">
          <DialogBackdrop
            transition
            className="inset-0 bg-black/85 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          />
          <DialogPanel
            transition
            className="w-[300px] h-[300px] flex bg-red-900"
          >
            
              <button
                type="button"
               
                className="w-[100px] h-[100px] flex items-center justify-center"
              >
               <BiComment className="text-white"/>
               <span className="text-white">5555</span>
              </button>
              <button
                type="button"
                data-autofocus
                className="w-[100px] h-[100px] flex items-center justify-center"
              >
             <Heart className="text-white"/>
             <span className="text-white">5555</span>
              </button>
       
          </DialogPanel>
        </Dialog>
      </div>
    </>
  )
};


