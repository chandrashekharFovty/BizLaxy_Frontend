import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaUsers, FaRupeeSign, FaClock } from "react-icons/fa";
import smallArrow from  "../../../public/arrowBtn.png"
import userGroup from  "../../../public/userGroup.png"
import handRupee from "../../../public/HandRupee.png"
import rupeeBag from  "../../../public/RupeeBag.png"
import growRate from  "../../../public/growRate.png"
import { Link } from "react-router-dom";



const data = [
  { name: "Mon", clicks: 400 },
  { name: "Tue", clicks: 600 },
  { name: "Wed", clicks: 1020 },
  { name: "Thu", clicks: 800 },
  { name: "Fri", clicks: 900 },
  { name: "Sat", clicks: 750 },
  { name: "Sun", clicks: 680 },
];

const Dashboard = () => {
  return (
    <div className="dark:bg-gray-800 p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="w-[220px] h-[48px] flex justify-between items-center">
        <button className="bg-blue-600 w-[199px] text-white flex justify-between items-center px-5 py-2 rounded-full text-sm font-medium">
         <Link to="/createaddoptions" className="flex items-center gap-3">Create New Add <span><img src={smallArrow} alt="" className="w-3 h-3 -rotate-90"/></span></Link></button>
        
      </div>

      {/* KPIs */} 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Customers",
            value: "1,456",
            change: "+6.5%",
            changeColor: "text-green-500",
            img: <img src={userGroup} alt="" className="w-8 h-8"/>,
          },
          {
            title: "Revenue",
            value: "₹279,307.50",
            change: "-0.10%",
            changeColor: "text-red-500",
            img: <img src={handRupee} alt="" className="w-8 h-8"/>,
          },
          {
            title: "Profit",
            value: "60%",
            change: "-0.2%",
            changeColor: "text-red-500",
            img: <img src={rupeeBag} alt="" className="w-8 h-8"/>,
          },
        ].map((card, i) => (
            <div className="w-[369px] h-[159px] bg-white p-4 rounded-xl shadow">
          <div key={i} className="w-[339px] h-[120px]">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm text-gray-600">{card.title}</h4>
              <span className="w-[70px] h-[70px] bg-gray-100 p-5 rounded-full">{card.img}</span>
            </div>
            <h2 className="text-2xl font-bold">{card.value}</h2>
            <p className={`text-xs mt-1 ${card.changeColor}`}>
              {card.change} Since last week
            </p>
          </div>
          </div>
        ))}
      </div>

      {/* Table & Chart */}
      <div className="flex gap-3">
        {/* Table */}
        <div className="w-[788px] h-[440px] bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between mb-3">
            <h4 className="text-sm font-semibold">Running Ads</h4>
            <button className="text-blue-600 text-sm">See all</button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="pb-2">Name</th>
                <th>Status</th>
                <th>Clicks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 h-[308px]">
              {[
                ["Summer Sale", "Active", 1234, "₹41,750"],
                ["Product Launch", "Active", 985, "₹68,800"],
                ["Summer Sale", "Inactive", 1102, "₹100,200"],
                ["Summer Sale", "Active", 1234, "₹41,750"],
                ["Summer Sale", "Pending", 1234, "₹41,750"],
                ["Summer Sale", "Active", 1234, "₹41,750"],
              ].map(([name, status, clicks, budget], i) => (
                <tr key={i} className="border-t h-[47px]">
                  <td className="py-2">{name}</td>
                  <td>
                    <span
                      className={`w-[84px] h-[37px] px-4 py-2 text-xs rounded-full font-semibold ${
                        status === "Active"
                          ? "bg-green-100 text-green-600"
                          : status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>{clicks}</td>
                  <td>{budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="w-[379px] h-[440px]bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between mb-3">
            <h4 className="text-[18px] font-semibold tracking-[1px]">Sales Performance</h4>
            <button className="text-blue-600 text-[14px]">See all</button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" className="bg-[#BED6FF]"/>
              <Tooltip/>
              <Bar dataKey="clicks" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-500 flex gap-3 font-medium">
           <img src={growRate} alt="" className="w-7 h-6"/> <span className="text-black font-bold text-[28px]">30%</span> better than last month
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default Dashboard;
