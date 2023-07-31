import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../../index.css";

const Navbar = () => {
  return (
    <div className=" bg-white flex items-center justify-between shadow-lg px-6 py-2">
      <div className="relative w-max flex items-center justify-between">
        <input
          type="text"
          className="bg-neutral-200 w-52 h-5 outline-none ml-[60px] 
                rounded-full placeholder:text-[auto] pl-4 py-4 font-normal"
          placeholder="Cari apa ?"
        />
        <div className="absolute right-0 bg-[#60a5fa] py-2 px-[15px] flex items-center justify-center cursor-pointer rounded-[50px]">
          <FiSearch />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <BsBell />
        <BsChatLeft />
        <div className="relative group flex flex-col gap-5 h-max w-max">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-5 w-max border"></div>
            <RiArrowDropDownLine className="hover:bg-slate-400 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
