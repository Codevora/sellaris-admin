"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const SalesDropdown = [
 {
  name: "Sales Summary",
  path: "/reports/sales",
 },
 {
  name: "Gross Profit",
  path: "/reports/sales/gross-profit",
 },
 {
  name: "Payment Method",
  path: "/reports/sales/payment-method",
 },
 {
  name: "Sales Type",
  path: "/reports/sales/sales-type",
 },
 {
  name: "Item Sales",
  path: "/reports/sales/item-sales",
 },
 {
  name: "Category Sales",
  path: "/reports/sales/category-sales",
 },
 {
  name: "Brand Sales",
  path: "/reports/sales/brand-sales",
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
];

const SalesLayout = ({children}: {children: React.ReactNode}) => {
 const pathname = usePathname();
 return (
  <div className="lg:ml-[240px] 2xl:ml-[270px] p-5 flex gap-10 h-auto w-auto bg-[#f4f4f]">
   <ul className="flex flex-col gap-1">
    {SalesDropdown.map((item, index) => (
     <button
      key={index}
      className={`${
       pathname === item.path
        ? "bg-primary text-white"
        : "hover:bg-primary hover:text-white"
      } flex items-start  p-2 w-[260px] rounded`}>
      <Link href={item.path}>{item.name}</Link>
     </button>
    ))}
   </ul>
   <div className="w-full bg-[#f4f4f]">{children}</div>
  </div>
 );
};

export default SalesLayout;
