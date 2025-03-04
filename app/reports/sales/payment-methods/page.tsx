import Table from "@/components/Table";

const PaymentMethods: React.FC = () => {
const data = [
 {id: 1, name: "John Doe", age: 28},
 {id: 2, name: "Jane Smith", age: 34},
 {id: 3, name: "Alice Johnson", age: 25},
];

 return (
  <div className="flex h-auto w-full bg-[#f4f4f]">
   <Table data={data}/>
  </div>
 );
};

export default PaymentMethods;
