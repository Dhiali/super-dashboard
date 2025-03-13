import { useState } from "react";
import { useLocation } from "react-router-dom";
import GlowHeader from "../components/glow-header";
import heroes from "../data/heroes";
import infoIcon from "../assets/info.png";
import "./dashboard.css"; // Reusing dashboard styles for consistency
import "./comparison.css"; // New styles for the comparison page

const Comparison = () => {
  const [showInfo, setShowInfo] = useState(false);
  const location = useLocation(); // For active nav styling

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* NAVIGATION & GLOW HEADER */}
      <GlowHeader />

      {/* INFO BUBBLE */}
      <div className={`info-bubble ${showInfo ? "expanded" : ""}`} onClick={toggleInfo}>
        <img src={infoIcon} alt="Info Icon" className="info-icon-inside-bubble" />
        {showInfo && (
          <div className="info-text">
            <p>
              <strong>Compare Superheroes Like Never Before!</strong> 
              <br /><br />
              Welcome to the Comparison Page, where you can pit your favorite superheroes against each other and analyze their strengths, abilities, and physical attributes side by side. Using interactive charts, you can compare power stats, height, weight, and more, gaining a deeper understanding of how these characters stack up. Whether you’re debating who would win in a fight or simply exploring superhero dynamics, this page provides a visual and data-driven way to settle the score. Select your characters and let the showdown begin! 
            </p>
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="p-6">
        <h2 className="text-pink-500 text-xl font-bold mb-4">Comparison Table</h2>
        <table className="w-full border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2">Name</th>
              <th className="p-2">Power</th>
              <th className="p-2">Speed</th>
              <th className="p-2">Intelligence</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((hero) => (
              <tr key={hero.id} className="text-center border-t border-gray-600">
                <td className="p-2">{hero.name}</td>
                <td className="p-2">{hero.power}</td>
                <td className="p-2">{hero.speed}</td>
                <td className="p-2">{hero.intelligence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
