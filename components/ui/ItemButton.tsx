"use client";
import {useState} from "react";
import {CiSearch} from "react-icons/ci";
import Outlet from "../Outlet";

const items = [{name: "Syrup"}, {name: "Rice"}];

const IngredientPopup: React.FC<{onClose: () => void}> = ({onClose}) => {
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
 };

 const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
 );
 return (
  <div className="flex flex-col justify-between gap-2 border border-gray-400 rounded p-2">
   <div className="p-2 flex items-center justify-between w-full border">
    <input
     type="text"
     placeholder="Search Ingredient"
     value={searchTerm}
     onChange={handleSearchChange}
     className="focus:outline-none w-full"
    />
    <CiSearch />
   </div>
   <ul>
    {(searchTerm ? filteredItems : items).map((item) => (
     <button
      key={item.name}
      className="flex justify-between items-center p-2 w-full hover:bg-black/20">
      {item.name}
     </button>
    ))}
   </ul>
   <div className="flex justify-between">
    <button
     onClick={onClose}
     className="px-3 py-1 bg-white border text-black/40">
     Cancel
    </button>
    <button
     disabled
     onClick={onClose}
     className="px-3 py-1 bg-black/40 text-white rounded">
     Add
    </button>
   </div>
  </div>
 );
};

const Popup: React.FC<{onClose: () => void}> = ({onClose}) => {
 const [openDropdown, setOpenDropdown] = useState<string>("");
 const [openDropdown2, setOpenDropdown2] = useState<string>("");
 const [openIngPopup, setOpenIngPopup] = useState(false);

 const Item = [{name: "Syrup"}, {name: "Rice"}];
 const Variant = [{name: ""}];

 const toggleIngPopup = () => {
  setOpenIngPopup(!openIngPopup);
 };

 const toggleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setOpenDropdown(event.target.value);
 };

 const toggleDropdown2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setOpenDropdown2(event.target.value);
 };

 return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
   <div className="w-[500px] max-h-[450px] overflow-y-auto flex flex-col justify-between gap-4 bg-white rounded-lg">
    <div className="flex flex-col gap-2">
     {/*Header*/}
     <div className="flex flex-col w-full rounded-t-lg bg-white">
      <h1 className="p-2 font-lg">Choose Item</h1>
      <hr className="w-full border" />
     </div>

     {/*Content*/}
     <div className="flex flex-col gap-2 p-3">
      <form className="flex flex-col gap-2">
       <label>Select an Item</label>
       <select
        value={openDropdown}
        onChange={toggleDropdown}
        className="p-2 w-full border border-gray-300 text-black focus:ring-0 focus:outline-none">
        {Item.map((item, index) => (
         <option
          key={index}
          value={item.name}>
          {item.name}
         </option>
        ))}
       </select>
      </form>
      <form className="flex flex-col gap-2">
       <label>Choose Variant</label>
       <hr className="w-full border" />
       <select
        disabled
        value={openDropdown2}
        onChange={toggleDropdown2}
        className="p-2 w-full border border-gray-300 text-black focus:ring-0 focus:outline-none">
        {Variant.map((item, index) => (
         <option
          key={index}
          value={item.name}>
          Variant Option
          {item.name}
         </option>
        ))}
       </select>
      </form>
      <div className="flex flex-col gap-4">
       <div className="flex flex-col gap-2">
        <h1 className="text-[14px] text-black/60">Recipe</h1>
        <hr className="w-full" />
       </div>
       <button
        onClick={toggleIngPopup}
        className="w-full px-4 py-2 bg-primary text-white rounded">
        Add Ingredient
       </button>
       {openIngPopup && <IngredientPopup onClose={toggleIngPopup} />}
      </div>
     </div>
    </div>
    <div className="flex gap-2 justify-end p-2">
     <button
      onClick={onClose}
      className="bg-red text-white px-4 py-2 rounded">
      Cancel
     </button>
     <button
      onClick={onClose}
      className="bg-primary text-white px-4 py-2 rounded">
      Save
     </button>
    </div>
   </div>
  </div>
 );
};

interface TableProps {
 data: Array<{
  name: string;
  variant: string;
  ingredient: string;
  alert: string;
 }>;
}

const Table: React.FC<TableProps> = ({data}) => {
 return (
  <div className="overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="border border-gray-200 px-4 py-2">Name</th>
      <th className="border border-gray-200 px-4 py-2">Variant</th>
      <th className="border border-gray-200 px-4 py-2">Ingredient</th>
      <th className="border border-gray-200 px-4 py-2">
       Ingredient Stock Alert
      </th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.name}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2 w-[350px]">
        {item.name}
       </td>
       <td className="border border-gray-200 px-4 py-2">{item.variant}</td>
       <td className="border border-gray-200 px-4 py-2  text-center">
        {item.ingredient}
       </td>
       <td className="border border-gray-200 px-4 py-2 w-[300px] text-red text-center">
        {item.alert}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

const data = [
 {name: "Syrup", variant: "1", ingredient: "1 Ingredient", alert: "Out"},
 {name: "Rice", variant: "1", ingredient: "10 Ingredient", alert: "Out"},
];
const ItemButton: React.FC = () => {
 const [searchTerm, setSearchTerm] = useState("");

 const [openPopup, setOpenPopup] = useState(false);

 const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
 };

 const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
 );
 const togglePopup = () => {
  setOpenPopup(!openPopup);
 };

 return (
  <div className="flex flex-col gap-4 w-full h-full">
   <div className="flex gap-2 items-center justify-between">
    <div className="flex gap-4 items-center ">
     <Outlet />
     <div className="flex justify-between gap-2 items-center rounded-full border border-gray-400 p-2 px-4 bg-white">
      <input
       type="text"
       placeholder="Search"
       className="focus:outline-none"
      />
      <CiSearch />
     </div>
    </div>

    <div className="flex items-center gap-2">
     <h1>Total : 2</h1>
     <button
      onClick={togglePopup}
      className="bg-primary text-white px-4 py-2 rounded">
      Create Recipe
     </button>
    </div>
    {openPopup && <Popup onClose={togglePopup} />}
   </div>

   <Table data={data} />
  </div>
 );
};

export default ItemButton;
