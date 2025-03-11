import Outlet from "@/components/Outlet";
import {CiSearch} from "react-icons/ci";

const SemiFinishedIngredient: React.FC = () => {
 return (
  <div className="flex flex-col gap-4 h-full w-full">
   <div className="flex justify-between items-center w-full">
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
    <h1>Total : 0</h1>
   </div>
   <div className="flex flex-col w-full h-screen border border-gray-400 items-center justify-center rounded-lg p-2">
    <div className="flex flex-col gap-2 w-full items-center">
     <div className="flex items-center justify-center border-2 border-gray-400 rounded-full w-[150px] h-[150px] text-8xl text-gray-400 font-bold">
      !
     </div>
     <h1 className="text-xl font-semibold text-black/40">No Data to Display</h1>
     <p className="text-black/40">
      Learn more about{" "}
      <span className="italic text-blue-400 cursor-pointer hover:underline">
       Create Recipe
      </span>
     </p>
    </div>
   </div>
  </div>
 );
};

export default SemiFinishedIngredient;
