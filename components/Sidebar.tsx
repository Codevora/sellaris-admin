"use client";

import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Dashboard = {
 items: [
  {
   name: "Dashboard",
   path: "/",
  },
  //{
  // name: "Stok Barang",
  // path: "/stok-barang",
  // },
  //{
  //name: "Pajak",
  // path: "/pajak",
  //},
  //{
  // name: "Cabang",
  // path: "/cabang",
  //},
  // {
  // name: "Laporan Keuangan",
  //path: "/laporan-keuangan",
  //},
  //{
  // name: "Harga & Promosi",
  // path: "/harga-promosi",
  //},
  //{
  // name: "Tiket Pengaduan",
  // path: "/ticket",
  //},
  // {
  //  name: "FAQ & Panduan",
  //  path: "/faq",
  // },
  // {
  //  name: "Kontak Admin",
  //  path: "/kontak-admin",
  // },
  // {
  //  name: "Sistem Pembayaran",
  //  path: "/sistem-pembayaran",
  // },
  // {
  //  name: "Loyalty Program",
  //  path: "/loyalty-program",
  // },
  // {
  //  name: "Ulasan Pelanggan",
  //  path: "/ulasan-pelanggan",
  // },
  // {
  // name: "Struk Digital",
  //  path: "/struk-digital",
  // },
 ],
};

const Report = {
 name: "Sales",
 items: [
  {
   name: "Harian",
   path: "/daily",
  },
  {
   name: "Mingguan",
   path: "/weekly",
  },
  {
   name: "Bulanan",
   path: "/monthly",
  },
 ],
};

const Money = {
 name: "Financial",
 items: [
  {
   name: "Analisis Omset",
   path: "/analytics",
  },
  {
   name: "Kinerja Karyawan",
   path: "/weekly",
  },
  {
   name: "Bulanan",
   path: "/monthly",
  },
 ],
};

const Product = {
 name: "Product",
 items: [
  {
   name: "Harga & Promosi",
   path: "/daily",
  },
  {
   name: "Kinerja Karyawan",
   path: "/weekly",
  },
  {
   name: "Bulanan",
   path: "/monthly",
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
  <div className="h-full w-[300px] bg-white border-r text-primary p-4">
   <div className="py-4 px-2">
    <img
     src="Logos/1.png"
     alt=""
     className="w-40"
    />
   </div>
   <div className="flex flex-col gap-1">
    {Dashboard.items.map((item, index) => (
     <ul
      key={index}
      className="hover:bg-primary hover:text-white p-3">
      <Link href={item.path}>
       <li>{item.name}</li>
      </Link>
     </ul>
    ))}
   </div>

   <ul
    className="hover:bg-primary hover:text-white p-3"
    onClick={() => toggleDropdown("item1")}>
    {Report.name}
   </ul>
   {activeDropdown === "item1" && (
    <ul className="bg-secondary text-white">
     {Report.items.map((item, index) => (
      <ul key={index}>
       <Link href={item.path}>
        <li className="p-4 hover:bg-gray-600 cursor-pointer"> {item.name}</li>
       </Link>
      </ul>
     ))}
    </ul>
   )}

   <ul
    className="hover:bg-primary hover:text-white p-3"
    onClick={() => toggleDropdown("item2")}>
    {Money.name}
   </ul>
   {activeDropdown === "item2" && (
    <ul className="bg-secondary text-white">
     {Money.items.map((item, index) => (
      <ul key={index}>
       <Link href={item.path}>
        <li className="p-4 hover:bg-gray-600 cursor-pointer"> {item.name}</li>
       </Link>
      </ul>
     ))}
    </ul>
   )}

   <ul
    className="hover:bg-primary hover:text-white p-3"
    onClick={() => toggleDropdown("item3")}>
    {Product.name}
   </ul>
   {activeDropdown === "item3" && (
    <ul className="bg-secondary text-white">
     {Product.items.map((item, index) => (
      <ul key={index}>
       <Link href={item.path}>
        <li
         className={`${
          pathname === item.path ? "p-4 bg-gray-600 " : "p-4 hover:bg-gray-600"
         }  cursor-pointer`}>
         {item.name}
        </li>
       </Link>
      </ul>
     ))}
    </ul>
   )}
  </div>
 );
};

export default Sidebar;
{
 /*"p-3 hover:bg-primary hover:text-white cursor-pointer flex items-center justify-between"*/
}
