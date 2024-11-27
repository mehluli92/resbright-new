import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = ({monthlySales, dailySales}) => {
    const [dailyData, setDailyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [showMonhly, setShowMonthly] = useState(true);

    useEffect(()=>{
        setDailyData(dailySales)
        setMonthlyData(monthlySales)
    },[monthlySales, dailySales])

    const dailyLabels = dailyData.map((sale) => sale.date);
    const dailyTotals = dailyData.map((sale) => sale.total);

    const monthlyLabels = monthlyData.map((sale) => sale.month);
    const monthlyTotals = monthlyData.map((sale) => sale.total);

    return (
        <div className="p-2">
            <div 
            className={`${showMonhly == false ? '':'hidden'}`}
            >
            <div className="flex flex-cols gap-2 text-gray-700 hover:text-gray-500">
            <h2 onClick={()=>setShowMonthly(false)}>Daily Sales</h2> 
            <h2 onClick={()=>setShowMonthly(true)}>Monthly Sales</h2>
            </div>
            
            <Bar
                data={{
                    labels: dailyLabels,
                    datasets: [
                        {
                            label: "Sales",
                            data: dailyTotals,
                            backgroundColor: "rgba(75, 192, 192, 0.5)",
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "Daily Sales" },
                    },
                }}
            />
            </div>
            
            
            <div 
            className={`${showMonhly == false ? 'hidden':''}`}
            >
            <div className="flex flex-cols gap-2 text-gray-700 hover:text-gray-500">
            <h2 onClick={()=>setShowMonthly(false)}>Daily Sales</h2> 
            <h2 onClick={()=>setShowMonthly(true)}>Monthly Sales</h2>
            </div>
            <Bar
                data={{
                    labels: monthlyLabels,
                    datasets: [
                        {
                            label: "Sales",
                            data: monthlyTotals,
                            backgroundColor: "rgba(153, 102, 255, 0.5)",
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "Monthly Sales" },
                    },
                }}
            />
            </div>
        </div>
    );
};

export default SalesChart;
