import React, { useEffect, useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { FollowButton } from "../ui/FollowButton";
import { CountBadge } from "../ui/CountBadge";
import { SavePostBadge } from "../ui/SavePostBadge";
import PostPopover, { PostModal } from "./PostPopover";

const images = [
  "/poster03.png",
  "/poster01.png",
  "/poster02.png",
];

interface PostProps {
  user: {
    name: string;
    avatar: string;
    timeAgo: string;
  };
  content: {
    title: string;
    titleLimit: number;
    description: string;
    descpLimit: number;
    isFileImage?: string;
    isFileVideo?: string;
    isFileDocument?: string;
  };
  engagement: {
    likes: string;
    comments: string;
    shares: string;
  };
  showFollowButton?: boolean;
  showMoreOptions?: boolean;
  isLiked?: boolean;
  showOfficialIcon?: boolean;
  isMediaContent?: boolean;
  onclose: () => void;
}

export function Post({
  user,
  content,
  engagement,
  showFollowButton = false,
  showMoreOptions = false,
  showOfficialIcon = false,
  isMediaContent = false,
  onclose,
}: PostProps) {
  // const [showFullTitle, setShowFullTitle] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => setIsFollowing(!isFollowing);

  // const truncatedTitle =
  //   content.title.length > content.titleLimit
  //     ? content.title.slice(0, content.titleLimit) + "..."
  //     : content.title;

  const truncatedDescription =
    content.description.length > content.descpLimit
      ? content.description.slice(0, content.descpLimit)
      : content.description;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="dark:border-white dark:border dark:border-gradient dark:from-white dark:to-black dark:glass-bg-dark dark:bg-gray-800 dark:text-white bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.3)] p-5 rounded-xl w-full relative z-10">
      <div className=" flex w-full justify-between py-[7px]">
        <div className="flex gap-2">
          <UserAvatar src={user.avatar} />
          <div className="flex flex-col gap-0">
            <div className="flex items-center gap-2">
              <span className="dark:text-white text-[#141414] text-base font-medium">{user.name}</span>
              {showMoreOptions && (
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/9e55e48d50c24f504973bb6ca3fab7e2ea80bba0?placeholderIfAbsent=true"
                  className="w-5"
                />
              )}
              {showOfficialIcon && (
                <img src="/OfficialIcon.png" className="w-3 h-3" />
              )}
              {showFollowButton && (
                <FollowButton isFollowing={isFollowing} onClick={handleFollowToggle} />
              )}
            </div>
            <span className="text-[#707070] dark:text-gray-300 text-xs mt-[-5px]">{user.timeAgo}</span>
          </div>
        </div>

        <div className=" absolute top-4 right-4 z-10">
          <PostModal />
        </div>
      </div>

      <div className=" text-sm text-[#050505] mt-2.5 w-full">
        <div className="w-[660px] h-auto overflow-hidden">
          <div className="dark:text-white font-semibold text-[#050505]">
            {content.title}
          </div>

          <div className="dark:text-white text-[#464646] font-normal mt-2">
            {showFullDescription ? content.description : truncatedDescription}
            {content.description.length > content.descpLimit && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-blue-400 text-[12px] ml-1 hover:underline"
              >
                {showFullDescription ? "..." : "..."}
              </button>
            )}
          </div>

          {isMediaContent && (
            <div className="relative mt-5 border w-[650px] h-[692px] overflow-hidden rounded-2xl">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[650px] object-cover"
              />

              <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-transparent text-xl text-[#BABABA] border rounded-full">
                &lt;
              </button>
              <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-transparent text-xl text-[#BABABA] border rounded-full">
                &gt;
              </button>

              <div className="flex justify-center py-4 gap-2">
                {images.map((_, index) => (
                  <hr
                    key={index}
                    className={`h-2.5 w-2.5 border cursor-pointer rounded-full ${
                      currentIndex === index ? "bg-blue-800" : "bg-[#BABABA]"
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" flex w-full justify-between text-xs text-[#050505] font-medium mt-3">
        <div className=" flex items-center gap-2.5 cursor-pointer">
          <CountBadge count={engagement.likes} type="like" />
          <CountBadge count={engagement.comments} type="comment" />
          <CountBadge count={engagement.shares} type="share" />
        </div>
     <div className="cursor-pointer flex gap-5">
  {/* <SavePostBadge type="document" /> */}
  <SavePostBadge type="savePost" />
</div>

      </div>
    </div>
  );
}
