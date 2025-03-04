import TransactionNav from "@/components/ui/TransactionNav";

const TransactionLayout = ({children}: {children: React.ReactNode}) => {
 return (
  <div className="lg:ml-[240px] 2xl:ml-[270px] px-5 flex flex-col gap-5 h-auto w-auto bg-[#f4f4f]">
   <TransactionNav />
   {children}
  </div>
 );
};

export default TransactionLayout;
