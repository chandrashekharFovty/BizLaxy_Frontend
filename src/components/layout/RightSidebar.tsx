import React, { useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { FollowButton } from "../ui/FollowButton";
import { SearchIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

type User = { username: string; avatar: string };
// const searchables: User[] = [
//   /* your users */
// ];

export function RightSidebar() {
  const searchables = [
    {
      username: "MayaCreates",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7345a8532057b754287bb824f71612da4b4c4ae8?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "JadenLearns",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ed958142a456b9ce0f762c8bc0124207bf905fe4?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "SophieInvests",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/99fe2150dc124eb86d639f275ffc619b429aea39?placeholderIfAbsent=true",
      followsYou: true,
    },
    {
      username: "Riya.Builds",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6fa4bd40ca41e8fe266dc19430980767ca123b8c?placeholderIfAbsent=true",
      followsYou: true,
    },
  ];
  const suggestions = [
    {
      username: "AlexVentureX",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/919c5bbbf5f5e1e77a95971dd94c4d8d3126d1a0?placeholderIfAbsent=true",
      followsYou: true,
    },
    {
      username: "MayaCreates",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7345a8532057b754287bb824f71612da4b4c4ae8?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "JadenLearns",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ed958142a456b9ce0f762c8bc0124207bf905fe4?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "SophieInvests",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/99fe2150dc124eb86d639f275ffc619b429aea39?placeholderIfAbsent=true",
      followsYou: true,
    },
    // {
    //   username: "Riya.Builds",
    //   avatar: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6fa4bd40ca41e8fe266dc19430980767ca123b8c?placeholderIfAbsent=true",
    //   followsYou: true,
    // },
  ];

  const recommended = [
    {
      name: "NebuloTech",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
      name: "Aarav Mehta",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
    {
      name: "NebuloTech",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
      name: "Aarav Mehta",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
    {
      name: "NebuloTech",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
      name: "Aarav Mehta",
      role: "Investor",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
  ];

  // const footerLinks = [
  //   "About",
  //   "Help",
  //   "Press",
  //   "API",
  //   "Jobs",
  //   "Privacy",
  //   "Terms",
  //   "Locations",
  //   "Language",
  //   "Meta Verified",
  // ];

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = query
    ? searchables.filter((u) =>
        u.username.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => setIsFollowing(!isFollowing);

  return (
    <>
      <div className=" bg-white fixed overflow-hidden flex w-[370px] h-[982px] flex-col items-stretch border-[rgb(28, 75, 196, 100)] border-l">
        <div className="dark:bg-gray-800 overflow-hidden dark:text-white fixed w-[370px] h-screen scrollbar-hide bg-white flex flex-col items-stretch px-3">
          <div
            style={{ position: "relative", width: 300 }}
            className="mt-8 dark:bg-gray-800 dark:text-white grid w-[370px] h-[40px] cursor-default grid-cols-1 bg-white text-left rounded-3xl border-[2px] border-solid border-[#a89bfc] font-normal outline-white focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <div className="flex flex-row items-center">
              <SearchIcon className="text-gray-400 ml-2 w-5 h-5" />
              <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                className="w-[95%] h-full bg-transparent outline-none"
              />
            </div>
            {filtered.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: 38,
                  left: 0,
                  right: 0,
               
                  listStyle: "none",
                  margin: 0,
                  marginTop: 5,
                
                  maxHeight: 200,
                  overflowY: "auto",
                  zIndex: 10,
                }}
                className="dark:bg-gray-800 py-1 dark:text-white bg-white text-black border border-[#a89bfc] rounded-xl shadow-lg"
              >
                {filtered.map((user) => (
                  <li
                    key={user.username}
                    onClick={() => {
                      navigate(`/profile/${user.username}`);
                      setQuery("");
                    }}
                    style={{
                      display: "flex",
                      flexDirection:"row",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  className="dark:bg-gray-800 dark:text-white gap-3 px-6 py-1"
                  >
                    <div className="">
                    <img
                      src={user.avatar}
                      alt=""
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        marginRight: 0,
                      }}
                    />
                </div>
                    <div className="overflow-hidden flex flex-col gap-1 justify-center text-sm text-left font-normal leading-none">
                    {user.username}
                    <p className="text-gray-400 text-[10px]">{user.followsYou
                            ? "Follows you"
                            : `Followed by ${user.followedBy}`}</p>
                          
                        </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-stretch whitespace-nowrap w-[370px] h-[56px]  mt-8">
            <div className="w-full h-full flex items-center text-sm text-[rgba(5,5,5,1)] font-bold tracking-[-0.14px] grow shrink basis-auto">
              <Link to="/profile">
                <div className="w-[56px] h-[56px] cursor-pointer border rounded-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8e190579b007ca56ec01ed9bd9da85e43500ed52?placeholderIfAbsent=true"
                    className="object-cover w-[56px] h-[56px] rounded-full"
                  />
                </div>
              </Link>
              <div className="w-[260px] flex justify-between my-auto">
                <div className="flex w-[190px] items-center overflow-hidden pl-2">
                  <div className="dark:text-white self-stretch font-semibold text-sm overflow-hidden my-auto">
                    mike_invests
                  </div>
                </div>
                <div className="text-[#1C4BC4] text-center text-[11px] font-semibold leading-none my-auto">
                  {/* Switch */}
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-gray-800 dark:text-white bg-white w-[370px] h-[289px] mt-4 max-md:ml-[5px] ">
            <div className=" dark:text-white flex items-center w-[320px] h-[18px] justify-between">
              <div className="dark:text-white text-[#050505] text-base font-bold">
                Suggestions for you
              </div>
              {/* <div className="text-[#1C4BC4] text-sm font-medium">See All</div> */}
            </div>

            <div className="flex w-full overflow-hidden mt-[9px]">
              <div className="w-[320px] h-[250px] py-2">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={`flex w-[320px] h-[44px] items-stretch gap-[8px] 
                  ${index > 0 ? "mt-4" : ""}`}
                  >
                    <img
                      src={suggestion.avatar}
                      className="object-contain w-[37px] shrink-0 my-auto"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="flex flex-col items-stretch">
                        <div className="dark:text-white text-neutral-800 text-sm font-semibold leading-none w-[110px]">
                          {suggestion.username}
                        </div>
                        <div className="overflow-hidden py-2 text-left text-[11px] text-gray-400 font-normal leading-none">
                          {suggestion.followsYou
                            ? "Follows you"
                            : `Followed by ${suggestion.followedBy}`}
                        </div>
                      </div>
                      <div className="dark:text-blue-500 text-[#1C4BC4] text-center cursor-pointer text-xs font-medium leading-none my-auto">
                        <FollowButton/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[320px] h-[231px] mt-4 max-md:mx-[5px]">
            <div className="dark:bg-gray-800 flex w-full h-[25px] items-center justify-between">
              <div className=" dark:text-white  text-[#050505] text-lg font-bold self-stretch">
                Recommended for You
              </div>
              <div className="text-[#1C4BC4] text-sm font-medium self-stretch ">
                {/* See all */}
              </div>
            </div>

            <div className=" flex w-full max-h-[190px] items-stretch gap-3 overflow-x-auto overflow-y-auto scrollbar-hide mt-4">
              {recommended.map((profile, index) => (
                <div
                  key={index}
                  className="dark:bg-gray-800 bg-white shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] border flex flex-col flex-1 w-[135px] h-[184px] px-3 py-2  rounded-[10px] border-[rgba(220,220,220,1)] border-solid"
                >
                  <div className="flex gap-4 ml-3 max-md:ml-2.5">
                    <a href="/profile" className="cursor-pointer text-white">
                    <UserAvatar
                      src={profile.avatar}
                      size="lg"
                      className="mt-[7px]"
                    />
                    </a>
                    <img
                      src={
                        index === 0
                          ? "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8a2332c653c73f0169c289d1385c98d7c25b92cb?placeholderIfAbsent=true"
                          : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/42e5a7b14ba5994bef7d3db2325aba7edc120ad7?placeholderIfAbsent=true"
                      }
                      className="aspect-[1] object-contain w-2 h-2 shrink-0"
                    />
                  </div>
                  <div className="flex min-h-[35px] flex-col items-center whitespace-nowrap text-center justify-center mt-1.5">
                    <div className="dark:text-white text-[#050505] text-[13px] font-medium">
                      {profile.name}
                    </div>
                    <div className="dark:text-gray-300 text-[#707070] text-[10px] font-normal">
                      {profile.role}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r cursor-pointer from-[#1C4BC4] to-[#8963b9] text-white self-stretch min-h-7 w-[114px] h-[27px] mt-[4px] text-center rounded-[5px] ">
                    <FollowButton/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[-25px] text-[11px] text-[rgba(199,199,199,1)] font-normal mt-3 pb-[39px] max-md:mb-2.5 max-md:mx-[5px]">
            <div className="text-[11px] leading-none uppercase mt-5">
              all rights reserved © 2025 BIZLAXY
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
