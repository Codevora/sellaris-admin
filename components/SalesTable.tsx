"use client"

import React from "react";

interface SalesTableProps {
 data: Array<{name: string; id: number; age: number}>;
}

const SalesTable: React.FC<SalesTableProps> = ({data}) => {
 return (
  <div className="overflow-x-auto">
   <table className="w-[770px] 2xl:w-[1395px] border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="border border-gray-200 px-4 py-2">Sales Type</th>
      <th className="border border-gray-200 px-4 py-2">Count</th>
      <th className="border border-gray-200 px-4 py-2">Total Collected</th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.id}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2">{item.name}</td>
       <td className="border border-gray-200 px-4 py-2">{item.id}</td>
       <td className="border border-gray-200 px-4 py-2">{item.age}</td>
      </tr>
     ))}
    </tbody>
    
   </table>
  </div>
 );
};

export default SalesTable;
