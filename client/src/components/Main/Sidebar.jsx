import React from "react";
import { RxDashboard } from "react-icons/rx";
import { LuBook } from "react-icons/lu";
import { PiMedalLight } from "react-icons/pi";
import { BiTask } from "react-icons/bi";
import "../../index.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#60a5fa] h-screen fixed">
      <div className="px-[50px] py-10 flex items-center justify-center border-[#60a5fa]/[0.3]">
        <span class="text-blue-900 text-[24px] leading-[24px] font-sans font-bold cursor-pointer">
          e-learn
        </span>
        <span class="text-white text-[24px] leading-[24px] font-sans font-bold cursor-pointer">
          ing.
        </span>
      </div>
      <div className="container block">
        <Link to="/">
          <div className="flex px-4 my-2 p-2 hover:bg-gradient-to-r from-slate-200 cursor-pointer">
            <RxDashboard className="text-white font-bold text-md mt-1" />
            <p className="text-white mx-3 font-medium text-md">Dashboard</p>
          </div>
        </Link>
        <Link to="/courses">
          <div className="flex px-4 my-2 p-2 hover:bg-gradient-to-r from-slate-200 cursor-pointer">
            <LuBook className="text-white text-md mt-1" />
            <p className="text-white mx-3 font-medium text-md">My Course</p>
          </div>
        </Link>
        <Link to="/mygrades">
          <div className="flex px-4 my-2 p-2 hover:bg-gradient-to-r from-slate-200 cursor-pointer">
            <PiMedalLight className="text-white text-md mt-1" />
            <p className="text-white mx-3 font-medium text-md">My Grades</p>
          </div>
        </Link>
        <Link to="/presence">
          <div className="flex px-4 my-2 p-2 hover:bg-gradient-to-r from-slate-200 cursor-pointer">
            <BiTask className="text-white text-md mt-1" />
            <p className="text-white mx-3 font-medium text-md">Presence</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
