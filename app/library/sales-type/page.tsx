import SalesTypeButton from "@/components/ui/SalesTypeButton";
import SalesTypePage from "@/components/ui/SalesTypePage";

const data = [
 {name: "A", gratuity: "0 Taxes", status: "Active"},
 {name: "B", gratuity: "1 Taxes", status: "Active"},
];
const SalesType = () => {
 return (
  <div className="flex flex-col gap-4 h-auto w-full bg-[#f4f4f]">
   <div className="flex justify-between">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Sales Type
    </h1>
    <SalesTypeButton />
   </div>
   <SalesTypePage data={data} />
  </div>
 );
};

export default SalesType;
