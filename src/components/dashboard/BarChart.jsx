"use client";
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
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul"],
      datasets: [
        {
          label: "Last Month",
          data: [200, 400, 600, 800, 1000, 500, 400],
          borderColor: "#475BE8",
          backgroundColor: "#475BE8",
        },
        {
          label: "Running Month",
          data: [200, 23, 34, 534, 234, 323, 767],
          backgroundColor: "#CFC8FF",
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "left",
          display: true,
          position: "top",
          labels: {
            boxWidth: 10,
            boxHeight: 10,
            borderRadius: 50,
          },
        },
      },

      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

export default BarChart;
