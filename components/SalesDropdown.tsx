"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

import {FaCaretDown} from "react-icons/fa6";

const SalesDropdown: React.FC = () => {
 const router = useRouter();

 const [selectedDropdown, setSelectedDropdown] = useState<string>("");
 
 const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
   router.push(`sales/${selectedValue}`);
  }
  setSelectedDropdown(event.target.value);
 };

 const products = {
  items: [
   {
    name: "Sales Summary",
    path: "../",
   },
   {
    name: "Gross Profit",
    path: "/gross-profit",
   },
   {
    name: "Payment Methods",
    path: "/payment-methods",
   },
   {
    name: "Sales Type",
    path: "/sales-type",
   },
   {
    name: "Brand Sales",
    path: "/brand-sales",
   },
   {
    name: "Modifier Sales",
    path: "/reports/sales/modifier-sales",
   },
   {
    name: "Discounts",
    path: "/reports/sales/discounts",
   },
   {
    name: "Taxes",
    path: "/reports/sales/taxes",
   },
   {
    name: "Gratuity",
    path: "/reports/sales/gratuity",
   },
   {
    name: "Collected By",
    path: "/reports/sales/collected-by",
   },
   {
    name: "Served By",
    path: "/reports/sales/served-by",
   },
  ],
 };

 return (
  <div className="flex flex-col h-auto w-[200px]">
   <select
    value={selectedDropdown}
    onChange={handleDropdown}
    className="p-2  w-[200px] border border-gray-300 shadow-sm bg-primary text-white">
    {products.items.map((item, index) => (
     <option
      key={index}
      value={item.path}
      className="bg-white text-primary">
      {item.name}
     </option>
    ))}
   </select>
  </div>
 );
};
export default SalesDropdown;
