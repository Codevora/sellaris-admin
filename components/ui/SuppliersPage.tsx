import {IoIosSearch} from "react-icons/io";
const SuppliersPage = () => {
 return (
  <div className="flex flex-col px-3 gap-4">
   {/*Header*/}
   <div className="flex flex-col gap-4">
    <div className="flex justify-between items-center">
     <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
      Suppliers
     </h1>

     <button className="px-4 py-2 bg-primary rounded text-white">
      Add Supplier
     </button>
    </div>
    <form className="flex items-center border border-gray-400 px-4 py-2 rounded-full bg-transparent justify-between max-w-xs">
     <input
      type="text"
      placeholder="Search"
      className="focus:outline-none bg-transparent w-full"
     />
     <IoIosSearch className="fill-[gray]" />
    </form>
    <hr className="border border-gray-300 w-full" />
   </div>

   {/*Body*/}
   <div className="flex flex-col gap-2 items-center justify-center h-screen border">
    <div className="rounded-full border-2 border-gray-400 w-[120px] h-[120px] flex items-center justify-center font-bold text-7xl text-gray-400">
     X
    </div>
    <h1 className="font-semibold">No Data to Display</h1>
    <p>Learn more about <span className="text-blue-400 italic">Add Supplier</span>.</p>
   </div>
  </div>
 );
};

export default SuppliersPage;
