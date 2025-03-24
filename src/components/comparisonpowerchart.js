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
  // Add default data if characters are undefined
  const defaultStats = {
    intelligence: "50",
    strength: "50",
    speed: "50",
    durability: "50",
    power: "50",
    combat: "50"
  };

  const char1Stats = character1?.powerstats || defaultStats;
  const char2Stats = character2?.powerstats || defaultStats;

  const data = {
    labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
    datasets: [
      {
        label: `${character1?.name || 'Character 1'}'s Powerstats`,
        data: [
          parseInt(char1Stats.intelligence) || 0,
          parseInt(char1Stats.strength) || 0,
          parseInt(char1Stats.speed) || 0,
          parseInt(char1Stats.durability) || 0,
          parseInt(char1Stats.power) || 0,
          parseInt(char1Stats.combat) || 0
        ],
        backgroundColor: 'rgba(255, 193, 7, 0.3)',
        borderColor: '#ffc107',
        pointBackgroundColor: '#ffc107',
      },
      {
        label: `${character2?.name || 'Character 2'}'s Powerstats`,
        data: [
          parseInt(char2Stats.intelligence) || 0,
          parseInt(char2Stats.strength) || 0,
          parseInt(char2Stats.speed) || 0,
          parseInt(char2Stats.durability) || 0,
          parseInt(char2Stats.power) || 0,
          parseInt(char2Stats.combat) || 0
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        borderColor: '#4caf50',
        pointBackgroundColor: '#4caf50',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: window.innerWidth < 768 ? 12 : 14, 
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: { color: '#555' },
        grid: { color: '#777' },
        pointLabels: {
          color: '#fff',
          font: {
            size: window.innerWidth < 768 ? 12 : 14, 
          },
        },
        ticks: {
          color: '#fff',
          backdropColor: 'transparent',
          font: {
            size: window.innerWidth < 768 ? 10 : 12, 
          },
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default ComparisonPowerChart;