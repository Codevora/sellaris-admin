"use client";
import React, {useState} from "react";
import FlyoutEmployee from "@/components/ui/FlyoutEmployee";
import EmployeeButton from "@/components/ui/EmployeeButton";

const EmployeeHeader = [
 {name: "Name"},
 {name: "Employees Asigned"},
 {name: "Access"},
];

const EmployeeAdmin = [
 {
  name: "Administrator",
  asigned: "",
  access: "Back-office & App",
  description: "Back-office & App",
 },
];

const EmployeeCashier = [
 {
  name: "Cashier",
  asigned: "Admin 1",
  access: "App",
  description: "App",
 },
];

const EmployeeAccess = () => {
 const [isPopupOpen, setIsPopupOpen] = useState(false);
 const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
 const [flyoutContent, setFlyoutContent] = useState("");
 const [flyoutPosition, setFlyoutPosition] = useState<{
  top: number;
  left: number;
 } | null>(null);

 const handleOpenPopup = () => {
  setIsPopupOpen(true);
 };

 const handleClosePopup = () => {
  setIsPopupOpen(false);
 };

 const handleMouseEnter = (
  content: string,
  event: React.MouseEvent<HTMLDivElement>
 ) => {
  setFlyoutContent(content);
  setIsFlyoutVisible(true);
  const {clientX, clientY} = event;

  const flyoutWidth = 200;
  setFlyoutPosition({top: clientY + 10, left: clientX - flyoutWidth - 10});
 };

 const handleMouseLeave = () => {
  setIsFlyoutVisible(false);
 };
 return (
  <div className="flex flex-col gap-4 h-auto w-auto bg-[#f4f4f4]">
   <div className="flex justify-between">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Employee
    </h1>
    <button
     onClick={handleOpenPopup}
     className="px-4 py-2 bg-primary text-white rounded">
     Add Employee Roles
    </button>
    <EmployeeButton
     isOpen={isPopupOpen}
     onClose={handleClosePopup}
    />
   </div>
   <div className="flex flex-col">
    <div className="flex justify-between">
     {EmployeeHeader.map((item, index) => (
      <div
       key={index}
       className="w-full font-bold p-2 bg-black/10 text-black">
       {item.name}
      </div>
     ))}
    </div>
    <div className="flex flex-col w-full">
     {EmployeeAdmin.map((item, index) => (
      <div
       key={index}
       className="border-b w-full p-2 flex justify-between items-center hover:bg-black/5 text-black">
       <div className="flex w-full items-start">{item.name}</div>
       <div className="flex w-full items-start px-6">{item.asigned}</div>
       <div className="flex justify-between w-full items-start px-5">
        {item.access}
        <div
         onMouseEnter={(e) => handleMouseEnter(item.description, e)}
         onMouseLeave={handleMouseLeave}
         onClick={handleOpenPopup}
         className="bg-primary p-1 px-4 rounded text-white items-center cursor-pointer">
         Edit
        </div>
        {isFlyoutVisible && flyoutPosition && (
         <FlyoutEmployee
          isVisible={isFlyoutVisible}
          content={flyoutContent}
          style={{
           position: "absolute",
           top: flyoutPosition.top,
           left: flyoutPosition.left,
          }}
         />
        )}
       </div>
      </div>
     ))}
    </div>
    <div className="flex flex-col w-full">
     {EmployeeCashier.map((item, index) => (
      <div
       key={index}
       className="border-b w-full p-2 flex justify-between items-center hover:bg-black/5 text-black">
       <div className="flex w-full items-start">{item.name}</div>
       <div className="flex w-full items-start px-6">{item.asigned}</div>
       <div className="flex justify-between w-full items-start px-5">
        {item.access}
        <div
         onMouseEnter={(e) => handleMouseEnter(item.description, e)}
         onMouseLeave={handleMouseLeave}
         onClick={handleOpenPopup}
         className="bg-primary p-1 px-4 rounded text-white items-center cursor-pointer">
         Edit
        </div>
        {isFlyoutVisible && flyoutPosition && (
         <FlyoutEmployee
          isVisible={isFlyoutVisible}
          content={flyoutContent}
          style={{
           position: "absolute",
           top: flyoutPosition.top,
           left: flyoutPosition.left,
          }}
         />
        )}
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default EmployeeAccess;
