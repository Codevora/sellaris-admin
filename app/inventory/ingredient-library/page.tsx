import IngLibTable from "@/components/ui/IngLibTable";
import RawIngredientButton from "@/components/ui/RawIngredient";
import SemiFinishedIngredientButton from "@/components/ui/SemiFinishedIngredient";

const data = [{name: "Syrup", category: "Bahan Baku", stock: "2", unit: "gram(gr)", alert: "Low"}];

const IngredientLibrary = () => {
 return (
  <div className="flex flex-col h-auto w-full gap-4 bg-[#f4f4f]">
   <div className="flex justify-between w-full">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Ingredient Library
    </h1>
    <div className="flex gap-2 items-center">
     <p>Total : 0</p>
     <SemiFinishedIngredientButton />
     <RawIngredientButton />
    </div>
   </div>
   <IngLibTable data={data} />
  </div>
 );
};

export default IngredientLibrary;
