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
   path: "/reports/transaction",
  },
  {
   name: "Invoices",
   path: "/reports/invoices",
  },
  {
   name: "Shift",
   path: "/reports/shift",
  },
 ],
};

const Money = {
 name: "FINANCIAL",
 items: [
  {
   name: "Revenue Analysis",
   path: "/financials/revenue-analysis",
  },
  {
   name: "Employee Analysis",
   path: "/financials/employee-analysis",
  },
  {
   name: "Taxes",
   path: "/financials/taxes",
  },
 ],
};

const Product = {
 name: "LIBRARY",
 items: [
  {
   name: "Product",
   path: "/library/product",
  },
  {
   name: "Bundle Package",
   path: "/library/bundle-package",
  },
  {
   name: "Promo",
   path: "/library/promo",
  },
  {
   name: "Discount",
   path: "/library/discount",
  },
  {
   name: "Sales Type",
   path: "/library/sales-type",
  },
 ],
};

const Inventory = {
 name: "INVENTORY",
 items: [
  {
   name: "Ingredient Library",
   path: "/inventory/ingredient-library",
  },
  {
   name: "Ingredient Categories",
   path: "/inventory/ingredient-categories",
  },
  {
   name: "Recipes",
   path: "/inventory/recipes",
  },
  {
   name: "Suppliers",
   path: "/inventory/suppliers",
  },
 ],
};

const Employee = {
 name: "EMPLOYEE",
 items: [
  {
   name: "Employee Access",
   path: "/employee/employee-access",
  },
  {
   name: "PIN Access",
   path: "/employee/pin-access",
  },
 ],
};

const TableManagement = {
 name: "TABLE MANAGEMENT",
 items: [
  {
   name: "Table Group",
   path: "/table-management/table-group",
  },
  {
   name: "Table Map",
   path: "/table-management/table-map",
  },
  {
   name: "Table Report",
   path: "/table-management/table-report",
  },
 ],
};

const PaymentMethod = {
 name: "PAYMENT METHOD",
 items: [
  {
   name: "QRIS",
   path: "/payment-method/qris",
  },
  {
   name: "Payment Configuration",
   path: "/payment-method/payment-configuration",
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
  <div className="fixed flex flex-col justify-between h-auto lg:w-[240px] 2xl:w-[270px] bg-white border-r text-primary shadow-md">
   <div className="">
    <div className="py-4 px-4 bg-primary flex justify-center border-b border-secondary">
    </div>

    {/* Profile */}

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
      <div className="flex justify-between text-[14px] items-center">
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
      <div className="flex justify-between text-[14px] items-center">
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
      <div className="flex justify-between text-[14px] items-center">
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
      <div className="flex justify-between text-[14px] items-center">
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
      <div className="flex justify-between text-[14px] items-center">
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
      <div className="flex justify-between text-[14px] items-center">
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
      <ul className="hover:bg-primary hover:text-white lg:py-2 lg:px-3 2xl:py-3 2xl:px-4 font-medium text-[14px]">
       <Link href="/tutorials">
        <li>TUTORIALS</li>
       </Link>
      </ul>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Sidebar;
{
 /*"p-3 hover:bg-primary hover:text-white cursor-pointer flex items-center justify-between"*/
}
