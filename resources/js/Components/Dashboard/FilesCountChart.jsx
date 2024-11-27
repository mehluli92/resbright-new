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

const FilesCountChart = ({monthlyCount, dailyCount}) => {
    const [dailyData, setDailyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [showMonhly, setShowMonthly] = useState(true);

    useEffect(()=>{
        setDailyData(dailyCount)
        setMonthlyData(monthlyCount)
    },[monthlyCount, dailyCount])

    const dailyLabels = dailyData.map((file) => file.date);
    const dailyTotals = dailyData.map((file) => file.total);

    const monthlyLabels = monthlyData.map((file) => file.month);
    const monthlyTotals = monthlyData.map((file) => file.total);

    return (
        <div className="p-2">
            <div 
            className={`${showMonhly == false ? '':'hidden'}`}
            >
            <div className="flex flex-cols gap-2 text-gray-700 hover:text-gray-500">
            <h2 onClick={()=>setShowMonthly(false)}>Daily files</h2> 
            <h2 onClick={()=>setShowMonthly(true)}>Monthly files</h2>
            </div>
            
            <Bar
                data={{
                    labels: dailyLabels,
                    datasets: [
                        {
                            label: "files",
                            data: dailyTotals,
                            backgroundColor: "rgba(75, 192, 192, 0.5)",
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "Daily files" },
                    },
                }}
            />
            </div>
            
            
            <div 
            className={`${showMonhly == false ? 'hidden':''}`}
            >
            <div className="flex flex-cols gap-2 text-gray-700 hover:text-gray-500">
            <h2 onClick={()=>setShowMonthly(false)}>Daily files</h2> 
            <h2 onClick={()=>setShowMonthly(true)}>Monthly files</h2>
            </div>
            <Bar
                data={{
                    labels: monthlyLabels,
                    datasets: [
                        {
                            label: "files",
                            data: monthlyTotals,
                            backgroundColor: "rgba(153, 102, 255, 0.5)",
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "Monthly files" },
                    },
                }}
            />
            </div>
        </div>
    );
};

export default FilesCountChart;
