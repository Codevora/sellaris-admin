;import DiscountTable from "@/components/ui/DiscountTable";
import DiscountButton from "@/components/ui/DiscountButton";

const Discount: React.FC = () => {
 return (
  <div className="flex flex-col gap-4 h-auto w-full bg-[#f4f4f]">
   <div className="flex justify-between">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Discounts
    </h1>
    <DiscountButton />
   </div>
   <DiscountTable />
  </div>
 );
};

export default Discount;
