import React, { useState } from "react";
import ProfileGallery from "@/components/profile/ProfileGallery";
import Sidebar from "@/components/layout/Sidebar";
import { SearchInput } from "@/components/ui/SearchInput";
import { Heart } from "lucide-react";
import { BiComment } from "react-icons/bi";

const ExplorePage: React.FC = () => {
  // Sample gallery items
  // Sample gallery items
  const postgalleryItems = [
    {
      id: "1",
      comments: 10,
      likes: 20,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c286384ab9a94f6ae63dddaf2109347578dc9fa7?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "2",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/215def76e11b54522b5f2ccb29cfa4f5dc529575?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "3",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "4",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/96687f4430bb048dcaed31fd494fd3f319acc078?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "5",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "6",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "7",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "8",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "9",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "10",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "11",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
    },
    {
      comments: 10,
      likes: 20,
      id: "12",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
    },
  ];

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      <div className="dark:bg-gray-800 dark:text-white flex top-0 left-0 w-full h-full z-10">
        <Sidebar />
        <div className="dark:bg-gray-800 dark:text-white ml-[244px] z-0 mr-3 scrollbar-hide">
          <div className="dark:bg-gray-800 dark:text-white m-6">
            <SearchInput />
            <div className="mt-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {postgalleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative w-full aspect-square overflow-hidden"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                    {hoveredId === item.id && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4">
                        <div className="flex items-center text-white gap-1">
                          <Heart className="w-6 h-6" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center text-white gap-1">
                          <BiComment className="w-6 h-6" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <ProfileGallery items={postgalleryItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
