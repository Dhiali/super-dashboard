import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import '../pages/dashboard.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function CharacterChart({ character, type }) {
  let labels = [];
  let dataValues = [];

  switch (type) {
    case 'powerstats':
      labels = ['Strength', 'Speed', 'Durability', 'Power', 'Combat'];
      dataValues = [80, 90, 85, 95, 75]; // replace with actual values from API if available
      break;
    case 'appearance':
      labels = ['Gender', 'Race'];
      dataValues = [
        character.appearance.gender === 'Male' ? 1 : 0,
        character.appearance.race === 'Kryptonian' ? 1 : 0,
      ];
      break;
    case 'biography':
      labels = ['Publisher', 'First Appearance'];
      dataValues = [1, 1]; // dummy values or assign specific scoring logic
      break;
    case 'work':
      labels = ['Occupation', 'Base'];
      dataValues = [1, 1]; // again, dummy data or logic-based
      break;
    case 'aliases':
      labels = character.biography.aliases || [];
      dataValues = character.biography.aliases.map(() => 1); // 1 for each alias
      break;
    default:
      labels = ['No Data'];
      dataValues = [0];
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: `${type.toUpperCase()} Chart`,
        data: dataValues,
        backgroundColor: 'rgba(255, 255, 0, 0.6)',
        borderColor: 'rgba(255, 255, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="character-chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
