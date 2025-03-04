import {URLSearchParams} from "next/dist/compiled/@edge-runtime/primitives/url";

const PaymentTableHeader = [
 {name: "Configuration Name", description: "asdqw"},
 {name: "Asigned Outlet", description: "asda"},
];

const PaymentTableContent = [
 {description: "Configuration 1"},
 {description: "Outlet 1"},
];

const PaymentConfiguration = () => {
 return (
  <div className="lg:ml-[240px] 2xl:ml-[270px] p-5 flex flex-col gap-5 h-auto w-auto bg-[#f4f4f]">
   <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
    Payment Configuration
   </h1>
   <div className="flex flex-col">
    <div className="flex w-full">
     {PaymentTableHeader.map((item, index) => (
      <ul
       key={index}
       className="w-full border p-2 bg-primary text-white">
       <h1>{item.name}</h1>
      </ul>
     ))}
    </div>
    <div className="grid grid-cols-2 w-full border bg-white">
     {PaymentTableContent.map((item, index) => (
      <div className="w-full">
       <ul
        key={index}
        className="w-full h-[200px] p-2  text-black">
        <h1>{item.description}</h1>
       </ul>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default PaymentConfiguration;
