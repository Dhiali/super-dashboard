import React from 'react';
import { Radar, PolarArea, Line, Doughnut, Scatter } from 'react-chartjs-2';
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
import axios from 'axios';

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
  // Add state for random comparison characters
  const [randomChars, setRandomChars] = React.useState([]);

  // Add useEffect to fetch random characters when component mounts
  React.useEffect(() => {
    if (type === 'appearance') {
      const fetchRandomCharacters = async () => {
        try {
          // Generate two random IDs between 1 and 731 (total characters in API)
          const randomIds = Array.from({ length: 2 }, () => Math.floor(Math.random() * 731) + 1);
          
          const responses = await Promise.all(
            randomIds.map(id => 
              axios.get(`https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/${id}`)
            )
          );
          
          setRandomChars(responses.map(res => res.data).filter(char => char.response !== 'error'));
        } catch (error) {
          console.error('Error fetching random characters:', error);
        }
      };

      fetchRandomCharacters();
    }
  }, [type, character.id]);

  // Move useState before any conditional returns
  const [comparisonChars] = React.useState(() => {
    if (!allCharacters || !character) return [];
    return allCharacters
      .filter(char => char.id !== character.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
  });

  // Early return with placeholder if no character data
  if (!character || !character.biography) {
    return (
      <div style={{ position: 'relative', height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: '#fff' }}>No character data available</p>
      </div>
    );
  }

  // Add null checks and default values for biography properties
  const biography = character.biography || {};
  const firstAppearance = biography['first-appearance'] || 'Unknown';
  const placeOfBirth = biography['place-of-birth'] || 'Unknown';
  const aliases = biography.aliases || [];
  const work = character.work || {};
  const occupation = work.occupation || '';

  const getFontSize = () => (window.innerWidth < 768 ? 12 : 14);

  if (type === 'powerstats') {
    const stats = character.powerstats || {};
    const data = {
      labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
      datasets: [{
        label: `${character.name}'s Powerstats`,
        data: [
          parseInt(stats.intelligence) || 0,
          parseInt(stats.strength) || 0,
          parseInt(stats.speed) || 0,
          parseInt(stats.durability) || 0,
          parseInt(stats.power) || 0,
          parseInt(stats.combat) || 0
        ],
        backgroundColor: 'rgba(255, 193, 7, 0.3)',
        borderColor: '#ffc107',
        pointBackgroundColor: '#ffc107',
      }]
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
    const getHeight = (char) => {
      if (!char?.appearance?.height) return null;
      const heightValues = char.appearance.height;
      let height = null;

      if (heightValues[1]) {
        const cmMatch = heightValues[1].match(/\d+/);
        if (cmMatch) {
          height = parseInt(cmMatch[0]);
        }
      }

      if (!height && heightValues[0]) {
        const ftInMatch = heightValues[0].match(/(\d+)'.*?(\d+)?/);
        if (ftInMatch) {
          const feet = parseInt(ftInMatch[1]);
          const inches = parseInt(ftInMatch[2] || 0);
          height = Math.round((feet * 30.48) + (inches * 2.54));
        }
      }

      return height || 170; // Fallback to average height
    };

    const comparisonData = [
      {
        name: character.name,
        height: getHeight(character),
        color: '#A020F0'
      },
      {
        name: randomChars[0]?.name || 'Average Human',
        height: randomChars[0] ? getHeight(randomChars[0]) : 170,
        color: '#ff6389'
      },
      {
        name: randomChars[1]?.name || 'Tall Human',
        height: randomChars[1] ? getHeight(randomChars[1]) : 185,
        color: '#36a2eb'
      }
    ];

    const data = {
      labels: comparisonData.map(c => c.name),
      datasets: [{
        label: 'Height (cm)',
        data: comparisonData.map(c => c.height),
        backgroundColor: comparisonData.map(c => c.color)
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#fff',
            font: { size: getFontSize() }
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => `Height: ${context.raw} cm`
          }
        }
      },
      scales: {
        r: {
          ticks: { color: '#fff', backdropColor: 'transparent' },
          pointLabels: {
            color: '#fff',
            font: { size: getFontSize() }
          },
          grid: { color: '#777' }
        }
      }
    };

    return (
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <PolarArea data={data} options={options} />
      </div>
    );
  }

  if (type === 'biography') {
    const connections = [
      ...(character.connections?.['group-affiliation']?.split(',') || []),
      ...(character.connections?.relatives?.split(',') || [])
    ]
    .map(connection => connection.trim())
    .filter(connection => connection && connection !== '-' && connection !== 'null');

    const firstAppearanceYear = parseInt(character.biography['first-appearance']?.match(/\d{4}/)?.[0]) || 1938;
    const currentYear = new Date().getFullYear();
    const maxDuration = currentYear - firstAppearanceYear;

    const connectionData = connections.map((connection, index) => {
      const estimatedStartYear = firstAppearanceYear + Math.floor((index * maxDuration) / connections.length);
      const duration = currentYear - estimatedStartYear;
      return { connection, startYear: estimatedStartYear, duration };
    }).sort((a, b) => a.duration - b.duration); // Sort by duration

    const data = {
      labels: connectionData.map(data => data.startYear.toString()),
      datasets: [{
        label: 'Relationship Duration',
        data: connectionData.map(data => data.duration),
        borderColor: '#ff007f', // Changed to pink
        backgroundColor: 'rgba(207, 22, 115, 0.44)', // Pink with transparency
        tension: 0.4,
        fill: true,
        pointStyle: 'circle',
        pointRadius: 8,
        pointHoverRadius: 12,
        pointBackgroundColor: '#ff007f', // Pink points
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const dataPoint = connectionData[context.dataIndex];
              return [
                `Connection: ${dataPoint.connection}`,
                `Year: ${dataPoint.startYear}`,
                `Duration: ${dataPoint.duration} years`
              ];
            }
          }
        },
        title: {
          display: true,
          text: `${character.name}'s Connection Diagram`, // Changed title to use character name
          color: '#fff',
          font: {
            family: '"Tw Cen MT", sans-serif',
            size: getFontSize() + 2,
            weight: 'bold'
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Start Year',
            color: '#fff',
            font: { size: getFontSize() }
          },
          ticks: {
            color: '#fff',
            callback: value => value.toString()
          },
          grid: { color: '#777' }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Relationship Duration (years)',
            color: '#fff',
            font: { size: getFontSize() }
          },
          ticks: { color: '#fff' },
          grid: { color: '#777' }
        }
      }
    };

    return (
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
    );
  }

  if (type === 'work') {
    // Get aliases and calculate their relative durations
    const aliases = character.biography?.aliases || [];
    const firstAppearanceYear = parseInt(character.biography['first-appearance']?.match(/\d{4}/)?.[0]) || 1938;
    const currentYear = new Date().getFullYear();
    const totalYears = currentYear - firstAppearanceYear;
    
    // Calculate duration for each alias
    const aliasData = aliases.map((alias, index, arr) => {
      const yearsPerAlias = Math.floor(totalYears / (arr.length || 1));
      const startYear = firstAppearanceYear + (index * yearsPerAlias);
      const duration = yearsPerAlias;
      
      return {
        name: alias,
        duration: duration,
        startYear: startYear,
        color: `hsl(${(index * 360) / arr.length}, 70%, 50%)`
      };
    });

    const data = {
      labels: aliasData.map(a => `${a.name} (${a.startYear} - ${a.startYear + a.duration})`),
      datasets: [{
        label: 'Duration (years)',
        data: aliasData.map(a => a.duration),
        backgroundColor: aliasData.map(a => a.color)
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'center',
          labels: {
            color: '#ffffff',
            font: {
              family: '"Tw Cen MT", sans-serif',
              size: 10, // Reduced font size
              weight: '300'
            },
            padding: 5, // Reduced padding
            boxWidth: 10, // Reduced box width
            usePointStyle: true, // Use point style for more compact look
          },
          maxHeight: 80 // Limit legend height
        },
        title: {
          display: false // Remove title since we have legend now
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const alias = aliasData[context.dataIndex];
              return `${alias.name}: ${alias.duration} years (${alias.startYear} - ${alias.startYear + alias.duration})`;
            }
          }
        }
      }
    };

    return (
      <div style={{ 
        position: 'relative', 
        height: '100%', 
        width: '100%',
        display: 'flex',
        justifyContent: 'center', // Added to center horizontally
        alignItems: 'center',
      }}>
        <div style={{ width: '100%', height: '400px' }}> {/* Changed from flexBasis to width */}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    );
  }

  if (type === 'aliases') {
    // Create chronological event list
    const timelineEvents = [
      // Birth/Origin event
      {
        year: 'Origin',
        event: placeOfBirth,
        order: 1,
        type: 'birth'
      },
      // First Appearance
      {
        year: firstAppearance,
        event: `First appeared in ${firstAppearance}`,
        order: 2,
        type: 'debut',
        actualYear: parseInt(firstAppearance.match(/\d{4}/)?.[0]) || 1900
      },
      // Aliases over time
      ...aliases.map((alias, index) => ({
        year: firstAppearance,
        event: `Alias: ${alias}`,
        order: 3 + index,
        type: 'alias',
        actualYear: parseInt(firstAppearance.match(/\d{4}/)?.[0]) + (index * 2) || 1900 + (index * 2)
      })),
      // Work history
      ...occupation.split(',').map((job, index) => ({
        year: firstAppearance,
        event: `Career: ${job.trim()}`,
        order: 3 + (aliases.length || 0) + index,
        type: 'work',
        actualYear: parseInt(firstAppearance.match(/\d{4}/)?.[0]) + (index * 3) || 1900 + (index * 3)
      }))
    ].filter(event => event.event && event.event !== 'null' && event.event !== '-');

    const eventColors = {
      birth: '#ff6384',    // Pink
      debut: '#36a2eb',    // Blue
      alias: '#FF0000',    // Yellow
      work: '#4bc0c0'      // Teal
    };

    const data = {
      datasets: [{
        label: 'Character Timeline',
        data: timelineEvents.map(event => ({
          x: event.actualYear || 1900,
          y: event.order,
          ...event
        })),
        backgroundColor: timelineEvents.map(event => eventColors[event.type]),
        pointRadius: 10,
        pointHoverRadius: 15
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const event = context.raw;
              return [
                `Event: ${event.event}`,
                `Year: ${event.actualYear || 'Unknown'}`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Year',
            color: '#fff',
            font: { size: getFontSize() }
          },
          ticks: {
            color: '#fff',
            callback: value => value.toString()
          },
          grid: { color: '#777' }
        },
        y: {
          title: {
            display: true,
            text: 'Events',
            color: '#fff',
            font: { size: getFontSize() }
          },
          ticks: {
            color: '#fff',
            callback: () => ''  // Hide y-axis labels
          },
          grid: { color: '#777' }
        }
      }
    };

    return (
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <Scatter data={data} options={options} />
      </div>
    );
  }

  return <p style={{ color: '#fff' }}>Chart type "{type}" coming soon...</p>;
}