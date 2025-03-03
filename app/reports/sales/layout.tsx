import SalesDropdown from "@/components/SalesDropdown";

const SalesLayout = ({children}: {children: React.ReactNode}) => {
 return (
  <div className="lg:ml-[240px] 2xl:ml-[270px] flex gap-10 h-auto w-auto bg-[#f4f4f]">
   <div className="flex gap-5 px-4 w-full bg-[#f4f4f]">
    <div className="flex flex-col gap-2">
     <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">Sales</h1>
     <SalesDropdown />
    </div>
    {children}
   </div>
  </div>
 );
};

export default SalesLayout;
