"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function ProfileInfo() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
    <div>
      <button
        onMouseOver={() => setOpen(true)}
        className="w-[146px] h-[54px] text-[#050505] self-stretch hover:border-[color:var(--Btn-grdt,#1C4BC4)] hover:bg-[color:var(--Btn-grdt,#f1e9ff)] border bg-[rgba(239,239,239,1)]   gap-2.5 whitespace-nowrap my-auto px-8 py-2.5 rounded-[8px] border-solid max-md:px-5"
      >
        Info
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 rounded-xl text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="w-[580px] h-[380px] relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                  </div> */}
                  <div className="mt-3 text-center flex flex-col justify-center gap-6 sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base text-center font-semibold text-gray-900"
                    >
                      About this account
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        To help keep our community authentic, we’re showing
                        information about accounts on Bizlaxy. <a href="#" className="text-sm text-blue-800">See why this
                        information is important.</a> 
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="">Date joined </p>
                      <p className="text-sm text-gray-500">May 2025</p>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <p className="">
                        Former username. 
                      </p>
                      <p><FormerUsernameInfo/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-evenly sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Report 
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
    </>
  );
}

export function FormerUsernameInfo(){
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className=""
      >
        2 &gt;
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 rounded-xl text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="w-[580px] h-[280px] relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                  </div> */}
                  <div className="mt-3 text-center flex flex-col justify-center gap-6 sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base text-center font-semibold text-gray-900"
                    >
                     Former usernames
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        The number of times an account changes its username may help you identify whether it's authentic or misleading.
                      </p>
                    </div>
                    
                    <div className="mt-2">
                      <p className="">
                        bannna_saa_689 has changed their username 2 times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-evenly sm:px-6">
                
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}