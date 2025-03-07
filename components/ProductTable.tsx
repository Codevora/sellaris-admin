interface TableProps {
 data: Array<{
  id: number;
  name: string;
  age: number;
  description: string;
  status: string;
 }>;
}

const ProductTable: React.FC<TableProps> = ({data}) => {
 return (
  <div className="overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="border border-gray-200 px-4 py-2">Name</th>
      <th className="border border-gray-200 px-4 py-2">Category</th>
      <th className="border border-gray-200 px-4 py-2">Pricing</th>
      <th className="border border-gray-200 px-4 py-2">In Stock</th>
      <th className="border border-gray-200 px-4 py-2">Stock Alert</th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.id}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2">{item.id}</td>
       <td className="border border-gray-200 px-4 py-2">{item.name}</td>
       <td className="border border-gray-200 px-4 py-2">{item.age}</td>
       <td className="border border-gray-200 px-4 py-2">{item.description}</td>
       <td className="border border-gray-200 px-4 py-2">{item.status}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default ProductTable;
