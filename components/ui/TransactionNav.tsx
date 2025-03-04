"use client";

import {useRouter, usePathname} from "next/navigation";
import {useState} from "react";
import Link from "next/link";

const TransactionNav: React.FC = () => {
 const router = useRouter();
 const [selectedDropdown, setSelectedDropdown] = useState<string>("");

 const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
   router.push(`transaction/${selectedValue}`);
  }
  setSelectedDropdown(event.target.value);
 };

 const TransactionPage = [
  {
   name: "Transaction Success",
   path: "/reports/transaction",
  },
  {
   name: "Transaction Failed",
   path: "/reports/transaction/transaction-failed",
  },
  {
   name: "Void Items",
   path: "/reports/transaction/void-items",
  },
 ];

 return (
  <div className=" flex flex-col gap-4 h-auto w-auto bg-[#f4f4f]">
   <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
    Transaction
   </h1>
   <div className="flex gap-5 ">
    {TransactionPage.map((item, index) => (
     <ul
      key={index}
      className="flex">
      <div
       onClick={() => handleDropdown(event as any)}
       className="leading-tight">
       <Link href={item.path}>
        <button
         className={` ${
          selectedDropdown === item.name
           ? " text-white border-primary"
           : "hover:border-primary border-b-2 border-primary"
         } py-2 transition-colors duration-300 ease-in-out `}>
         {item.name}
        </button>
       </Link>
      </div>
     </ul>
    ))}
   </div>
  </div>
 );
};

export default TransactionNav;
