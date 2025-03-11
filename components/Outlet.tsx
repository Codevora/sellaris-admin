"use client"

import { useState } from "react"

const Outlet: React.FC = () => {
    const [selectedOutlet, setSelectedOutlet] = useState<string>("");

    const outlets = ["Outlet 1",]; 
    
     const handleOutletChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOutlet(event.target.value);
     };

    return (
     <div className="flex flex-col gap-2">

      <select
       value={selectedOutlet}
       onChange={handleOutletChange}
       className="p-2 block w-[200px] border border-gray-300 shadow-sm">
       {outlets.map((outlet, index) => (
        <option
         key={index}
         value={outlet}>
         {outlet}
        </option>
       ))}
      </select>
     </div>
    );
}

export default Outlet