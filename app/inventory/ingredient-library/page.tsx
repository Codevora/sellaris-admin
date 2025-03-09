import IngredientsLibButton from "@/components/ui/IngredientsLibButton";

const IngredientLibrary = () => {
 return (
  <div className="flex flex-col h-auto w-auto bg-[#f4f4f]">
   <div className="flex justify-between w-full">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Ingredient Library
    </h1>
    <IngredientsLibButton/>
   </div>
  </div>
 );
};

export default IngredientLibrary;
