import React from "react";
import heroes from "../data/heroes";
import GlowHeader from "../components/glow-header";

const Comparison = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <GlowHeader />
      <div className="p-6">
        <h2 className="text-pink-500 text-xl font-bold mb-4">Comparison Table</h2>
        <table className="w-full border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th>Name</th>
              <th>Power</th>
              <th>Speed</th>
              <th>Intelligence</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((hero) => (
              <tr key={hero.id} className="text-center border-t border-gray-600">
                <td>{hero.name}</td>
                <td>{hero.power}</td>
                <td>{hero.speed}</td>
                <td>{hero.intelligence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
