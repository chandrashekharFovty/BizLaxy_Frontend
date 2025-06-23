import React from "react";
import { Link } from "react-router-dom";
import awarness from "../../../public/awarness.png";
import enagage from  "../../../public/engagements.png";
import appInstall from  "../../../public/AppInstall.png";
import salesEcom from  "../../../public/salesE-com.png";
import conversans from  "../../../public/conversions.png";
import traffic from  "../../../public/traffic.png";
import views from "../../../public/views.png";
import leadGen from  "../../../public/leadGen.png";
import Sidebar from "../layout/Sidebar";

const campaignOptions = [
  {
    title: "Awareness",
    subtitle: "Reach More People With Your Post",
    icon: <img src={awarness} alt="" />,
  },
  {
    title: "Engagement",
    subtitle: "Increase Social Engagements And Page Followers",
    icon: <img src={enagage} alt="" />,
  },
  {
    title: "Lead Generation",
    subtitle: "Collect Leads Through Instant Forms Or Contact Prompts",
    icon: <img src={leadGen} alt="" />,
  },
  {
    title: "App Installs",
    subtitle: "Promote And Drive Downloads For Your Mobile Application",
    icon: <img src={appInstall} alt="" />,
  },
  {
    title: "Traffic",
    subtitle: "Reach More People With Your Post",
    icon: <img src={traffic} alt="" />,
  },
  {
    title: "Conversions",
    subtitle: "Reach More People With Your Post",
    icon: <img src={conversans} alt="" />,
  },
  {
    title: "Video Views",
    subtitle: "Boost Views On Video Content To Increase Brand Visibility",
    icon: <img src={views} alt="" />,
  },
  {
    title: "Sales / E-Commerce",
    subtitle: "Drive Product Sales Via Your Online Store Or Platform",
    icon: <img src={salesEcom} alt="" />,
  },
];

const addsClickhandler = (path : string) => {
    `${location.pathname.startsWith(path) ? "text-blue-800 font-bold" : "font-normal text-[16px]"}`;

}

const CreateAddOptions = () => {
  return (
    <div>
      <div><Sidebar/></div>
      <div className="p-6 bg-gray-50 min-h-screen ml-[235px]">
        <Link to="/adds" className="text-sm text-blue-600 mb-4 inline-block">
          &lt; Back to Dashboard
        </Link>

        <div className="max-w-[1205px] h-[588px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {campaignOptions.map((item, idx) => (
            <div
              key={idx}
              className="w-[273px] h-[284px] bg-white rounded-xl border hover:shadow-md pl-14 -pr-4 cursor-pointer transition-all"
            >
              <div className="w-full text-center">
                <div className="w-[147px] h-[125px]">
                  {item.icon}
                  <div />
                  <h4 className="w-full font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="w-full text-sm text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateAddOptions;
