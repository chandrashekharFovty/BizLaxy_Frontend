import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';

import pitch from '../../public/pitch.png';
import pitch1 from '../../public/Aprean.png';
import pitch2 from '../../public/pitch.png';

import likeIcon from '../../public/thunmlike.png';
import commentIcon from '../../public/comment.png';
import shareIcon from '../../public/share.png';
import elipseIcon from '../../public/Ellipse 3.png';
import icon_pitch from '../../public/icon_pitch.png';

// Step 1: Media + Pitch Info
const pitchMedia = [
  {
    id: 1,
    type: 'image',
    src: pitch,
    // user: 'User 1',
    title: '₹60 lakh for 1% equity',
    description:
      '⚡ Introducing Neoseland Pro, the future of smart kitchen appliances, building something innovative, scalable, and ready to disrupt! With a solid business plan and a clear vision, we’re seeking 1% equity at a valuation of 60 crore. If you\'re an investor looking for a big opportunity, let\'s connect!',
  },
  {
    id: 2,
    type: 'image',
    src: pitch1,
    // user: 'User 2',
    title: '₹30 lakh for 5% equity',
    description:
      '🚀 Meet AquaBot – a compact, AI-powered home-cleaning robot revolutionizing floor care. Seeking visionary investors for expansion!',
  },
  {
    id: 3,
    type: 'youtube',
    src: 'https://www.youtube.com/embed/NVTVLjymTuk',
    // user: 'User 3',
    title: '₹80 lakh for 2% equity',
    description:
       '⚡ Introducing Neoseland Pro, the future of smart kitchen appliances, building something innovative, scalable, and ready to disrupt! With a solid business plan and a clear vision, we’re seeking 1% equity at a valuation of 60 crore. If you\'re an investor looking for a big opportunity, let\'s connect!',
   },
  {
    id: 4,
    type: 'image',
    src: pitch2,
    // user: 'User 4',
    title: '₹50 lakh for 10% equity',
    description:
      '🌿 Introducing PlantSync, an IoT-powered smart gardening solution for modern homes. Let’s grow together!',
  },
];

// Step 2: Reusable ActionIcon Component
const ActionIcon = ({
  icon,
  count,
  label,
  size = 'w-4 h-4',
}: {
  icon: string;
  count: string;
  label: string;
  size?: string;
}) => (
  <div className="group flex flex-col items-center cursor-pointer relative">
    <div className="p-1 bg-black/50 rounded-full group-hover:scale-110 transition-transform">
      <img src={icon} className={size} alt={label} />
    </div>
    <p className="text-[10px] mt-1">{count}</p>
    <div className="absolute bottom-[110%] mb-1 text-[10px] text-white bg-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
      {label}
    </div>
  </div>
);

// Step 3: Main Pitch Component
const Pitch = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-[245px] h-full z-50 bg-[#0f001a]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className=" dark:bg-gray-800 dark:text-white flex-1 ml-[245px] mr-[350px] overflow-y-auto scrollbar-hide py-6 px-4 space-y-6">
        {pitchMedia.map((media, index) => (
          <div
            key={media.id}
            className="relative w-[350px] h-[610px] bg-black rounded-[22px] text-white shadow-lg overflow-hidden mx-auto"
          >
            {/* Render Media */}
            {media.type === 'image' && (
              <img
                src={media.src}
                alt={`Pitch ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
              />
            )}
            {media.type === 'youtube' && (
              <iframe
                src={media.src}
                title={`Pitch video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full z-0"
              ></iframe>
            )}

            {/* Top Label */}
            <div className="absolute top-4 left-4 z-20 flex items-center text-lg font-semibold">
              {/* {media.user} &nbsp;|&nbsp; Pitch */}
              Pitch
              <img
                src={icon_pitch}
                alt="icon"
                className="w-4 h-4 ml-[250px] mt-1 border border-white"
              />
            </div>

            {/* Action Icons */}
            <div className="absolute top-[450px] right-4 transform -translate-y-1/2 z-20 flex flex-col items-center space-y-3">
              <ActionIcon icon={likeIcon} count="5k" label="Like" />
              <ActionIcon icon={commentIcon} count="120" label="Comment" />
              <ActionIcon icon={shareIcon} count="60" label="Share" />
              <div className="flex gap-1 cursor-pointer">
                {[...Array(3)].map((_, i) => (
                  <img key={i} src={elipseIcon} className=" opacity-80" alt={`dot-${i}`} />
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h3 className="text-sm w-[300px] ml-2 font-bold mb-2">{media.title}</h3>
           <p className="text-xs text-gray-300 w-[280px] h-[100px] ml-2 mb-2 scrollbar-hide overflow-auto">
  {media.description}
</p>

              <hr className="border-gray-400" />
              <button className="w-full bg-[#3e3f40] py-2 rounded-md text-sm">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 w-[350px] h-full z-50 bg-white">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Pitch;
