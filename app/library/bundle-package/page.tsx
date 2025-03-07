"use client";
import React, {useState} from "react";

import BundlingButton from "@/components/ui/BundlingButton";
import BundlingTable from "@/components/ui/BundlingTable";

const data = [
 {
  name: "Bundling 1",
  items: "Es Kopi Susu Moon 1L, Es ...",
  pricing: "Sales Type",
  outlet: "Outlet 1",
  status: "Inactive",
 },
];

const BundlePackage: React.FC = () => {
 const [isPopupOpen, setIsPopupOpen] = useState(false);

 const handleOpenPopup = () => {
  setIsPopupOpen(true);
 };

 const handleClosePopup = () => {
  setIsPopupOpen(false);
 };

 return (
  <div className="flex flex-col gap-4 h-auto w-full bg-[#f4f4f]">
   <div className="flex justify-between">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Bundle Package
    </h1>
    <button
     onClick={handleOpenPopup}
     className="px-4 py-2 bg-primary text-white rounded">
     Crete Bundle
    </button>
    <BundlingButton
     isOpen={isPopupOpen}
     onClose={handleClosePopup}
    />
   </div>
   <BundlingTable data={data} />
  </div>
 );
};

export default BundlePackage;
