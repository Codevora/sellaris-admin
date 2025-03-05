const ShiftContent = [
 {name: "Name", description: "Shift 1"},
 {name: "Start Time", description: "05/03/2025 15:00"},
 {name: "End Time", description: ""},
 {name: "Total Expected", description: ""},
 {name: "Total Actual", description: ""},
 {name: "Difference", description: ""},
]

const ShiftTable: React.FC = () => {
 return (
  <div className="flex flex-col gap-5 h-auto w-full">
   <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">Shift</h1>
   <div className="flex justify-between items-center border w-full h-auto p-2 px-10 bg-black/10">
    {ShiftContent.map((item, index) => (
     <div key={index} className="flex flex-col">
      <h1>{item.name}</h1>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ShiftTable;
