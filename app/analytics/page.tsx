const Analytics = () => {
 return (
  <div className="w-screen p-5 bg-[#f4f4f4]">
   <h1 className="text-3xl font-bold text-primary hidden">Analisis Omset</h1>
   <div className="flex flex-col">
    <div className="grid grid-cols-3 gap-5 w-full h-[250px] ">
     <div className="border rounded-lg w-full bg-gray-500"></div>
     <div className="border rounded-lg w-full bg-gray-500"></div>
     <div className="border rounded-lg w-full bg-gray-500"></div>
    </div>
   </div>
  </div>
 );
};

export default Analytics;
