"use client";

import {useState} from "react";
import {useRouter, usePathname} from "next/navigation";
import Link from "next/link";


const RecipesNav: React.FC = () => {
 const pathname = usePathname();
 const router = useRouter();
 const [selectedDropdown, setSelectedDropdown] = useState<string>("");

 const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
   router.push(`/inventeroy/${selectedValue}`);
  }
  setSelectedDropdown(event.target.value);
 };

 const RecipesPage = [
  {name: "Item", path: "/inventory/recipes"},
  {name: "Semi Finished Ingredient", path: "/inventory/recipes/semi-finished-ingredient"},
 ];

 return (
  <div className=" flex flex-col gap-4 h-auto w-auto bg-[#f4f4f]">
   <div className="flex gap-5 ">
    {RecipesPage.map((item, index) => (
     <ul
      key={index}
      className="flex">
      <div
       onClick={() => handleDropdown(event as any)}
       className="leading-tight">
       <Link
        href={item.path}
        className={` ${
         pathname === item.path
          ? " border-primary border-b-2"
          : "hover:border-primary hover:border-b-2  border-primary"
        } py-2 transition-colors duration-300 ease-in-out`}>
        {item.name}
       </Link>
      </div>
     </ul>
    ))}
   </div>
  </div>
 );
};

export default RecipesNav;
