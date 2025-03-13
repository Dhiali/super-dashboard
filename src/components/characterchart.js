import React from 'react';
import { Radar, PolarArea, Scatter, Doughnut } from 'react-chartjs-2';
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
  Legend,
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


  const getFontSize = () => (window.innerWidth < 768 ? 12 : 14);

  if (type === 'powerstats') {
    const stats = {
      Intelligence: 90,
      Strength: 100,
      Speed: 85,
      Durability: 95,
      Power: 98,
      Combat: 92,
    };

    const data = {
      labels: Object.keys(stats),
      datasets: [
        {
          label: `${character.name}'s Powerstats`,
          data: Object.values(stats),
          backgroundColor: 'rgba(255, 193, 7, 0.3)',
          borderColor: '#ffc107',
          pointBackgroundColor: '#ffc107',
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
              size: getFontSize(),
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
              size: getFontSize(),
            },
          },
          ticks: {
            color: '#fff',
            backdropColor: 'transparent',
            font: {
              size: getFontSize() - 2,
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
  }

  if (type === 'appearance') {
    const labels = ['Superman', 'Batman', 'Wonder Woman'];
    const heights = [191, 188, 175];

    const data = {
      labels,
      datasets: [
        {
          label: 'Character Heights (cm)',
          data: heights,
          backgroundColor: ['#ffc107', '#ff6384', '#36a2eb'],
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
              size: getFontSize(),
            },
          },
        },
      },
      scales: {
        r: {
          ticks: { color: '#fff', backdropColor: 'transparent' },
          pointLabels: {
            color: '#fff',
            font: {
              size: getFontSize(),
            },
          },
          grid: { color: '#777' },
        },
      },
    };

    return (
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <PolarArea data={data} options={options} />
      </div>
    );
  }

  if (type === 'biography') {
    const mockData = [
      { x: 10, y: 1 },
      { x: 5, y: 2 },
      { x: 50, y: 3 },
    ];

    const data = {
      datasets: [
        {
          label: `Biography Summary`,
          data: mockData,
          backgroundColor: '#36a2eb',
          borderColor: '#36a2eb',
          pointRadius: 6,
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
              size: getFontSize(),
            },
          },
        },
        title: {
          display: true,
          text: 'Biography Summary Chart',
          color: '#fff',
          font: {
            size: getFontSize() + 2,
          },
        },
      },
      scales: {
        x: {
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Attribute Value',
            color: '#fff',
            font: {
              size: getFontSize(),
            },
          },
        },
        y: {
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Biography Attributes',
            color: '#fff',
            font: {
              size: getFontSize(),
            },
          },
        },
      },
    };

    return (
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <Scatter data={data} options={options} />
      </div>
    );
  }

  if (type === 'work') {
    const data = {
      labels: ['Bruce Wayne', 'Batman', 'Matches Malone'],
      datasets: [
        {
          label: 'Alter Egos',
          data: [60, 30, 10],
          backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56'],
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
              size: getFontSize(),
            },
          },
        },
        title: {
          display: true,
          text: 'Alter Egos',
          color: '#fff',
          font: {
            size: getFontSize() + 2,
          },
        },
      },
    };

    return (
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <Doughnut data={data} options={options} />
      </div>
    );
  }

  if (type === 'aliases') {
    const mockData = [
      { x: 1, y: 1 },
      { x: 5, y: 2 },
      { x: 10, y: 3 },
      { x: 50, y: 4 },
      { x: 100, y: 5 },
      { x: 500, y: 6 },
      { x: 1000, y: 7 },
    ];

    const data = {
      datasets: [
        {
          label: `${character.name} - Evolution Timeline`,
          data: mockData,
          backgroundColor: '#ff6384',
          borderColor: '#ff6384',
          pointRadius: 6,
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
              size: getFontSize(),
            },
          },
        },
        title: {
          display: true,
          text: 'Character Evolution Timeline (Log Scale)',
          color: '#fff',
          font: {
            size: getFontSize() + 2,
          },
        },
      },
      scales: {
        x: {
          type: 'logarithmic',
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Alias Number (Log Scale)',
            color: '#fff',
            font: {
              size: getFontSize(),
            },
          },
        },
        y: {
          ticks: { color: '#fff' },
          grid: { color: '#777' },
          title: {
            display: true,
            text: 'Evolution Stages',
            color: '#fff',
            font: {
              size: getFontSize(),
            },
          },
        },
      },
    };

    return (
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <Scatter data={data} options={options} />
      </div>
    );
  }

  return <p style={{ color: '#fff' }}>Chart type "{type}" coming soon...</p>;
}