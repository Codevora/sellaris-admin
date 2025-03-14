interface PinAccessTableProps {
 data: Array<{
  outlet: string;
  name: string;
  pin: string;
 }>;
}

const Table: React.FC<PinAccessTableProps> = ({data}) => {
 return (
  <div className="overflow-y-auto h-[400px] w-full">
   <table className="w-full border-collapse border border-gray-200">
    <thead>
     <tr className="bg-gray-500 text-white border">
      <th className="border border-gray-200 px-4 py-2">Outlet</th>
      <th className="border border-gray-200 px-4 py-2">Employee Name</th>
      <th className="border border-gray-200 px-4 py-2">PIN</th>
     </tr>
    </thead>
    <tbody>
     {data.map((item) => (
      <tr
       key={item.outlet}
       className="hover:bg-gray-50">
       <td className="border border-gray-200 px-4 py-2">{item.outlet}</td>
       <td className="border border-gray-200 px-4 py-2">{item.name}</td>
       <td className="border border-gray-200 px-4 py-2">{item.pin}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

const data = [{outlet: "Outlet 1", name: "John Doe", pin: "1234"}];
const checkboxitem = [
 {
  name: "Print Bill",
 },
 {
  name: "Manage All Bill",
 },
 {
  name: "Apply Discounts to Bills and Items",
 },
 {
  name: "Manage Discounts",
 },
 {
  name: "Issue Refunds",
 },
 {
  name: "Resend Receipts",
 },
 {
  name: "Record Invoice Payments",
 },
 {
  name: "Cancel Invoices",
 },
 {
  name: "View Shift History",
 },
 {
  name: "Edit Customer Information",
 },
];

const PinAccess = () => {
 return (
  <div className="flex flex-col gap-10 h-auto w-auto bg-[#f4f4f]">
   <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
    PIN Access
   </h1>
   <div className="flex flex-col gap-5">
    <h2 className="text-xl">
     PIN Access is a feature to lock certain access in Sellarisa Apps.
    </h2>
    <p className="text-lg">
     This PIN configuration will apply to outlets who have staff with PIN
     assigned and allowed to use PIN for in-app permission as set on{" "}
     <span className="text-blue-400">Employee Slots</span> and have access to
     mobile apps, as set on{" "}
     <span className="text-blue-400">Employee Access</span>.
    </p>
    <div className="flex gap-2 border p-3 py-5 max-w-[350px] bg-primary text-white rounded-lg">
     <p>
      PIN Access requires at least Sellaris v.26.2 on IOS and Sellaris v.15.9.1
      on Android
     </p>
    </div>
    <div className="flex w-full border-gray-400">
     <div className="flex flex-col gap-7 w-full p-3">
      <div className="flex flex-col gap-2">
       <h1 className="text-xl font-semibold">LIST OF ADMINISTRATOR</h1>
       <hr className="w-full border border-gray-400" />
      </div>
      <p>
       All Outlets are recomended to have at least 1 employee with administrator
       role and PIN assigned. To assign employee, go to{" "}
       <span className="text-blue-400">Employee Access</span>
      </p>
      <Table data={data} />
     </div>
     <div className="flex flex-col gap-7 w-full p-3">
      <div className="flex flex-col gap-2">
       <h1 className="text-xl font-semibold">LIST OF FEATURES</h1>
       <hr className="w-full border border-gray-400" />
      </div>
      <div className="flex flex-col overflow-y-auto max-h-[265px]">
       <ul className="flex flex-col gap-5 w-full">
        {checkboxitem.map((item, index) => (
         <li key={index}>
          <h1 className="text-xl font-semibold">
           <div className="flex items-center gap-2">
            <input
             type="checkbox"
             className="size-5"
            />
            {item.name}
           </div>
          </h1>
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default PinAccess;
