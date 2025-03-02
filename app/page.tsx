import PieChart from "@/components/PieChart";
import ProductSalesChart from "../components/FinancialChart";

const Home: React.FC = () => {
 return (
  <div className="ml-[270px] py-4 flex flex-col gap-1 min-h-screen w-screen bg-[#f4f4f4]">
   <h1 className="px-4 text-3xl font-bold text-primary">Dashboard</h1>
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
   <div className="p-4 flex flex-col gap-4 w-full ">
    <h1 className="text-3xl font-bold text-primary">Jumlah Transaksi</h1>
    <div className="p-4 flex flex-row gap-10 border rounded-lg bg-white h-[400px] shadow-md">
     <PieChart
      title="Diagram Transaksi Harian"
      data={[150, 100, 50]} // Jumlah transaksi untuk Makanan, Minuman, Produk Keluar, Pendapatan
      labels={["Makanan", "Minuman", "Refund"]}
     />
     <div className="grid grid-cols-2 gap-4 w-[650px] justify-center h-full">
      <div className="p-3 flex flex-col justify-center gap-3 rounded-lg mt-2  border shadow-md">
       <h1 className="text-lg font-semibold text-gray-500/60">Produk Keluar</h1>
       <div className="flex justify-start items-center ">
        <p className="text-3xl font-bold text-primary">300 Produk</p>
       </div>
      </div>
      <div className="p-3 flex flex-col  justify-center gap-3 rounded-lg mt-2  border shadow-md">
       <h1 className="text-lg font-semibold text-gray-500/60">
        Transaksi Gagal
       </h1>
       <div className="flex justify-start items-center ">
        <p className="text-3xl font-bold text-[#d04444]">40 Produk</p>
       </div>
      </div>
      <div className="p-3 flex flex-col  justify-center gap-3 rounded-lg mt-2  border shadow-md">
       <h1 className="text-lg font-semibold  text-gray-500/60">
        Total Pendapatan Harian
       </h1>
       <div className="flex justify-start items-center ">
        <p className="text-3xl font-bold text-primary ">IDR. 5,312,000,-</p>
       </div>
      </div>
      <div className="p-3 flex flex-col  justify-center gap-3 rounded-lg mt-2 border shadow-md">
       <h1 className="text-lg font-semibold  text-gray-500/60">
        Total Pajak Harian
       </h1>
       <div className="flex justify-start items-center ">
        <p className="text-3xl font-bold text-primary">IDR. 531,200,-</p>
       </div>
      </div>
     </div>
     <div className="border w-[350px] shadow-md  rounded-lg">
      <div className="border-b p-4">
       <h1 className="text-2xl font-bold text-gray-500/60">Informasi Stok</h1>
      </div>
      <div className="p-3 flex justify-between border-b font-medium text-gray-500/60">
       <p className="text-primary">
        1. <span>Barang A</span>
       </p>
       <p>0</p>
      </div>
      <div className="p-3 flex justify-between border-b font-medium text-gray-500/60">
       <p className="text-primary">
        2. <span>Barang B</span>
       </p>
       <p>0</p>
      </div>
      <div className="p-3 flex justify-between border-b font-medium text-gray-500/60">
       <p className="text-primary">
        3. <span>Barang C</span>
       </p>
       <p>0</p>
      </div>
      <div className="p-3 flex justify-between border-b font-medium text-gray-500/60">
       <p className="text-primary">
        4. <span>Barang D</span>
       </p>
       <p>0</p>
      </div>
      <div className="p-3 flex justify-between border-b font-medium text-gray-500/60">
       <p className="text-primary">
        5. <span>Barang E</span>
       </p>
       <p>0</p>
      </div>
      <div className="p-3 flex justify-between border-b font-medium text-gray-500/60">
       <p className="text-primary">
        6. <span>Barang F</span>
       </p>
       <p>0</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Home;

{
 /*<div className="flex flex-col gap-4">
     <h1 className="px-4 text-3xl font-bold text-primary">Total Omset</h1>
     <div className="border rounded-lg w-[400px] h-[450px] bg-white p-4"></div>
    </div>
    <div className="flex flex-col gap-4">
     <h1 className="px-4 text-3xl font-bold text-primary ">Peringatan Stok</h1>
     <div className="border rounded-lg w-[400px] h-[450px] bg-white p-4"></div>
    </div>*/
}
