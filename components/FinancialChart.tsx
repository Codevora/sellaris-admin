"use client"

// components/FinancialChart.tsx
import React from "react";
import {Bar} from "react-chartjs-2";
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend,
} from "chart.js";

// Mendaftarkan skala dan elemen yang diperlukan
ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
);

interface ProductSalesChartProps {
 title: string;
 productNames: string[];
 salesData: number[];
}

const ProductSalesChart: React.FC<ProductSalesChartProps> = ({
 title,
 productNames,
 salesData,
}) => {
 const data = {
  labels: productNames,
  datasets: [
   {
    label: "Jumlah Penjualan",
    data: salesData,
    backgroundColor: "#357266",
   },
  ],
 };

 return (
  <div className="bg-white shadow-md rounded-lg p-4">
   <h2 className="text-xl font-bold mb-4">{title}</h2>
   <Bar data={data} />
  </div>
 );
};

export default ProductSalesChart;
