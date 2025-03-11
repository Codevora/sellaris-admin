"use client";
import {useState} from "react";
import {CiSearch} from "react-icons/ci";

const items = [{name: "Syrup"}, {name: "Rice"}];

interface IngCatTableProps {
 data: Array<{
  name: string;
  stock: string;
 }>;
}

const Popup: React.FC<{onClose: () => void}> = ({onClose}) => {
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
 };

 const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
   <div className="w-[500px] max-h-[400px] rounded-lg">
    {/* Header*/}
    <div className="flex flex-col gap-2 bg-primary rounded-t-lg items-center justify-center">
     <h1 className="p-2 font-lg text-white">Assign to Ingredient</h1>
    </div>

    {/*Content*/}
    <div className="flex flex-col justify-between">
     <div className="flex flex-col bg-white p-2 w-full h-full overflow-y-auto">
      <div className="flex justify-between items-center p-2 rounded border w-full">
       <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="focus:outline-none w-full"
       />
       <CiSearch />
      </div>
      <ul className="mt-4">
       {(searchTerm ? filteredItems : items).map((item) => (
        <li
         key={item.name}
         className="flex justify-between items-center p-2">
         {item.name}
         <input
          type="checkbox"
          className="size-4"></input>
        </li>
       ))}
      </ul>
     </div>
    </div>
    <div className="flex p-2 gap-2 justify-end rounded-b-lg bg-white">
     <button
      onClick={onClose}
      className="text-white rounded px-4 py-2 bg-primary">
      Move Selected Ingredient
     </button>
    </div>
   </div>
  </div>
 );
};

const IngCatTable: React.FC<IngCatTableProps> = ({data}) => {
 const [openPopup, setOpenPopup] = useState(false);

 const togglePopup = () => {
  setOpenPopup(!openPopup);
 };
 return (
  <div className="overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="text-start border border-gray-200 px-4 py-2 w-[400px]">
       Ingredient Category Name
      </th>
      <th className="text-start border border-gray-200 px-4 py-2 ">
       Ingredient Stock
      </th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.name}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2">{item.name}</td>
       <td className="flex justify-between border border-gray-200 px-4 py-2 items-center">
        {item.stock}
        <button
         onClick={togglePopup}
         className="border border-gray-400 rounded px-3 py-1">
         Assign to Ingredient
        </button>
        {openPopup && <Popup onClose={togglePopup} />}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default IngCatTable;
