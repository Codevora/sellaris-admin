"use client";

import React, {useState} from "react";
import {FaAngleDown} from "react-icons/fa6";
import Link from "next/link";

const Report = {
 name: "Laporan Penjualan",
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

const SidebarItem = {
 items: [
  {
   name: "Analisis Omset",
   path: "/analytics",
  },
  {
   name: "Kinerja Karyawan",
   path: "/kinerja-karyawan",
  },
  {
   name: "Stok Barang",
   path: "/stok-barang",
  },
  {
   name: "Pajak",
   path: "/pajak",
  },
  {
   name: "Cabang",
   path: "/cabang",
  },
  {
   name: "Laporan Keuangan",
   path: "/laporan-keuangan",
  },
  {
   name: "Harga & Promosi",
   path: "/harga-promosi",
  },
  {
   name: "Tiket Pengaduan",
   path: "/ticket",
  },
  {
   name: "FAQ & Panduan",
   path: "/faq",
  },
  {
   name: "Kontak Admin",
   path: "/kontak-admin",
  },
  {
   name: "Sistem Pembayaran",
   path: "/sistem-pembayaran",
  },
  {
   name: "Loyalty Program",
   path: "/loyalty-program",
  },
  {
   name: "Ulasan Pelanggan",
   path: "/ulasan-pelanggan",
  },
  {
   name: "Struk Digital",
   path: "/struk-digital",
  },
 ],
};

const Sidebar: React.FC = () => {
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

 const toggleDropdown = (dropdown: string) => {
  setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
 };

 return (
  <div className="h-full w-64 bg-secondary text-white">
   <div className="py-4 px-2">
    <Link href="/">
     <h1 className="text-xl font-bold">Admin Dashboard</h1>
    </Link>
   </div>
   <ul className="mt-4 ">
    <li
     className="p-3 hover:bg-gray-600 cursor-pointer flex items-center justify-between"
     onClick={() => toggleDropdown("item1")}>
     {Report.name}
     <FaAngleDown />
    </li>
    {activeDropdown === "item1" && (
     <ul className="bg-third">
      {Report.items.map((item, index) => (
       <ul key={index}>
        <Link href={item.path}>
         <li className="p-3 hover:bg-gray-600 cursor-pointer"> {item.name}</li>
        </Link>
       </ul>
      ))}
     </ul>
    )}

    <ul className="cursor-pointer">
     {SidebarItem.items.map((item, index) => (
      <ul key={index}>
       <Link href={item.path}>
        <li className="p-3 hover:bg-gray-600">{item.name}</li>
       </Link>
      </ul>
     ))}
    </ul>
   </ul>
  </div>
 );
};

export default Sidebar;
