const SalesItems = [
 {
  title: "Gross Sales",
  value: "Rp.0,-",
 },
 {
  title: "Discounts",
  value: "(Rp.0,-)",
 },
 {
  title: "Refunds",
  value: "Rp.0,-",
 },
];

const NetSale = {
 name: "Net Sales",
 items: [
  {
   name: "Gratuity",
   value: "Rp.0,-",
  },
  {
   name: "Tax",
   value: "Rp.0,-",
  },
  {
   name: "Rounding",
   value: "Rp.0,-",
  },
 ],
};

const TotalCollected = [
 {
  name:"Total Collected",
  value:"Rp.0,-",
 },
];

const SalesSummary: React.FC = () => {
 return (
  <div className="h-auto w-auto bg-[#f4f4f4]">
   <div className="flex flex-col gap-2">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-black/20">
     Sales Summary
    </h1>
    <div className="flex flex-col gap-2 w-[770px]">
     <ul className="w-full flex flex-col gap-3">
      {SalesItems.map((item, index) => (
       <li
        key={index}
        className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p>{item.value}</p>
       </li>
      ))}
     </ul>
     <div className="w-full border"></div>
     <ul className="w-full flex flex-col gap-3">
      {NetSale.items.map((item, index) => (
       <li
        key={index}
        className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <p>{item.value}</p>
       </li>
      ))}
     </ul>
     <div className="w-full border"></div>
     <ul className="w-full flex flex-col gap-3">
      {TotalCollected.map((item, index) => (
       <li
        key={index}
        className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <p>{item.value}</p>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
};

export default SalesSummary;
