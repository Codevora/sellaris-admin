export default function Home() {
 return (
  <div className="w-screen flex flex-col gap-4 p-5">
   <h1 className="text-3xl font-bold text-primary">Laporan Penjualan</h1>
   <div className="border border-primary rounded-lg w-full h-[400px] bg-primary p-4 flex gap-5 ">
    <div className="w-[50%] border border-primary h-full rounded-lg p-3 bg-[#f4f4f4]">
     <h1 className="text-2xl font-semibold">Hari Ini</h1>
    </div>
    <div className=" border border-primary rounded-lg h-full w-[25%] p-3 bg-[#f4f4f4]">
     <h1 className="text-2xl font-semibold">Minggu Ini</h1>
    </div>
    <div className=" border border-primary rounded-lg h-full w-[25%] p-3 bg-[#f4f4f4]">
     <h1 className="text-2xl font-semibold">Bulan Ini</h1>
    </div>
   </div>
   <div className="flex gap-4 w-full justify-between h-[400px]">
    <div className="flex flex-col gap-4">
     <h1 className="text-3xl font-bold text-primary">Jumlah Transaksi</h1>
     <div className="border rounded-lg w-[800px] h-full bg-[#f4f4f4] p-4"></div>
    </div>
    <div className="flex flex-col gap-4">
     <h1 className="text-3xl font-bold text-primary">Total Omset</h1>
     <div className="border rounded-lg w-[400px] h-[450px] bg-[#f4f4f4] p-4"></div>
    </div>
    <div className="flex flex-col gap-4">
     <h1 className="text-3xl font-bold text-primary">Peringatan Stok</h1>
     <div className="border rounded-lg w-[400px] h-[450px] bg-[#f4f4f4] p-4"></div>
    </div>
   </div>
  </div>
 );
}
