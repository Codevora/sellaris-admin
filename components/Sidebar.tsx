"use client";

import {FaGear} from "react-icons/fa6";
import {FaCaretDown} from "react-icons/fa";
import {IoLogOut} from "react-icons/io5";
import {FaStore} from "react-icons/fa";

import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";


const Report = {
 name: "REPORTS",
 items: [
  {
   name: "Sales",
   path: "/reports/sales",
  },
  {
   name: "Transaction",
   path: "/weekly",
  },
  {
   name: "Invoices",
   path: "/monthly",
  },
  {
   name: "Shift",
   path: "/monthly",
  },
 ],
};

const Money = {
 name: "FINANCIAL",
 items: [
  {
   name: "Revenue Analysis",
   path: "/analytics",
  },
  {
   name: "Employee Analysis",
   path: "/weekly",
  },
  {
   name: "Taxes",
   path: "/monthly",
  },
 ],
};

const Product = {
 name: "LIBRARY",
 items: [
  {
   name: "Product",
   path: "/daily",
  },
  {
   name: "Bundle Package",
   path: "/weekly",
  },
  {
   name: "Promo",
   path: "/promo",
  },
  {
   name: "Discount",
   path: "/discount",
  },
  {
   name: "Sales Type",
   path: "/sales-type",
  },
 ],
};

const Inventory = {
 name: "INVENTORY",
 items: [
  {
   name: "Ingredient Library",
   path: "/daily",
  },
  {
   name: "Ingredient Categories",
   path: "/weekly",
  },
  {
   name: "Recipes",
   path: "/promo",
  },
  {
   name: "Suppliers",
   path: "/discount",
  },
  {
   name: "Sales Type",
   path: "/sales-type",
  },
 ],
};

const Employee = {
 name: "EMPLOYEE",
 items: [
  {
   name: "Employee Access",
   path: "/daily",
  },
  {
   name: "PIN Access",
   path: "/weekly",
  },
 ],
};

const TableManagement = {
 name: "TABLE MANAGEMENT",
 items: [
  {
   name: "Table Group",
   path: "/daily",
  },
  {
   name: "Table Map",
   path: "/weekly",
  },
  {
   name: "Table Report",
   path: "/daily",
  },
 ],
};

const PaymentMethod = {
 name: "PAYMENT METHOD",
 items: [
  {
   name: "QRIS",
   path: "/daily",
  },
  {
   name: "Payment Configuration",
   path: "/weekly",
  },
 ],
};

const Sidebar: React.FC = () => {
 const pathname = usePathname();
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

 const toggleDropdown = (dropdown: string) => {
  setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
 };

 return (
  <div className="fixed flex flex-col justify-between h-screen lg:w-[240px] 2xl:w-[270px] bg-white border-r text-primary shadow-md">
   <div className="">
    <div className="py-4 px-4 bg-primary flex justify-center border-b border-secondary">
     <img
      src="Logos/1.png"
      alt=""
      className="lg:w-[130px] 2xl:w-[180px]"
     />
    </div>

    {/* Profile */}
    <div
     onClick={() => toggleDropdown("profile")}
     className="flex gap-3 lg:p-2 2xl:p-4 items-center cursor-pointer justify-between bg-primary">
     <div className="flex gap-3 items-center">
      <button className="flex items-center focus:outline-none border rounded-full bg-white p-4"></button>
      <h1 className="text-white font-semibold">John Doe</h1>
      {activeDropdown === "profile" && (
       <div className="absolute left-0 lg:ml-1 2xl:ml-0 mt-[155px] w-[230px] border border-primary text-black bg-white shadow-lg rounded-md">
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

    {/*item*/}
    <div className="overflow-y-auto h-screen">
     <div className="flex flex-col gap-1">
      <ul className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium">
       <Link href="/">
        <li className="text-[14px]">DASHBOARD</li>
       </Link>
      </ul>
     </div>

     <ul
      className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium"
      onClick={() => toggleDropdown("item1")}>
      <div className="flex justify-between text-[14px] items-center">
       {Report.name}
       <FaCaretDown className="fill-primary" />
      </div>
     </ul>
     {activeDropdown === "item1" && (
      <ul className="bg-[#f4f4f4] text-primary border-t border-b">
       {Report.items.map((item, index) => (
        <ul key={index}>
         <Link href={item.path}>
          <li
           className={`${
            pathname === item.path ? " bg-black/10 " : " hover:bg-white/60"
           } lg:p-2 lg:px-5 2xl:p-3  2xl:px-6 cursor-pointer`}>
           {item.name}
          </li>
         </Link>
        </ul>
       ))}
      </ul>
     )}

     <ul
      className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium"
      onClick={() => toggleDropdown("item2")}>
      <div className="flex justify-between items-center">
       {Money.name}
       <FaCaretDown className="fill-primary" />
      </div>
     </ul>
     {activeDropdown === "item2" && (
      <ul className="bg-[#f4f4f4] text-primary border-t border-b">
       {Money.items.map((item, index) => (
        <ul key={index}>
         <Link href={item.path}>
          <li
           className={`${
            pathname === item.path ? " bg-black/10 " : " hover:bg-white/60"
           } lg:p-2 lg:px-5 2xl:p-3 2xl:px-6 cursor-pointer`}>
           {item.name}
          </li>
         </Link>
        </ul>
       ))}
      </ul>
     )}

     <ul
      className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium"
      onClick={() => toggleDropdown("item3")}>
      <div className="flex justify-between items-center">
       {Product.name}
       <FaCaretDown className="fill-primary" />
      </div>
     </ul>
     {activeDropdown === "item3" && (
      <ul className="bg-[#f4f4f4] text-primary border-t border-b">
       {Product.items.map((item, index) => (
        <ul key={index}>
         <Link href={item.path}>
          <li
           className={`${
            pathname === item.path ? " bg-black/10 " : " hover:bg-white/60"
           } lg:p-2 lg:px-5 2xl:p-3 2xl:px-6 cursor-pointer`}>
           {item.name}
          </li>
         </Link>
        </ul>
       ))}
      </ul>
     )}

     <ul
      className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium"
      onClick={() => toggleDropdown("item4")}>
      <div className="flex justify-between items-center">
       {Inventory.name}
       <FaCaretDown className="fill-primary" />
      </div>
     </ul>
     {activeDropdown === "item4" && (
      <ul className="bg-[#f4f4f4] text-primary border-t border-b">
       {Inventory.items.map((item, index) => (
        <ul key={index}>
         <Link href={item.path}>
          <li
           className={`${
            pathname === item.path ? " bg-black/10 " : " hover:bg-white/60"
           } lg:p-2 lg:px-5 2xl:p-3 2xl:px-6 cursor-pointer`}>
           {item.name}
          </li>
         </Link>
        </ul>
       ))}
      </ul>
     )}

     <ul
      className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium"
      onClick={() => toggleDropdown("item5")}>
      <div className="flex justify-between items-center">
       {Employee.name}
       <FaCaretDown className="fill-primary" />
      </div>
     </ul>
     {activeDropdown === "item5" && (
      <ul className="bg-[#f4f4f4] text-primary border-t border-b">
       {Employee.items.map((item, index) => (
        <ul key={index}>
         <Link href={item.path}>
          <li
           className={`${
            pathname === item.path ? " bg-black/10 " : " hover:bg-white/60"
           } lg:p-2 lg:px-5 2xl:p-3 2xl:px-6 cursor-pointer`}>
           {item.name}
          </li>
         </Link>
        </ul>
       ))}
      </ul>
     )}

     <ul
      className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium"
      onClick={() => toggleDropdown("item6")}>
      <div className="flex justify-between items-center">
       {TableManagement.name}
       <FaCaretDown className="fill-primary" />
      </div>
     </ul>
     {activeDropdown === "item6" && (
      <ul className="bg-[#f4f4f4] text-primary border-t border-b">
       {TableManagement.items.map((item, index) => (
        <ul key={index}>
         <Link href={item.path}>
          <li
           className={`${
            pathname === item.path ? " bg-black/10 " : " hover:bg-white/60"
           } lg:p-2 lg:px-5 2xl:p-3 2xl:px-6 cursor-pointer`}>
           {item.name}
          </li>
         </Link>
        </ul>
       ))}
      </ul>
     )}

     <ul
      className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium"
      onClick={() => toggleDropdown("item7")}>
      <div className="flex justify-between items-center">
       {PaymentMethod.name}
       <FaCaretDown className="fill-primary" />
      </div>
     </ul>
     {activeDropdown === "item7" && (
      <ul className="bg-[#f4f4f4] text-primary border-t border-b">
       {PaymentMethod.items.map((item, index) => (
        <ul key={index}>
         <Link href={item.path}>
          <li
           className={`${
            pathname === item.path ? " bg-black/10 " : " hover:bg-white/60"
           } lg:p-2 lg:px-5 2xl:p-3 2xl:px-6 cursor-pointer`}>
           {item.name}
          </li>
         </Link>
        </ul>
       ))}
      </ul>
     )}
     <div className="flex flex-col gap-1">
      <ul className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium">
       <Link href="/">
        <li>TUTORIALS</li>
       </Link>
      </ul>
     </div>
    </div>
   </div>

   {/* Sidebar Footer */}
   <div className="bg-primary flex flex-col gap-2 items-center justify-center p-4">
    <h1 className="text-white">FAQ & Support</h1>
    <button className="bg-white text-primary p-2 rounded-md">Contact Us</button>
   </div>
  </div>
 );
};

export default Sidebar;
{
 /*"p-3 hover:bg-primary hover:text-white cursor-pointer flex items-center justify-between"*/
}
