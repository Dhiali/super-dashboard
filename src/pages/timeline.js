import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
} from "chart.js";

import heroes from "../data/heroes";
import GlowHeader from "../components/glow-header";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);

const Timeline = () => {
  const chartData = {
    labels: heroes.map((h) => h.name),
    datasets: [
      {
        label: "Power",
        data: heroes.map((h) => h.power),
        borderColor: "#ff4ec4", // neon pink
        backgroundColor: "rgba(255, 78, 196, 0.1)",
        tension: 0.5,
        fill: true,
        pointBackgroundColor: "#ff4ec4",
        pointRadius: 5,
        borderWidth: 3,
      },
      {
        label: "Speed",
        data: heroes.map((h) => h.speed),
        borderColor: "#ffd700", // neon yellow
        backgroundColor: "rgba(255, 215, 0, 0.1)",
        tension: 0.5,
        fill: true,
        pointBackgroundColor: "#ffd700",
        pointRadius: 5,
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
          font: { size: 16, weight: "bold" },
        },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: {
          color: "#ffffff",
          font: { size: 16, weight: "bold" },
        },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: { size: 18, weight: "bold" },
        },
      },
      tooltip: {
        backgroundColor: "#1f1f1f",
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
      },
    },
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <GlowHeader />
      <div className="p-10 max-w-7xl mx-auto">
        <h2 className="text-pink-500 text-4xl font-extrabold mb-6 text-center">
          Hero Timeline
        </h2>
        <div className="h-[600px] bg-[#0a0a0a] p-6 rounded-2xl shadow-2xl border border-pink-500">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
