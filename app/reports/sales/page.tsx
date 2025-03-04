const SalesItem = [
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

const NetSales = {
 name: "Net Sales",
 value: "Rp.0,-",
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

const Collected = [
 {
  name:"Total Collected",
  value:"Rp.0,-",
 },
];

const SalesGeneral: React.FC = () => {
 return (
  <div className="h-auto w-full bg-[#f4f4f4]">
   <div className="flex flex-col gap-2">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-black/20">
     Sales Summary
    </h1>
    <div className="flex flex-col gap-2 2xl:w-full">
     <ul className="w-full justify-bet flex flex-col gap-3">
      {SalesItem.map((item, index) => (
       <li
        key={index}
        className="flex justify-between">
        <h1 className="text-lg font-normal">{item.title}</h1>
        <p>{item.value}</p>
       </li>
      ))}
     </ul>
     <div className="w-full border"></div>
     <div className="flex justify-between">
      <h1 className="text-lg font-semibold">{NetSales.name}</h1>
      <p>{NetSales.value}</p>
     </div>
     <ul className="w-full flex flex-col gap-3">
      {NetSales.items.map((item, index) => (
       <li
        key={index}
        className="flex  justify-between">
        <h1 className="text-lg font-normal">{item.name}</h1>
        <p>{item.value}</p>
       </li>
      ))}
     </ul>
     <div className="w-full border"></div>
     <ul className="w-full flex flex-col gap-3">
      {Collected.map((item, index) => (
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

export default SalesGeneral;
