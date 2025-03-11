import RecipesNav from "@/components/ui/Recipes";

const RecipesLayout = ({children}: {children: React.ReactNode}) => {
 return (
  <div className="flex flex-col gap-4 h-auto w-auto bg-[#f4f4f]">
   <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">Recipes</h1>
   <RecipesNav />
   <hr className="w-full border"/>
   {children}
  </div>
 );
};

export default RecipesLayout;
