"use client";

import {usePathname} from "next/navigation";
import "./globals.css";

//components
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Profile";
import DateRangePicker from "@/components/DateRange";

const disableDateRangePicker = [
 "/tutorials",
 "/payment-method/payment-configuration",
];
const disableProfile = ["/tutorials", "/payment-method/payment-configuration"];
const disableHr = ["/tutorials", "/payment-method/payment-configuration"];

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
    <Sidebar />
    <div className=" bg-[#f4f4f]">
     <div className="py-2 flex flex-col lg:ml-[240px] 2xl:ml-[270px] lg:w-[1020px] 2xl:w-[1630px]">
      <div className="flex flex-col gap-3 px-4">
       <div className="flex justify-between gap-5">
        {!disableDateRangePicker.includes(pathname) && <DateRangePicker />}
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
