interface IngLibTableProps {
 data: Array<{
  name: string;
  category: string;
  stock: string;
  unit: string;
  alert: string;
 }>;
}

const IngLibTable: React.FC<IngLibTableProps> = ({data}) => {
 return (
  <div className="overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="border border-gray-200 px-4 py-2">Name</th>
      <th className="border border-gray-200 px-4 py-2">Category</th>
      <th className="border border-gray-200 px-4 py-2">In Stock</th>
      <th className="border border-gray-200 px-4 py-2">Unit</th>
      <th className="border border-gray-200 px-4 py-2">Stock Alert</th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.name}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2 w-[300px]">
        {item.name}
       </td>
       <td className="border border-gray-200 px-4 py-2 w-[300px]">
        {item.category}
       </td>
       <td className="border border-gray-200 px-4 py-2 w-[100px] text-center">
        {item.stock}
       </td>
       <td className="border border-gray-200 px-4 py-2 w-[150px] text-center">
        {item.unit}
       </td>
       <td className="border border-gray-200 px-4 py-2 text-red text-center">
        {item.alert}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default IngLibTable;
