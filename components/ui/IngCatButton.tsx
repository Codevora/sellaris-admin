"use client";

import {useState} from "react";

const Popup: React.FC<{onClose: () => void}> = ({onClose}) => {
 return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
   <div className="w-[500px] h-[300px] rounded-lg bg-white">
    {/*Header*/}
    <div className="flex flex-col bg-white rounded-t-lg">
     <h1 className="p-2 text-lg">Create Ingredient Category</h1>
     <hr className="border w-full" />
    </div>

    {/*Content*/}
    <div className="flex flex-col bg-white p-2 rouned-bl-lg w-full h-full">
     <form className="flex flex-col gap-2">
      <label>Name</label>
      <input
       type="text"
       className="w-full border border-gray-400 p-2 rounded"
       placeholder="Ingredient Category Name"
      />
     </form>
    </div>
    <div className="flex gap-2 justify-end bg-white rounded-b-lg p-2">
     <button
      onClick={onClose}
      className="px-4 py-2 bg-red rounded text-white">
      Cancel
     </button>
     <button
      onClick={onClose}
      className="px-4 py-2 bg-primary rounded text-white">
      Save
     </button>
    </div>
   </div>
  </div>
 );
};

const IngCatButton: React.FC = () => {
 const [isPopupOpen, setIsPopupOpen] = useState(false);

 const togglePopup = () => {
  setIsPopupOpen(!isPopupOpen);
 };

 return (
  <div className="flex items-center justify-center">
   <button
    onClick={togglePopup}
    className="bg-primary text-white px-4 py-2 rounded">
    Create Ingredient Category
   </button>
   {isPopupOpen && <Popup onClose={togglePopup} />}
  </div>
 );
};

export default IngCatButton;
