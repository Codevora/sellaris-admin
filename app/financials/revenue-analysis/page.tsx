import RevenueAnalysisUi from "@/components/ui/RevenueAnalysis";

const RevenueAnalysis = () => {
 return (
  <div className="flex flex-col gap-2 h-auto w-full bg-[#f4f4f]">
   <div className="flex justify-between">
    <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
     Revenue Analysis
    </h1>
   </div>
   <RevenueAnalysisUi />
  </div>
 );
};

export default RevenueAnalysis;
