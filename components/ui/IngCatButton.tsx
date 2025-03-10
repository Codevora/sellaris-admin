"use client";

import {useState} from "react";

const Popup: React.FC<{onClose: () => void}> = ({onClose}) => {
 return <div>IngCat</div>;
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
    Create Discount
   </button>
   {isPopupOpen && <Popup onClose={togglePopup} />}
  </div>
 );
};

export default IngCatButton;
