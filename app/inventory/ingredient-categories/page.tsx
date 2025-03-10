import IngCatButton from "@/components/ui/IngCatButton";
import IngCatTable from "@/components/ui/IngCatTable";

const data = [{name: "1", stock: "1"}];

const IngredientCategories = () => {
 return (
  <div className="flex flex-col h-auto w-full bg-[#f4f4f]">
   <div className="flex justify-between">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Ingredient Categories
    </h1>
    <IngCatButton />
   </div>
   <IngCatTable data={data} />
  </div>
 );
};

export default IngredientCategories;
