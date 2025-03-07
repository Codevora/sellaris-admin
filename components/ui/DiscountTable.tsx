const DiscountHeader = [
 {name: "Discount Name"},
 {name: "Amount"},
 {name: "Outlet"},
];

const DiscountContent = {
 items: [
  {DiscountName: "Discount 20%", Amount: "20%", Outlet: "Outlet 1"},
  {DiscountName: "Discount 50%", Amount: "50%", Outlet: "Outlet 1"},
 ],
};

const DiscountTable: React.FC = () => {
 return (
  <div className="flex flex-col">
   <div className="border bg-black/20 w-full flex gap-[250px] p-3">
    {DiscountHeader.map((item, index) => (
     <div
      key={index}
      className="flex justify-between">
      <h1 className="font-semibold">{item.name}</h1>
     </div>
    ))}
   </div>
   <div className=" w-full flex flex-col gap-5 max-h-[300px] overflow-y-auto">
    {DiscountContent.items.map((item, index) => (
     <div
      key={index}
      className="flex gap-[270px] border-b w-full p-3 hover:bg-black/10">
      <h1>{item.DiscountName}</h1>
      <h1>{item.Amount}</h1>
      <h1>{item.Outlet}</h1>
     </div>
    ))}
   </div>
  </div>
 );
};

export default DiscountTable;
