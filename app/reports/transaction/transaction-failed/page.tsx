const FailedContent = [
 {name: "TRANSACTIONS", value: 0},
 {name: "TOTAL COLLECTED", value: 0},
];

const TransactionFailed: React.FC = () => {
 return (
  <div className="flex h-auto w-full bg-[#f4f4f]">
   <div className="flex justify-between items-center border w-full p-10 px-[200px] bg-white">
    {FailedContent.map((item, index) => (
     <div
      key={index}
      className="flex flex-col gap-1 items-center">
      <p>{item.value}</p>
      <h1 className="text-slate-500 text-sm font-normal">{item.name}</h1>
     </div>
    ))}
   </div>
  </div>
 );
};

export default TransactionFailed;
