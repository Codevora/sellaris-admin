"use client"
// components/PieChart.tsx
import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

// Mendaftarkan elemen yang diperlukan
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
 title: string;
 data: number[];
 labels: string[];
}

const PieChart: React.FC<PieChartProps> = ({title, data, labels}) => {
 const chartData = {
  labels: labels,
  datasets: [
   {
    data: data,
    backgroundColor: [
     "rgba(75, 192, 192, 0.6)",
     "rgba(255, 99, 132, 0.6)",
     "rgba(255, 206, 86, 0.6)",
    ],
   },
  ],
 };

 return (
  <div className="bg-white rounded-lg w-[35%] text-center border shadow-md">
   <h2 className="text-xl font-bold mb-4 text-gray-500/60">{title}</h2>
   <div className="h-[300px] place-items-center">
    <Pie data={chartData} />
   </div>
  </div>
 );
};

export default PieChart;
