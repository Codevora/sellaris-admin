import {IoIosSearch} from "react-icons/io";

const PromoPage: React.FC = () => {
 return (
  <div className="flex flex-col gap-4 w-full">
   {/*Header*/}
   <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between w-full">
     <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">Promo</h1>
     <button className="px-4 py-2 bg-primary rounded text-white">
      Create Promo
     </button>
    </div>
    <div className="flex gap-4 max-w-[500px]">
     <select
      name=""
      id=""
      className="w-[250px] border border-gray-400 bg-transparent items-center rounded px-4 py-2 text-gray-400 focus:outline-none">
      <option className="">All Options</option>
     </select>
     <form className="flex justify-between w-[300px] border border-gray-400 bg-transparent items-center rounded-full px-4 py-2">
      <input
       type="text"
       placeholder="Search Promo"
       className="w-full bg-transparent focus:outline-none"
      />
      <IoIosSearch />
     </form>
    </div>
    <hr className="w-full border border-gray-300" />
   </div>

   {/*body*/}
   {/*Body*/}
   <div className="flex flex-col gap-2 items-center justify-center h-screen border">
    <div className="rounded-full border-2 border-gray-400 w-[120px] h-[120px] flex items-center justify-center font-bold text-7xl text-gray-400">
     X
    </div>
    <h1 className="font-semibold">No Data to Display</h1>
    <p>
     Learn more about <span className="text-blue-400 italic">Create Promo</span>
     .
    </p>
   </div>
  </div>
 );
};

export default PromoPage;
