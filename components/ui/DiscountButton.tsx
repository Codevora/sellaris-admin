"use client";
import {useState} from "react";
import {usePathname} from "next/navigation";
import FixedAmount from "./FixedAmount";

interface DiscountButtonProps {
 isOpen: boolean;
 onClose: () => void;
}

const InputConfiguration = {
 item: [
  {
   name: "Fixed Amount",
   description: "Amount configured in Back Office and cannot be changed in POS",
  },
  {name: "Customizable Amount", description: "Amount to be decided in POS"},
 ],
};

const DiscountButton: React.FC<DiscountButtonProps> = ({isOpen, onClose}) => {
 const pathname = usePathname();
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

 const toogleDropdown = (dropdown:string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
 }

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
   <div className="w-[500px] max-h-[500px] overflow-y-auto rounded-lg">
    <div className="bg-white p-3">
     <h2 className="text-lg text-black/40 font-semibold">
      Discount Information
     </h2>
    </div>
    <hr className="border" />
    <div className="flex flex-col gap-3 bg-white p-3 shadow-lg w-full">
     <form
      action=""
      className="flex flex-col gap-2 w-full">
      <label className="font-semibold">Discount Name</label>
      <input
       type="text"
       className="p-2 border w-full"
       placeholder="Name"
      />
     </form>
     <div className="flex flex-col gap-2">
      <label className="font-semibold">Input Configuration</label>
      <div className="flex flex-col gap-2">
       <div className="flex flex-col gap-2">
        <button onClick={() => handleNavOpen()} className="flex flex-col items-start">
         <h1 className="font-semibold">Fixed Amount</h1>
         <p className="text-black/40">
          Amount configured in Back Office and cannot be changed in POS
         </p>
        </button>
        <FixedAmount isOpen={isNavOpen} />
        <div className="flex flex-col gap-1">
         <h1 className="font-semibold">Customizable Amount</h1>
         <p className="text-black/40">Amount to be decided in POS</p>
        </div>
       </div>
      </div>
     </div>
     <div className="flex gap-2 justify-end">
      <button
       className="mt-4 px-4 py-2 bg-red text-white rounded"
       onClick={onClose}>
       Cancel
      </button>
      <button
       className="mt-4 px-4 py-2 bg-primary text-white rounded"
       onClick={onClose}>
       Save
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DiscountButton;
