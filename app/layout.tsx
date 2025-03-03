import type {Metadata} from "next";
import "./globals.css";

//components
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Profile";
import DateRangePicker from "@/components/DateRange";

export const metadata: Metadata = {
 title: "Sellaris Dashboard",
 description: "Generated by create next app",
};


export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className="flex bg-[#f4f4f4]">
    <Sidebar />
    <div className=" bg-[#f4f4f]">
     <div className="py-10 flex flex-col lg:ml-[240px] 2xl:ml-[270px] lg:w-[1020px] 2xl:w-[1650px]">
      <div className="flex flex-col gap-3 px-4">
       <div className="flex justify-between gap-5">
        <DateRangePicker />
        <Profile />
       </div>
       <hr className="w-full border-2" />
      </div>
     </div>
     <div>{children}</div>
    </div>
   </body>
  </html>
 );
}
