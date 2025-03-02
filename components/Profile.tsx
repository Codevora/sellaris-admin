"use client";

import {IoLogOut} from "react-icons/io5";
import {FaGear} from "react-icons/fa6";
import {FaCaretDown} from "react-icons/fa";

import {useState} from "react";

const Profile = () => {
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

 const toggleDropdown = (dropdown: string) => {
  setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
 };

 return (
  <div className="flex items-end w-[200px]">
   <div
    onClick={() => toggleDropdown("profile")}
    className="flex gap-3 p-2 items-center cursor-pointer justify-between bg-primary w-full">
    <div className="flex gap-3 items-center">
     <button className="flex items-center focus:outline-none border rounded-full bg-white p-4"></button>
     <h1 className="text-white font-semibold">John Doe</h1>
     {activeDropdown === "profile" && (
      <div className="absolute right-0 mr-[13px] mt-[155px] w-[230px] border border-primary text-black bg-white shadow-lg rounded-md">
       <ul>
        <li className="p-2 flex justify-between items-center hover:bg-gray-200 cursor-pointer  rounded-t-md border-primary border-b">
         Settings <FaGear className="fill-primary" />
        </li>
        <li className="p-2 flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded-b-md border-primary">
         Logout <IoLogOut className="fill-primary" />
        </li>
       </ul>
      </div>
     )}
    </div>
    <FaCaretDown className="fill-white" />
   </div>
  </div>
 );
};

export default Profile;
