"use client";
import {FaLock} from "react-icons/fa";

import {useState} from "react";

interface ProductButtonProps {
 isOpen: boolean;
 onClose?: () => void;
}

const ProductButton: React.FC<ProductButtonProps> = ({
 isOpen,
 onClose,
}: ProductButtonProps) => {
 const [selectedFile, setSelectedFile] = useState<File | null>(null);
 const [description, setDescription] = useState<string>("");
 const [selectedDropdown, setSelectedDropdown] = useState<string>("");
 const [checkedOption, setCheckedOption] = useState<{[key: string]: boolean}>({
  item1: false,
  item2: false,
 });

 const Categories = [{name: "Category 1"}, {name: "Category 2"}];

 const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedDropdown(event.target.value);
 };

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files.length > 0) {
   setSelectedFile(event.target.files[0]);
  }
 };

 const handleDescriptionChange = (
  event: React.ChangeEvent<HTMLTextAreaElement>
 ) => {
  setDescription(event.target.value);
 };

 const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const {name, checked} = event.target;
  setCheckedOption((prev) => ({...prev, [name]: checked}));
 };

 if (!isOpen) return null;
 return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
   <div className="flex flex-col gap-2 bg-white p-6 overflow-y-auto rounded-lg shadow-lg h-full max-h-[880px] w-[900px]">
    <p className="text-sm">Add Product</p>
    <hr className="border w-full" />
    <div className="flex flex-col justify-between h-full">
     <div className="flex flex-col gap-5">
      <form className="flex gap-10 items-center">
       <label>Add Image For POS</label>
       <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
       />
      </form>
      <form className="flex gap-14 items-center">
       <label>Select Categories</label>
       <div className="border max-w-[229px] px-2">
        <select
         value={selectedDropdown}
         onChange={handleDropdown}
         className="p-2 w-[200px] border-gray-300 text-black focus:ring-0 focus:outline-none">
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

      <form
       action=""
       className="flex w-full items-center">
       <label
        htmlFor=""
        className="w-[224px]">
        Product Name
       </label>
       <input
        type="text"
        className="p-2 border w-full"
        placeholder="Name"
       />
      </form>
      <form className="flex w-full">
       <label
        htmlFor=""
        className="w-[224px]">
        Description
       </label>
       <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
        className="p-2 border rounded w-full"
        rows={4}
       />
      </form>
      <div className="flex flex-col gap-2">
       <form className="flex w-full justify-between">
        <label className="">SELLARIS ORDER SELF PICKUP & DELIVERY</label>
        <input
         type="checkbox"
         name="item1"
         checked={checkedOption.item1}
         onChange={handleCheckboxChange}
        />
       </form>
       <hr className="border w-full" />
      </div>
      <div className="flex flex-col gap-2">
       <h1>Pricing</h1>
       <hr className="border w-full" />
       <form className="flex gap-2">
        <input
         type="checkbox"
         name="item2"
         checked={checkedOption.item2}
         onChange={handleCheckboxChange}
        />
        <label className="">Apply Multiple price per sales type</label>
       </form>
       <div className="flex flex-col w-full">
        <div className="flex mt-7">
         <input
          type="text"
          className="border p-2 w-full focus:outline-none rounded-tl"
          placeholder="Price"
         />
         <input
          type="text"
          className="border p-2 w-full focus:outline-none rounded-tr"
          placeholder="SKU"
         />
        </div>
        <button className="w-full bg-primary p-2 rounded-b text-white">
         Add Variant
        </button>
       </div>
      </div>
      <div className="flex flex-col gap-2">
       <h1>Inventory</h1>
       <hr className="border w-full" />
       <div className="flex flex-col w-full">
        <button className="w-full bg-primary p-2 rounded-b text-white">
         Start Tracking Item Inventory and Alerts
        </button>
       </div>
      </div>
      <div className="flex flex-col gap-2">
       <h1>Cost</h1>
       <hr className="border w-full" />
       <div className="flex flex-col gap-2 w-full">
        <button
         className="w-full bg-gray-300 border border-gray-400 p-2 rounded-b text-white"
         disabled>
         Start Tracking Cost of Goods Sold (COGS)
        </button>
        <div className="flex gap-2 items-center">
         <FaLock className="fill-[gold]" />
         <p>
          This item cannot be tracked because the inventory stock is not
          tracked.
         </p>
        </div>
       </div>
      </div>
     </div>

     <div className="flex gap-2 justify-end">
      <button
       onClick={onClose}
       className="mt-4 px-4 py-2 bg-red text-white rounded">
       Cancel
      </button>
      <button
       onClick={onClose}
       className="mt-4 px-4 py-2 bg-primary text-white rounded">
       Save
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ProductButton;
