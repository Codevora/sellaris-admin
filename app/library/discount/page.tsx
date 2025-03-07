"use client";
import {useState} from "react";

import DiscountTable from "@/components/ui/DiscountTable";
import DiscountButton from "@/components/ui/DiscountButton";

const Discount: React.FC = () => {
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
     Discounts
    </h1>
    <button
     className="px-4 py-2 bg-primary text-white rounded"
     onClick={handleOpenPopup}>
     Create Discount
    </button>
    <DiscountButton isOpen={isPopupOpen} onClose={handleClosePopup} />
   </div>
   <DiscountTable />
  </div>
 );
};

export default Discount;
