import DateRangePicker from "@/components/DateRange";

const Sales: React.FC = () => {
 return (
  <div className="lg:ml-[240px] 2xl:ml-[270px] py-10 flex flex-col min-h-screen w-screen bg-[#f4f4f]">
   <div className="flex flex-col gap-3 px-4">
    <h1 className="lg:text-xl 2xl:text-3xl font-bold text-primary">Sales</h1>
    <div className="flex gap-5 w-[400px]">
     <DateRangePicker />
    </div>
    <hr className="w-full border-2" />
   </div>
  </div>
 );
};

export default Sales;
