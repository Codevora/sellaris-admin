interface ProductTableProps {
 data: Array<{
  name: string;
  items: string;
  pricing: string;
  outlet: string;
  status: string;
 }>;
}
const BundlingTable: React.FC<ProductTableProps> = ({data}) => {
 return (
  <div className=" overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="border border-gray-200 px-4 py-2">Name</th>
      <th className="border border-gray-200 px-4 py-2">Items</th>
      <th className="border border-gray-200 px-4 py-2">Pricing</th>
      <th className="border border-gray-200 px-4 py-2">Outlet</th>
      <th className="border border-gray-200 px-4 py-2">Status</th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.name}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2">{item.name}</td>
       <td className="border border-gray-200 px-4 py-2">{item.items}</td>
       <td className="border border-gray-200 px-4 py-2">{item.pricing}</td>
       <td className="border border-gray-200 px-4 py-2">{item.outlet}</td>
       <td className="border border-gray-200 px-4 py-2 text-red">{item.status}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default BundlingTable;
