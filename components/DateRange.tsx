"use client";

import React, {useState} from "react";

const DateRangePicker: React.FC = () => {
 
 const [startDate, setStartDate] = useState<string>("");
 const [endDate, setEndDate] = useState<string>("");
 const [isRange, setIsRange] = useState<boolean>(true); 

 

 const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setStartDate(event.target.value);
 };

 const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const selectedEndDate = event.target.value;
  if (selectedEndDate < startDate) {
   alert("Tanggal akhir tidak boleh lebih awal dari tanggal mulai.");
  } else {
   setEndDate(selectedEndDate);
  }
 };

 const handleToggleRange = () => {
  setIsRange(!isRange);
  if (isRange) {
   setEndDate("");
  } else {
   setStartDate(""); 
  }
 };

 return (
  <div className="flex gap-5 justify-center">
   <div className="flex flex-col gap-2 justify-center">
    <div className="w-[250px] flex gap-2 items-center">
     <label className="flex text-sm font-medium text-gray-700">
      <input
       type="checkbox"
       checked={isRange}
       onChange={handleToggleRange}
       className="size-md mr-2"
      />
      Pilih Rentang Tanggal
     </label>
    </div>
    <div className="flex items-center space-x-2">
     {isRange ? (
      <>
       <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="p-2 block w-[200px] border border-gray-300 shadow-sm "
       />
       <span>-</span>
       <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        className="p-2 block w-[200px] border border-gray-300 shadow-sm"
       />
      </>
     ) : (
      <input
       type="date"
       value={startDate}
       onChange={handleStartDateChange}
       className="p-2 block w-full border border-gray-300 shadow-sm"
      />
     )}
    </div>
   </div>
  </div>
 );
};

export default DateRangePicker;
