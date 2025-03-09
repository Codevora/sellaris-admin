"use client";

import React, {useState} from "react";

const IngredientsLib: React.FC<{onClose: () => void}> = ({onClose}) => {
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const [isDropdown2Open, setIsDropdown2Open] = useState(false);
 const [activeItem, setActiveItem] = useState<null | "item1" | "item2">(null);
 const [selectedOption, setSelectedOption] = useState<string | null>(null);
 const [selectedOption2, setSelectedOption2] = useState<string | null>(null);

 const handleItem1Click = () => {
  setIsDropdown2Open(!isDropdown2Open);
  setIsDropdownOpen(false);
  setActiveItem("item1");
 };

 const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
  setIsDropdown2Open(false);
  setActiveItem("item2");
 };

 const handleOptionClick = (option: string) => {
  setSelectedOption(option);
 };

 const handleOption2Click = (option: string) => {
  setSelectedOption2(option);
 };

 return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
   <div className="w-[550px] max-h-[500px] overflow-y-auto rounded-lg">
    {/*Header*/}
    <div className="flex flex-col bg-white rounded-tl-lg">
     <h2 className="p-2 text-lg text-black/40">
      Create Semi-Finished Ingredient
     </h2>
     <hr className="border w-full" />
    </div>

    {/*Content*/}
    <div className="flex flex-col  bg-white px-5 py-3 rounded-bl-lg shadow-lg w-full">
     <div className="mt-2 w-full">
      <div className="flex flex-col gap-2">
       <div className="flex flex-col gap-3 items-center w-full">
        <form className="flex flex-col gap-2 w-full">
         <label>Discount Name</label>
         <input
          type="text"
          className="p-2 border border-gray-400 rounded w-full"
          placeholder="Name"
         />
        </form>

        {/*item 1*/}
        <div className="flex flex-col w-full gap-1">
         <label>Input Configuration</label>

         <div className="flex items-center w-full">
          <div
           className={`w-3 h-3 rounded-full ${
            activeItem === "item1" ? "bg-primary" : "border border-gray-400"
           } p-2`}
          />
          <button
           onClick={handleItem1Click}
           className="text-start px-4 py-2 rounded w-full">
           Fixed Amount
           <p className="text-black/40">
            Amount configured in Back Office and cannot be changed in POS
           </p>
          </button>
         </div>
         {isDropdown2Open && (
          <div className="flex w-full gap-2 rounded bg-white">
           <div className="flex w-full flex-col gap-2 justify-center p-2">
            <h1>Discount Amount</h1>
            <div className="flex w-full justify-between gap-2">
             <input
              type="number"
              placeholder="Amount"
              className="border border-gray-400 p-2 rounded w-full"
             />
             <div className="flex border border-gray-400 rounded-lg w-[100px] items-center">
              <div
               className={`flex w-full justify-center items-center p-2 cursor-pointer  ${
                selectedOption2 === "Option 1"
                 ? "bg-primary rounded-l-lg text-white"
                 : "hover:bg-gray-100"
               }`}
               onClick={() => handleOption2Click("Option 1")}>
               <h1>Rp</h1>
              </div>
              <div
               className={`flex w-full justify-center items-center p-2 cursor-pointer  ${
                selectedOption2 === "Option 2"
                 ? "bg-primary rounded-r-lg text-white"
                 : "hover:bg-gray-100"
               }`}
               onClick={() => handleOption2Click("Option 2")}>
               <h1>%</h1>
              </div>
             </div>
            </div>
           </div>
          </div>
         )}
        </div>
       </div>
      </div>
     </div>
     <div className="flex gap-2 justify-end">
      <button
       onClick={onClose}
       className="mt-4 text-white bg-red px-4 py-2 rounded">
       Close
      </button>
      <button
       onClick={onClose}
       className="mt-4 text-white bg-primary px-4 py-2 rounded">
       Save
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

const IngredientsLibButton: React.FC = () => {
 const [isPopupOpen, setIsPopupOpen] = useState(false);

 const togglePopup = () => {
  setIsPopupOpen(!isPopupOpen);
 };

 return (
  <div className="flex items-center justify-center">
   <button
    onClick={togglePopup}
    className="bg-primary text-white px-4 py-2 rounded">
    Create Discount
   </button>
   {isPopupOpen && <IngredientsLib onClose={togglePopup} />}
  </div>
 );
};

export default IngredientsLibButton;
