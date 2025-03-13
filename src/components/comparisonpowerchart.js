import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ComparisonPowerChart = ({ character1, character2 }) => {
  if (!character1 || !character2) return null;

  const stats1 = {
    Intelligence: 90,
    Strength: 100,
    Speed: 85,
    Durability: 95,
    Power: 98,
    Combat: 92,
  };

  const stats2 = {
    Intelligence: 80,
    Strength: 90,
    Speed: 80,
    Durability: 85,
    Power: 88,
    Combat: 82,
  };

  const data = {
    labels: Object.keys(stats1),
    datasets: [
      {
        label: `${character1.name}'s Powerstats`,
        data: Object.values(stats1),
        backgroundColor: 'rgba(255, 193, 7, 0.3)',
        borderColor: '#ffc107',
        pointBackgroundColor: '#ffc107',
      },
      {
        label: `${character2.name}'s Powerstats`,
        data: Object.values(stats2),
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        borderColor: '#4caf50',
        pointBackgroundColor: '#4caf50',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff' },
      },
    },
    scales: {
      r: {
        angleLines: { color: '#555' },
        grid: { color: '#777' },
        pointLabels: { color: '#fff' },
        ticks: { color: '#fff', backdropColor: 'transparent' },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default ComparisonPowerChart;
