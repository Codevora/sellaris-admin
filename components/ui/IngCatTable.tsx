interface IngCatTableProps {
 data: Array<{
  name: string;
  stock: string;
 }>;
}

const IngCatTable: React.FC<IngCatTableProps> = ({data}) => {
 return (
  <div className="overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="text-start border border-gray-200 px-4 py-2 w-[400px]">
       Ingredient Category Name
      </th>
      <th className="text-start border border-gray-200 px-4 py-2 ">
       Ingredient Stock
      </th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.name}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2">{item.name}</td>
       <td className="flex justify-between border border-gray-200 px-4 py-2 items-center">
        {item.stock}
        <button className="border border-gray-400 rounded px-4 py-2">
         Assign to Ingredient
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default IngCatTable;
