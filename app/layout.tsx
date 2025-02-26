import type {Metadata} from "next";
import "./globals.css";

//components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
 title: "Create Next App",
 description: "Generated by create next app",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body>
    <Header />
    <div className="flex h-screen">
     <Sidebar />
     {children}
    </div>
   </body>
  </html>
 );
}
