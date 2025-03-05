import ProductTable from "@/components/ProductTable";

const Product: React.FC = () => {
 const data = [
  {id: 1, name: "John Doe", age: 28, description: "abcd", status: "active"},
  {id: 2, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {
   id: 3,
   name: "Alice Johnson",
   age: 25,
   description: "abcd",
   status: "active",
  },
  {id: 4, name: "John Doe", age: 28, description: "abcd", status: "active"},
  {id: 5, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {
   id: 6,
   name: "Alice Johnson",
   age: 25,
   description: "abcd",
   status: "active",
  },
  {id: 7, name: "John Doe", age: 28, description: "abcd", status: "active"},
  {id: 9, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 10, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 11, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 12, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 13, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 14, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 15, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 16, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 17, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 18, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
  {id: 19, name: "Jane Smith", age: 34, description: "abcd", status: "active"},
 ];
 return (
  <div className=" flex flex-col gap-5 h-auto w-[960px] 2xl:w-[1395px] bg-[#f4f4f]">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">Product</h1>
   <ProductTable data={data} />
  </div>
 );
};

export default Product;
