"use client";

import {useState} from "react";

const SalesTypePopup: React.FC<{onClose: () => void}> = ({onClose}) => {
    const [activeItem, setActiveItem] = useState<null | "item1" | "item2" >(null);

    const handleItem1Click = () => {
        setActiveItem("item1");
    }

    const handleItem2Click = () => {
        setActiveItem("item2")
    }
 return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
   <div className="border bg-white max-h-[500px] w-[400px] py-3 overflow-y-auto rounded-lg">
    {/*Header*/}
    <div className="flex flex-col gap-2 rounded-t-lg w-full bg-white">
     <h1 className="p-2 text-black/40">Sales Type Information</h1>
     <hr className="border w-full" />
    </div>

    {/*Content*/}
    <div className="flex flex-col gap-2 px-3">
     <div className="flex flex-col gap-2 py-3">
      <label>Sales Type Name</label>
      <input
       type="text"
       placeholder="Name"
       className="p-2 border w-full"
      />
     </div>
     {/*Assign Gratuity*/}
     <div className="flex flex-col gap-2">
      <h1>Assign Gratuity</h1>
      <hr className="border w-full" />

      {/*item1*/}
      <button
       onClick={handleItem1Click}
       className="flex justify-between border-b items-center w-full p-2">
       <div className="flex gap-3 items-center">
        <div
         className={`w-3 h-3 rounded-full ${
          activeItem === "item1"
           ? "bg-primary border"
           : "border border-gray-400"
         } p-2`}
        />
        <div className="text-start rounded w-full">Gratuity</div>
       </div>
       <p>5%</p>
      </button>
     </div>

     {/*item2*/}
     <button
      onClick={handleItem2Click}
      className="flex justify-between border-b items-center w-full p-2">
      <div className="flex gap-3 items-center">
       <div
        className={`w-3 h-3 rounded-full ${
         activeItem === "item2" ? "bg-primary border" : "border border-gray-400"
        } p-2`}
       />
       <div className="text-start rounded w-full">PPN</div>
      </div>
      <p>10%</p>
     </button>
    </div>

    {/*Button*/}
    <div className="flex p-3 gap-2 justify-end">
     <button
      onClick={onClose}
      className="px-4 py-2 text-white bg-red rounded-lg">
      Close
     </button>
     <button
      onClick={onClose}
      className="px-4 py-2 text-white bg-primary rounded-lg">
      Save
     </button>
    </div>
   </div>
  </div>
 );
};

const SalesTypeButton = () => {
 const [openPopup, setOpenPopup] = useState(false);

 const togglePopup = () => {
  setOpenPopup(!openPopup);
 };
 return (
  <div className="flex items-center justify-center">
   <button
    onClick={togglePopup}
    className="bg-primary text-white px-4 py-2 rounded">
    Create Sales Type
   </button>
   {openPopup && <SalesTypePopup onClose={togglePopup} />}
  </div>
 );
};

export default SalesTypeButton;
