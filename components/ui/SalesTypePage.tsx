interface SalesTypePageProps {
 data: Array<{
  name: string;
  gratuity: string;
  status: string;
 }>;
}

const SalesTypePage: React.FC<SalesTypePageProps> = ({data}) => {
 return (
  <div className="overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead className="bg-gray-400">
     <th className="border border-gray-200 px-4 py-2">Name</th>
     <th className="border border-gray-200 px-4 py-2">Gratuity Applied</th>
     <th className="border border-gray-200 px-4 py-2">Status</th>
    </thead>

    <tbody>
     {data.map((item) => (
      <tr
       key={item.name}
       className="hover:bg-gray-50 cursor-pointer">
       <td className="border border-gray-200 px-4 py-2">{item.name}</td>
       <td className="border border-gray-200 px-4 py-2">{item.gratuity}</td>
       <td className="border border-gray-200 px-4 py-2 text-primary">
        {item.status}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default SalesTypePage;
