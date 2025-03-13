import React from 'react';
import { Radar, PolarArea, Scatter, Doughnut} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  Title,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  Title,
  Filler,
  Tooltip,
  Legend
);

export default function CharacterChart({ character, type, allCharacters }) {
  if (!character) return null;

  // ----- POWERSTATS (RADAR CHART) -----
  if (type === 'powerstats') {
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
          backgroundColor: 'rgba(255, 193, 7, 0.3)',
          borderColor: '#ffc107',
          pointBackgroundColor: '#ffc107'
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

  // ----- APPEARANCE TRAITS (POLAR AREA CHART) -----
  if (type === 'appearance') {
    const labels = ['Superman', 'Batman', 'Wonder Woman'];
    const heights = [191, 188, 175];

    const data = {
      labels,
      datasets: [
        {
          label: 'Character Heights (cm)',
          data: heights,
          backgroundColor: ['#ffc107', '#ff6384', '#36a2eb']
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
          ticks: { color: '#fff', backdropColor: 'transparent' },
          pointLabels: { color: '#fff' },
          grid: { color: '#777' }
        }
      }
    };

    return <PolarArea data={data} options={options} />;
  }

  // ----- BIOGRAPHY SUMMARY (SCATTER CHART) -----
  if (type === 'biography') {
    const mockData = [
      { x: 10, y: 1 }, // Mock: Name length
      { x: 5, y: 2 }, // Mock: Number of aliases
      { x: 50, y: 3 } // Mock: Issue number of first appearance
    ];

    const data = {
      datasets: [
        {
          label: `Biography Summary`,
          data: mockData,
          backgroundColor: '#36a2eb',
          borderColor: '#36a2eb',
          pointRadius: 6,
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#fff' }
        },
        title: {
          display: true,
          text: 'Biography Summary Chart',
          color: '#fff'
        }
      },
      scales: {
        x: {
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Attribute Value',
            color: '#fff'
          }
        },
        y: {
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Biography Attributes',
            color: '#fff'
          }
        }
      }
    };

    return <Scatter data={data} options={options} />;
  }

  if (type === 'work') {
    const data = {
      labels: ['Bruce Wayne', 'Batman', 'Matches Malone'],
      datasets: [
        {
          label: 'Alter Egos',
          data: [60, 30, 10],
          backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56']
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#fff' }
        },
        title: {
          display: true,
          text: ' Alter Egos',
          color: '#fff'
        }
      }
    };

    return <Doughnut data={data} options={options} />;
  }

  // ----- CHARACTER EVOLUTION TIMELINE (LOG SCALE SCATTER CHART) -----
  if (type === 'aliases') {
    const mockData = [
      { x: 1, y: 1 },
      { x: 5, y: 2 },
      { x: 10, y: 3 },
      { x: 50, y: 4 },
      { x: 100, y: 5 },
      { x: 500, y: 6 },
      { x: 1000, y: 7 }
    ];

    const data = {
      datasets: [
        {
          label: `${character.name} - Evolution Timeline`,
          data: mockData,
          backgroundColor: '#ff6384',
          borderColor: '#ff6384',
          pointRadius: 6,
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#fff' }
        },
        title: {
          display: true,
          text: 'Character Evolution Timeline (Log Scale)',
          color: '#fff'
        }
      },
      scales: {
        x: {
          type: 'logarithmic',
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Alias Number (Log Scale)',
            color: '#fff'
          }
        },
        y: {
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Evolution Stages',
            color: '#fff'
          }
        }
      }
    };

    return <Scatter data={data} options={options} />;
  }

  return <p style={{ color: '#fff' }}>Chart type "{type}" coming soon...</p>;
}