import ProductSalesChart from "../components/FinancialChart";

const Home: React.FC = () => {
 return (
  <div className="p-5 flex flex-col gap-1 w-screen bg-[#f4f4f4]">
    <h1 className="px-4 text-3xl font-bold text-primary">Laporan Penjualan</h1>
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
   <div className="flex gap-4 w-full justify-between h-[400px]">
    <div className="flex flex-col gap-4">
     <h1 className="text-3xl font-bold text-primary">Jumlah Transaksi</h1>
     <div className="border rounded-lg w-[800px] h-full bg-white p-4"></div>
    </div>
    <div className="flex flex-col gap-4">
     <h1 className="text-3xl font-bold text-primary">Total Omset</h1>
     <div className="border rounded-lg w-[400px] h-[450px] bg-white p-4"></div>
    </div>
    <div className="flex flex-col gap-4">
     <h1 className="text-3xl font-bold text-primary ">Peringatan Stok</h1>
     <div className="border rounded-lg w-[400px] h-[450px] bg-white p-4"></div>
    </div>
   </div>
  </div>
 );
};

export default Home;
