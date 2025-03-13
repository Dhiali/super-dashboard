import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function CharacterChart({ character, type }) {
  if (!character) return null;

  if (type === 'powerstats') {
    // Simulate powerstats since your current data doesn't include it
    const stats = {
      Intelligence: 90,
      Strength: 100,
      Speed: 85,
      Durability: 95,
      Power: 98,
      Combat: 92
    };

    const data = {
      labels: Object.keys(stats),
      datasets: [
        {
          label: `${character.name}'s Powerstats`,
          data: Object.values(stats),
          backgroundColor: 'rgba(255, 193, 7, 0.3)', // Yellow fill
          borderColor: '#ffc107',
          pointBackgroundColor: '#ffc107',
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#fff' }
        }
      },
      scales: {
        r: {
          angleLines: { color: '#555' },
          grid: { color: '#777' },
          pointLabels: { color: '#fff' },
          ticks: { color: '#fff', backdropColor: 'transparent' }
        }
      }
    };

    return <Radar data={data} options={options} />;
  }

  // Add other chart types (bar, pie, etc.) for other `type` values
  return <p style={{ color: '#fff' }}>Chart type "{type}" coming soon...</p>;
}
