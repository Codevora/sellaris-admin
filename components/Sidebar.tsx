"use client";

import React, {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = {
 items: [
  {
   name: "Laporan Penjualan",
   path: "/",
  },
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
    const pathname = usePathname();


 return (
  <div className="h-full w-64 bg-secondary text-white p-4">
   <div className="py-4 px-2">
    <h1 className="text-xl font-bold">Admin Dashboard</h1>
   </div>
   <ul className="cursor-pointer  flex flex-col gap-2">
    {SidebarItem.items.map((item, index) => (
     <ul
      key={index}
      className={`${
       pathname === item.path
        ? "bg-white text-primary p-3 rounded-lg"
        : "hover:bg-white hover:text-primary p-3 rounded-lg"
      }`}>
      <Link href={item.path}>
       <li>{item.name}</li>
      </Link>
     </ul>
    ))}
   </ul>
  </div>
 );
};

export default Sidebar;
