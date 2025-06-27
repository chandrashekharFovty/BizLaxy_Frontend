import React from 'react'

interface InvesterProfileProps {
  username: string;
  fullName: string;
  bio: string;
  website: string;
  postsCount: string | number;
  followersCount: string | number;
  followingCount: string | number;
  profileImage: string;
  coverImage: string;
}
 const highlightsData = [
  { id: 1, title: "Business", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 2, title: "Travel", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 3, title: "Events", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 4, title: "Public", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 5, title: "Add", HighlightImg: "/AddHilights.png" },
];

const InvesterProfile: React.FC<InvesterProfileProps> = ({
  username,
  fullName,
  bio,
  website,
  postsCount,
  followersCount,
  followingCount,
  profileImage,
  coverImage,
}) => {
  return (
     <>
      <div className="dark:bg-gray-800 dark:text-white flex items-center w-[227px] h-[42px] gap-2 text-2xl text-[#050505] font-bold whitespace-nowrap tracking-[-0.24px] ml-[27px] mt-2 max-md:ml-2.5 z-10">
        <div className="text-[#050505] self-stretch gap-2 my-auto w-[167px] font-bold">
          {username}✅
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7eb8167ebc03b067106013d277e8da366e8ec872?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[42px] h-[42px] self-stretch shrink-0 my-auto"
        />
      </div>
      <img
        src={coverImage}
        className=""
      />
      <div className="z-10 flex mt-[-68px] w-full flex-col items-stretch pl-[30px] pr-0.5 max-md:max-w-full max-md:pl-5">
        <div className="flex w-full max-w-[1208px] items-stretch gap-[40px_100px] flex-wrap mr-7 max-md:max-w-full max-md:mr-2.5">
          <div className="grow shrink basis-auto max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-full max-w-[10rem] max-md:w-full max-md:ml-0 rounded-xl">
                <img
                  src={profileImage}
                  className="aspect-[1/1] object-contain w-[168px] shadow-[0px_1px_4px_2px_rgba(0,0,0,0.25)] shrink-0 max-w-full max-md:mt-10 rounded-xl"
                />
              </div>
              <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex items-center gap-[18px] text-[#050505] whitespace-nowrap mt-[88px] max-md:mt-10">
                  <div className="self-stretch flex flex-col items-center justify-center w-[61px] my-auto">
                    <div className="text-[#050505] text-[26px] font-medium tracking-[-0.26px]">
                      {postsCount}
                    </div>
                    <div className="text-[#050505] text-base font-normal tracking-[-0.16px]">
                      Post
                    </div>
                  </div>
                  <div className="self-stretch w-0 shrink-0 h-[38px] my-auto border-[rgba(178,178,178,1)] border-solid border" />
                  <div className="self-stretch flex flex-col items-center justify-center w-[61px] my-auto">
                    <div className="text-[#050505] text-[26px] font-medium tracking-[-0.26px]">
                      {followersCount}
                    </div>
                    <div className="text-[#050505] text-base font-normal tracking-[-0.16px]">
                      Followers
                    </div>
                  </div>
                  <div className="self-stretch w-0 shrink-0 h-[38px] my-auto border-[rgba(178,178,178,1)] border-solid border" />
                  <div className="self-stretch flex flex-col items-center justify-center w-[62px] my-auto">
                    <div className="text-[#050505] text-center text-[26px] font-medium tracking-[-0.26px]">
                      {followingCount}
                    </div>
                    <div className="text-[#050505] text-base font-normal tracking-[-0.16px]">
                      Following
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-base text-[#050505] font-medium text-center tracking-[-0.16px] mt-[97px] max-md:max-w-full max-md:mt-10">
             <button className="text-[#ffff] self-stretch border border-[color:var(--Btn-grdt,#1C4BC4)] bg-blue-700 gap-2.5 whitespace-nowrap my-auto px-8 py-2.5 rounded-[8px] border-solid max-md:px-5">
              Fllow
            </button>
            <button className="text-[#050505] self-stretch border border-[color:var(--Btn-grdt,#1C4BC4)] bg-[color:var(--Btn-grdt,#f1e9ff)] gap-2.5 whitespace-nowrap my-auto px-8 py-2.5 rounded-[8px] border-solid max-md:px-5">
              Pitch
            </button>
            <button className="text-[#050505] self-stretch border border-[color:var(--Btn-grdt,#1C4BC4)] bg-[color:var(--Btn-grdt,#f1e9ff)] gap-2.5 whitespace-nowrap my-auto px-8 py-2.5 rounded-[8px] border-solid max-md:px-5">
              Info
            </button>
          </div>
        </div>
        <div className="text-base text-[#050505] font-normal tracking-[-0.16px] mt-5 max-md:max-w-full">
          <div className="text-[#050505] w-[175px] max-w-full text-[22px] font-bold tracking-[-0.22px] rounded-[0px_0px_0px_0px]">
            {fullName}
          </div>
          <div className="text-[#050505] mt-1.5 max-md:max-w-full font-semibold">
            {bio}
          </div>
          <a href={website} className="text-[#1C4BC4] mt-1.5 block font-medium">
            {website}
          </a>
        </div>
        <div className="flex w-[390px] max-w-full items-center gap-5 text-sm text-[#050505] font-normal whitespace-nowrap text-center tracking-[-0.14px] mt-[19px]">
          {highlightsData.map((item) => (
            <div
              key={item.id}
              className="self-stretch flex flex-col items-center w-[82px] my-auto"
            >
              <img
                src={item.HighlightImg}
                alt={item.title}
                className="aspect-[1] object-contain w-[83px]"
              />
              <div className="text-[#050505] mt-1">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default InvesterProfile
