"use client";

import React, {useState} from "react";
import { FaLock } from "react-icons/fa6";

const IngredientsLib: React.FC<{onClose: () => void}> = ({onClose}) => {
 const [selectedDropdown, setSelectedDropdown] = useState<string>("");
 const [selectedDropdown2, setSelectedDropdown2] = useState<string>("");

 const Measurements = [{name: "gram(gr)"}];

 const Categories = [{name: "Category 1"}, {name: "Category 2"}];

 const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedDropdown(event.target.value);
 };

 const handleDropdown2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedDropdown2(event.target.value);
 };

 return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
   <div className="w-[550px] max-h-[500px] overflow-y-auto rounded-lg">
    {/*Header*/}
    <div className="flex flex-col bg-white rounded-tl-lg">
     <h2 className="p-2 text-lg">
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
         <label>Ingredient Name</label>
         <input
          type="text"
          className="p-2 border border-gray-400 rounded w-full"
          placeholder="Name"
         />
        </form>
        <form className="flex flex-col w-full gap-2 justify-center">
         <label>Select Categories</label>
         <div className="border border-gray-400 w-full pr-4">
          <select
           value={selectedDropdown}
           onChange={handleDropdown}
           className="p-2 w-full border-gray-300 text-black focus:ring-0 focus:outline-none">
           {Categories.map((category, index) => (
            <option
             key={index}
             value={category.name}>
             {category.name}
            </option>
           ))}
          </select>
         </div>
        </form>

        <form className="flex flex-col w-full gap-2 justify-center">
         <label>Unit of Measurements</label>
         <div className="border border-gray-400 w-full pr-4">
          <select
           value={selectedDropdown2}
           onChange={handleDropdown2}
           className="p-2 w-full  text-black focus:ring-0 focus:outline-none">
           {Measurements.map((measurement, index) => (
            <option
             key={index}
             value={measurement.name}>
             {measurement.name}
            </option>
           ))}
          </select>
         </div>
         <p className="text-[14px] text-black/40">
          Select based on your operational usage (e.g. gram for rice, mililitre
          for sauces, etc)
         </p>
        </form>
       </div>
       <div className="flex flex-col gap-2 w-full border-b border-t border-gray-400 py-5 mt-7">
        <h1>Recipe</h1>
        <p className="text-[14px] text-black/40">
         Attach The Raw Ingredient Components
        </p>
        <button className="bg-primary text-white px-4 py-2 rounded">
         Manage Recipe
        </button>
       </div>
       <div className="flex flex-col gap-2 w-full border-b border-gray-400 py-5">
        <h1>Inventory</h1>
        <div className="flex gap-2 items-center">
         <FaLock className="fill-[gold]" />
         <p className="text-[14px] text-black/40">
          Inventory can be tracked after Recipe has been created.
         </p>
        </div>
        <button
         disabled
         className="bg-[#f4f4f4] text-black/40 px-4 py-2 rounded">
         Start Tracking Inventory and Alert
        </button>
       </div>
       <div className="flex flex-col gap-2 w-full border-b border-gray-400 py-5">
        <h1>Production</h1>
        <div className="flex gap-2 items-center">
         <FaLock className="fill-[gold]" />
         <p className="text-[14px] text-black/40">
          Production can be used after Recipe has been created.
         </p>
        </div>
        <button
         disabled
         className="bg-[#f4f4f4] text-black/40 px-4 py-2 rounded">
         Produce
        </button>
       </div>
       <div className="flex flex-col gap-2 w-full border-b border-gray-400 py-5">
        <h1>Cost</h1>
        <div className="flex gap-2 items-center">
         <FaLock className="fill-[gold]" />
         <p className="text-[14px] text-black/40">
          COGS can be tracked after Recipe is created.
         </p>
        </div>
        <button
         disabled
         className="bg-[#f4f4f4] text-black/40 px-4 py-2 rounded">
         Manage Cost of Goods Sold (COGS)
        </button>
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
       disabled
       onClick={onClose}
       className="mt-4 bg-[#f4f4f4] text-black/40 px-4 py-2 rounded">
       Save
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

const SemiFinishedIngredientButton: React.FC = () => {
 const [isPopupOpen, setIsPopupOpen] = useState(false);

 const togglePopup = () => {
  setIsPopupOpen(!isPopupOpen);
 };

 return (
  <div className="flex items-center justify-center">
   <button
    onClick={togglePopup}
    className="bg-primary text-white px-4 py-2 rounded">
    Create Semi Finished Ingredient
   </button>
   {isPopupOpen && <IngredientsLib onClose={togglePopup} />}
  </div>
 );
};

export default SemiFinishedIngredientButton;
