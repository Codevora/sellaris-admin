import ProductSalesChart from "../components/FinancialChart";;

const SalesSummary = {
 items: [
  {
   name: "Gross Sales",
   description: "Rp.0,-",
  },
  {
   name: "Net Sales",
   description: "Rp.0,-",
  },
  {
   name: "Gross Profit",
   description: "Rp.0,-",
  },
  {
   name: "Transaction",
   description: "0",
  },
  {
   name: "Average Sales Per Transaction",
   description: "Rp.0,-",
  },
  {
   name: "Gross Margin",
   description: "Rp.0,-",
  },
 ],
};

const Home: React.FC = () => {
 return (
  <div className="lg:ml-[240px] 2xl:ml-[270px] flex flex-col h-auto w-auto bg-[#f4f4f4]">
   <h1 className="px-4 lg:text-2xl 2xl:text-3xl font-bold text-primary">
    Dashboard
   </h1>
   <div className="grid grid-cols-3">
    <div className=" p-4 rounded-lg w-full">
     <ProductSalesChart
      title="Hari Ini"
      productNames={[
       "Produk A",
       "Produk B",
       "Produk C",
       "Produk D",
       "Produk E",
      ]}
      salesData={[700, 600, 500, 400, 300]} // Jumlah penjualan
     />
    </div>
    <div className=" p-4 rounded-lg w-full">
     <ProductSalesChart
      title="Minggu Ini"
      productNames={[
       "Produk A",
       "Produk B",
       "Produk C",
       "Produk D",
       "Produk E",
      ]}
      salesData={[600, 500, 400, 300, 200]} // Jumlah penjualan
     />
    </div>
    <div className=" p-4 rounded-lg w-full">
     <ProductSalesChart
      title="Bulan Ini"
      productNames={[
       "Produk A",
       "Produk B",
       "Produk C",
       "Produk D",
       "Produk E",
      ]}
      salesData={[500, 400, 300, 200, 100]} // Jumlah penjualan
     />
    </div>
   </div>

   <div className="px-5 flex flex-col gap-4 lgw-full 2xl:w-full">
    <h1 className="lg:text-xl 2xl:text-3xl font-bold text-primary">
     Sales Summary
    </h1>
    <ul className="grid grid-cols-3 gap-4 lg:h-[220px] 2xl:h-[300px]">
     {SalesSummary.items.map((item, index) => (
      <li
       key={index}
       className="border rounded-lg w-full bg-white p-4 flex flex-col justify-center text-black/30">
       {item.name}
       <p className="text-xl text-black">{item.description}</p>
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Home;