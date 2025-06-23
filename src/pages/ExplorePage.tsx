import { useState } from "react";
import React from "react";
import ProfileGallery from "@/components/profile/ProfileGallery";
import ProfileTabs from "@/components/profile/ProfileTabs";
import Sidebar from "@/components/layout/Sidebar";
import searchIcon from  "../../public/searchdark.png";
import { SearchIcon } from "lucide-react";

type TabType = "post" | "eduvid" | "pitch" | "shop";
const ExplorePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("post");

  // Sample gallery items
  const galleryItems = [
    {
      id: "1",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c286384ab9a94f6ae63dddaf2109347578dc9fa7?placeholderIfAbsent=true",
    },
    {
      id: "2",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/215def76e11b54522b5f2ccb29cfa4f5dc529575?placeholderIfAbsent=true",
    },
    {
      id: "3",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
    },
    {
      id: "4",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/96687f4430bb048dcaed31fd494fd3f319acc078?placeholderIfAbsent=true",
    },
    {
      id: "5",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
    },
    {
      id: "6",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      id: "7",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
    },
    {
      id: "8",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
    },
    {
      id: "9",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
    },
    {
      id: "10",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      id: "11",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      id: "12",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
    },
  ];
  return (
    <>
    <Sidebar/>
      <div className="dark:bg-gray-800 dark:text-white  ml-[244px] z-0 mr-3 mb-3 scrollbar-hide">
        <div className="dark:bg-gray-800 dark:text-white ml-5 mt-[20px]">
          <div className="dark:bg-gray-800 dark:text-white w-[98%] h-[40px] my-5">
            <div className="dark:border-solid dark:border-[#a89bfc] mt-4 h-full flex border focus:border-[#a952e4] border-[#b9b9b9] rounded-full px-4">
              <img src={searchIcon} alt="" className="w-5 h-5 my-auto"/>
              <input
                type="text"
                placeholder="Search..."
                required
                className="dark:bg-gray-800 dark:text-white outline-none font-medium ml-1 px-2 text-[16px] w-full h-full"
              />
            </div>
          </div>
          {/* <ProfileTabs defaultTab={activeTab} onTabChange={setActiveTab} /> */}
          <ProfileGallery items={galleryItems} />
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
