const InventoryLayout = ({children}: {children: React.ReactNode}) => {
 return (
  <div className="lg:ml-[240px] 2xl:ml-[270px] p-5 flex flex-col gap-5 h-auto w-auto bg-[#f4f4f]">
   {children}
  </div>
 );
};

export default InventoryLayout;
