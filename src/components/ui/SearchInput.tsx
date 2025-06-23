import React from "react";

export function SearchInput() {
  return (
    <div className="relative w-full">
      <div className="flex min-h-10 w-full flex-col items-stretch justify-center p-px rounded-[100px]">
        <div className="bg-white flex min-h-[38px] w-full gap-[5px] flex-1 rounded-[100px]" />
      </div>
      <div className="absolute z-10 flex items-center gap-3 text-base text-[rgba(120,120,120,1)] font-normal whitespace-nowrap ml-[23px] top-1/2 transform -translate-y-1/2 max-md:ml-2.5">
        <img src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/bcaf65793e9eb7ed063c2ce5c3bb4e1717652099?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto" />
        <div className="self-stretch my-auto">Search...</div>
      </div>
    </div>
  );
}
