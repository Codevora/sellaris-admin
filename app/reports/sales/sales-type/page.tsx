import SalesTable from "@/components/SalesTable";

const PaymentMethods: React.FC = () => {
 const data = [
  {name: "John Doe", id: 1, age: 28},
  {name: "Jane Smith", id: 2, age: 34},
  {name: "Alice Johnson", id: 3, age: 25},
 ];
 
 const total= [
    {name: "Total", id: 1,}
 ]

 return (
  <div className="flex h-auto w-full bg-[#f4f4f]">
   <SalesTable data={data} />
  </div>
 );
};

export default PaymentMethods;
