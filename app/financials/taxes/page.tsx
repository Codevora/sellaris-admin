"use client";

import {useState} from "react";
import ButtonTaxes from "@/components/ui/ButtonTaxes";

const TaxesHeader = [{name: "Name"}, {name: "Amount (%)"}];

const TaxesContent = [
 {name: "Taxes 1", Amount: "0"},
 {name: "Taxes 2", Amount: "0"},
];

const Taxes = () => {
 const [isPopupOpen, setIsPopupOpen] = useState(false);

 const handleOpenPopup = () => {
  setIsPopupOpen(true);
 };

 const handleClosePopup = () => {
  setIsPopupOpen(false);
 };

 return (
  <div className="flex flex-col gap-4 h-auto w-auto bg-[#f4f4f]">
   <div className="flex justify-between">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">Taxes</h1>
    <button
     onClick={handleOpenPopup}
     className="px-4 py-2 bg-primary text-white rounded">Add Taxes</button>
    <ButtonTaxes
     isOpen={isPopupOpen}
     onClose={handleClosePopup}
    />
   </div>
   <div className="flex flex-col">
    <div className="border flex justify-between p-2 bg-black/10">
     {TaxesHeader.map((item, index) => (
      <div
       key={index}
       className="font-bold">
       {item.name}
      </div>
     ))}
    </div>
    <div>
     {TaxesContent.map((item, index) => (
      <div
       key={index}
       className="hover:bg-black/5 border-b flex justify-between p-2 ">
       <div>{item.name}</div>
       <div>{item.Amount}</div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default Taxes;
