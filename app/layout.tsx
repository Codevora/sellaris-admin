"use client";

import {usePathname} from "next/navigation";
import "./globals.css";

//components
import Sidebar from "@/components/Sidebar";
import Outlet from "@/components/Outlet";
import Profile from "@/components/Profile";
import DateRangePicker from "@/components/DateRange";

const disableSidebar = ["/login"];

const disableOutlet = [
 "/tutorials",
 "/payment-method/payment-configuration",
 "/inventory/recipes",
 "/inventory/recipes/semi-finished-ingredient",
 "/inventory/suppliers",
 "/library/promo",
 "/library/discount",
 "/library/bundle-package",
 "/login",
];

const disableDateRangePicker = [
 "/tutorials",
 "/payment-method/payment-configuration",
 "/inventory/recipes",
 "/inventory/recipes/semi-finished-ingredient",
 "/inventory/suppliers",
 "/library/promo",
 "/library/discount",
 "/library/bundle-package",
 "/login",
];

const disableProfile = [
 "/tutorials",
 "/payment-method/payment-configuration",
 "/inventory/recipes",
 "/inventory/recipes/semi-finished-ingredient",
 "/inventory/suppliers",
 "/library/promo",
 "/library/discount",
 "/library/bundle-package",
 "/login",
];

const disableHr = [
 "/tutorials",
 "/payment-method/payment-configuration",
 "/inventory/recipes",
 "/inventory/recipes/semi-finished-ingredient",
 "/inventory/suppliers",
 "/library/promo",
 "/library/discount",
 "/library/bundle-package",
 "/login",
];

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const pathname = usePathname();
 return (
  <html lang="en">
   <head>
    <title>Sellaris Dashboard</title>
    <meta
     name="description"
     content=""
    />
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1"
    />
    <link
     rel="icon"
     href="/favicon.ico"
    />
   </head>
   <body className="flex bg-[#f4f4f4]">
    {!disableSidebar.includes(pathname) && <Sidebar />}
    <div className=" bg-[#f4f4f]">
     <div className="py-2 flex flex-col lg:ml-[240px] 2xl:ml-[270px] lg:w-[1020px] 2xl:w-[1630px]">
      <div className="flex flex-col gap-3 px-4">
       <div className="flex justify-between">
        <div className="flex gap-5">
         {!disableOutlet.includes(pathname) && <Outlet />}
         {!disableDateRangePicker.includes(pathname) && <DateRangePicker />}
        </div>
        {!disableProfile.includes(pathname) && <Profile />}
       </div>
       {!disableHr.includes(pathname) && <hr className="w-full border-2" />}
      </div>
     </div>
     <div>{children}</div>
    </div>
   </body>
  </html>
 );
}
