import React from "react";
import { Link } from "react-router-dom";

interface EditprofileProps {
  fullName: string;
  bio: string;
  website: string;
  profileImage: string;
  coverImage: string;
}
const path = "/profile";
const Editprofile: React.FC<EditprofileProps> = ({
  fullName,
  bio,
  website,
  profileImage,
  coverImage,
}) => {
  return (
    <>
      <div className="dark:bg-gray-800 dark:text-white w-full h-full flex">
        <div className="w-full h-full flex flex-col mt-[48px]">
          <div className="w-[800px] h-[246px] text-[#050505] font-bold whitespace-nowrap pb-3">
            <img
              src={coverImage}
              className="aspect-[4.52] object-center w-full h-[240px] max-md:max-w-[520px]"
            />
            <div className="relative -mt-56 w-[700px] h-[250px]">
              <Link to={`${import.meta.env.VITE_FRONTEND_URL}/profile`} type="button" className="w-[116px] px-2 h-[18px] flex font-semibold text-white -mt-12"
              > &lt;
                {/* //<img src={ArrowImg} alt="<" className="w-5 h-5" /> */}
                <span className="w-24 ml-0 items-start h-full pl-2 text-[#FFFFFF] font-normal">Back to Profile</span>
              </Link>
              <h1 className="w-[130px] h-[30px] mt-5 -tracking-tighter  font-bold text-xl pl-5 text-white">
                Edit Profile
              </h1>
              <div className="h-[34px] w-[148px] rounded-[6px] bg-[#948ab7] ml-[350px] mt-8 border border-transparent">
                <button className="text-[#FFFFFF] px-2 py-1 text-[14px]  h-[16px] w-full font-normal tracking-[1px]">
                  <label htmlFor="coverimage" className="cursor-pointer">Edit Cover Image</label>
                  <input type="file" name="coverimage" id="coverimage" className="hidden"/>
                </button>
              </div>
            </div>
          </div>
          <div className="dark:bg-gray-800 dark:text-white p-1 mt-0 my-0 ml-4">
            <form action="/" className="mx-auto mt-0">
              <div className="w-[798px] h-[90px] my-5">
                <label
                  htmlFor="name"
                  className="w-[168px] h-[21px] text-[14px] font-medium"
                >
                  Full Name
                </label>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Machel Robert"
                    required
                    className="outline-[#BED6FF] font-medium border border-[#BED6FF] rounded-xl px-4 text-[14px] w-full h-[60px] "
                  />
                </div>
              </div>
              <div className="w-[798px] h-[90px] my-5">
                <label
                  htmlFor="name"
                  className="w-[168px] h-[90px] text-[14px] font-medium"
                >
                  Username
                </label>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="mike_invests"
                    required
                    className="outline-[#BED6FF] font-medium border border-[#BED6FF] rounded-xl px-4 text-[14px] w-full h-[60px] "
                  />
                </div>
              </div>
              <div className="w-[798px] h-[90px] my-5">
                <label
                  htmlFor="name"
                  className="w-[168px] h-[21px] text-[14px] font-medium"
                >
                  Bio
                </label>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Passionate about funding innovative startups. Exploring new business opportunities."
                    required
                    className="outline-[#BED6FF] font-medium border border-[#BED6FF] rounded-xl px-4 text-[14px] w-full h-[60px] "
                  />
                </div>
              </div>
              <div className="w-[798px] h-[90px] my-5">
                <label
                  htmlFor="name"
                  className="w-[168px] h-[90px] text-[14px] font-medium"
                >
                  Phone Number
                </label>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="+91-12345-67890"
                    required
                    className="outline-[#BED6FF] font-medium border border-[#BED6FF] rounded-xl px-4 text-[14px] w-full h-[60px] "
                  />
                </div>
              </div>
              <div className="w-[798px] h-[90px] my-5">
                <label
                  htmlFor="name"
                  className="w-[168px] h-[21px] text-[14px] font-medium"
                >
                  Add link’s
                </label>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Add your links"
                    required
                    className="outline-[#BED6FF] font-medium border border-[#BED6FF] rounded-xl px-4 text-[14px] w-full h-[60px] "
                  />
                </div>
              </div>
              <div className="w-[798px] my-5 flex justify-end">
              <button type="submit" className="bg-blue-600 p-3 rounded-xl text-white text-lg font-medium cursor-pointer">Save Details</button>
            </div>
            </form>
          </div>
        </div>
        <div className=" w-[250px] h-[942px] z-10 flex flex-col items-center text-center justify-start pl-[30px] pr-0.5 max-md:max-w-full max-md:pl-5 border-solid border-l-2 border-[#f3f2fa]">
          <div className="flex w-full max-w-[1208px] mt-[68px] items-center justify-center gap-[40px_100px] flex-wrap mr-7 max-md:max-w-full max-md:mr-0.5">
            <div className="grow shrink basis-auto max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch justify-center items-center">
                <div className="w-full max-w-[10rem] max-md:w-full max-md:ml-0 flex justify-center items-center rounded-[80px]">
                  <img
                    src={profileImage}
                    className="aspect-[1/1] object-contain w-[168px] shadow-[0px_1px_4px_2px_rgba(0,0,0,0.25)] shrink-0 max-w-full max-md:mt-10 rounded-[80px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-base text-[#050505] font-normal tracking-[-0.16px] mt-5 max-md:max-w-full">
            <div className="text-[#050505] text-center w-[175px] max-w-full text-[22px]  font-bold tracking-[-0.22px] rounded-[0px_0px_0px_0px] ml-16">
              {fullName}
            </div>
            <div className="text-[#050505] mt-1.5 max-md:max-w-full font-semibold">
              {bio}
            </div>
            <a
              href={website}
              className="text-[#1C4BC4] mt-1.5 block font-medium"
            >
              {website}
            </a>
            <div className="flex items-center gap-2 text-base text-[#050505] font-medium text-center tracking-[-0.16px] mt-[27px] max-md:max-w-full max-md:mt-10">
              <button className="text-[#050505] self-stretch h-[46px] w-[120px] text-sm gap-2.5 my-auto px-5 py-2.5 rounded-xl hover:border-[color:var(--Btn-grdt,#1C4BC4)] hover:bg-[color:var(--Btn-grdt,#f1e9ff)] border bg-[rgba(239,239,239,1)] max-md:px-3">
                Edit Details
              </button>
              <button className="text-[#050505] self-stretch h-[46px] w-[150px] text-sm gap-2.5 my-auto px-2 py-2.5 rounded-xl hover:border-[color:var(--Btn-grdt,#1C4BC4)] hover:bg-[color:var(--Btn-grdt,#f1e9ff)] border bg-[rgba(239,239,239,1)] max-md:px-1">
                <label htmlFor="profileimage" className="cursor-pointer">Edit Profile Image</label>
                  <input type="file" name="profileimage" id="profileimage" className="hidden"/>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
