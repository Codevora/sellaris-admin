"use client";
import {useState} from "react";

interface BundlingButtonProps {
 isOpen: boolean;
 onClose: () => void;
}

const BundlingButton: React.FC<BundlingButtonProps> = ({isOpen, onClose}) => {
 const [selectedFile, setSelectedFile] = useState<File | null>(null);

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files.length > 0) {
   setSelectedFile(event.target.files[0]);
  }
 };

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
   <div className="w-[500px] max-h-[500px] overflow-y-auto rounded-lg">
    <div className="flex flex-col gap-4 bg-gray-200 p-6 rounded shadow-lg w-full">
     <h2 className="text-lg font-bold mb-4">Create Bundle Package</h2>
     <div className="flex flex-col gap-5 border border-gray-400 p-3 rounded-lg bg-white py-6">
      <form className="flex gap-10 items-center">
       <label>Add Image For POS</label>
       <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
       />
      </form>
      <form
       action=""
       className="flex w-full items-center">
       <label
        htmlFor=""
        className="w-[200px]">
        Bundle Name
       </label>
       <input
        type="text"
        className="p-2 border w-full"
        placeholder="Name"
       />
      </form>
      <hr className="border w-full" />
      <div className="flex flex-col gap-2">
       <h1 className="text-xl font-semibold">Assigned Outlets</h1>
       <p className="text-black/40">
        Select outlets that you want to implement this bundle
       </p>
       <button className="w-full bg-primary text-white p-2 rounded-lg">
        Assign Outlet
       </button>
      </div>
     </div>
     <div className="flex flex-col gap-2 border border-gray-400 rounded-lg w-full bg-white p-3 py-6">
      <h1 className="text-xl font-semibold">Bundle Items</h1>
      <button className="w-full bg-primary text-white p-2 rounded-lg">
       Add Item
      </button>
     </div>
     <div className="flex flex-col gap-2 border border-gray-400 rounded-lg w-full bg-white p-3 py-6">
      <h1 className="text-xl font-semibold">Bundle Pricing</h1>
      <form
       action=""
       className="flex w-full items-center">
       <label className="w-[150px]">Bundle Price</label>
       <div className="flex w-full items-center gap-2">
        <h1>Rp.</h1>
        <input
         type="text"
         className="p-2 border w-full"
         placeholder="Input Bundle Price"
        />
       </div>
      </form>
     </div>
     <div className="flex w-full justify-center items-center">
      <p className="text-black/40">
       Learn how bundle package will work on POS.
       <span className="text-[blue] hover:underline"> Learn More</span>
      </p>
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

export default BundlingButton;
