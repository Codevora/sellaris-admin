"use client"

import { FaGear } from "react-icons/fa6";
import {FaBell} from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import React, {useState} from "react";

const Nav: React.FC = () => {
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

 const toggleDropdown = (dropdown: string) => {
  setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
 };

 return (
  <nav className="flex gap-4 items-center">
   <div
    onClick={() => toggleDropdown("profile")}
    className="flex gap-4 items-center">
    <div className="relative">
     <button className="flex items-center focus:outline-none">
      <h1 className="text-white">Nama Admin</h1>
     </button>
    </div>

    <div className="relative">
     <button
      onClick={() => toggleDropdown("profile")}
      className="flex items-center focus:outline-none border rounded-full bg-white p-4"></button>
     {activeDropdown === "profile" && (
      <div className="absolute right-0 mt-[29px] w-48 border border-primary text-black bg-white shadow-lg rounded-md">
       <ul>
        <li className="p-2 flex justify-between items-center hover:bg-gray-200 cursor-pointer  rounded-t-md border-primary">
         Settings <FaGear className="fill-primary" />
        </li>
        <li className="p-2 flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded-b-md border-primary">
         Logout <IoLogOut className="fill-primary" />
        </li>
       </ul>
      </div>
     )}
    </div>
   </div>

   <div className="relative">
    <button
     onClick={() => toggleDropdown("notification")}
     className="focus:outline-none">
     <FaBell className="text-xl fill-white mt-[5px]"/>
    </button>
    {activeDropdown === "notification" && (
     <div className="absolute right-0 mt-[30px] border border-primary w-[400px] bg-white text-black rounded-md shadow-lg pt-4">
      <h1 className="p-2 text-2xl font-semibold text-primary">
       PESAN NOTIFIKASI
      </h1>
      <ul>
       <li className="p-2 py-4 hover:bg-gray-200 border cursor-pointer">
        New message from Jese Leos
       </li>
       <li className="p-2 py-4 hover:bg-gray-200 border cursor-pointer">
        Joseph Mcfall started following you
       </li>
       <li className="p-2 py-4 hover:bg-gray-200 border rounded-b-md cursor-pointer">
        Bonnie Green loved your story
       </li>
      </ul>
     </div>
    )}
   </div>
  </nav>
 );
};

export default Nav;
