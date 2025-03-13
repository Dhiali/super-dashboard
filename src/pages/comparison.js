import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import GlowHeader from "../components/glow-header";
import CharacterChart from "../components/characterchart";
import ComparisonPowerChart from "../components/comparisonpowerchart";
import heroes from "../data/heroes";
import infoIcon from "../assets/info.png";
import "./dashboard.css";
import "./comparison.css";

const Comparison = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchHero1, setSearchHero1] = useState("");
  const [searchHero2, setSearchHero2] = useState("");
  const location = useLocation();

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

 
  const selectedCharacter1 = heroes[0];
  const selectedCharacter2 = heroes[1]; 

  return (
    <div className="bg-black min-h-screen text-white">
      <GlowHeader />

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

      <div className="comparison-search-container side-by-side">
        <input
          type="text"
          placeholder="Search for Hero 1"
          className="comparison-search-input left-input"
          value={searchHero1}
          onChange={(e) => setSearchHero1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search for Hero 2"
          className="comparison-search-input right-input"
          value={searchHero2}
          onChange={(e) => setSearchHero2(e.target.value)}
        />
      </div>

      <div className="comparison-cards-container side-by-side">
        <div className="comparison-character-card-info">
          <img src="https://i.pinimg.com/736x/d7/b7/ac/d7b7ac5970e78b7a12f8ad51ece24e89.jpg" alt="Hero 1" className="comparison-character-image" />
          <div className="comparison-character-info">
            <p><strong>Full Name:</strong> John Doe</p>
            <p><strong>Aliases:</strong> The Phantom, Night Avenger</p>
            <p><strong>Publisher:</strong> Marvel</p>
            <p><strong>First Appearance:</strong> 1965</p>
            <p><strong>Occupation:</strong> Vigilante</p>
            <p><strong>Base:</strong> Gotham City</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Race/Species:</strong> Human</p>
          </div>
        </div>

        <div className="comparison-character-card-info">
          <img src="https://i.pinimg.com/736x/5d/90/c3/5d90c36487a915c3d7d68e874d499cb7.jpg" alt="Hero 2" className="comparison-character-image" />
          <div className="comparison-character-info">
            <p><strong>Full Name:</strong> Jane Smith</p>
            <p><strong>Aliases:</strong> Shadow Queen, Night Fury</p>
            <p><strong>Publisher:</strong> DC</p>
            <p><strong>First Appearance:</strong> 1972</p>
            <p><strong>Occupation:</strong> Superhero</p>
            <p><strong>Base:</strong> Metropolis</p>
            <p><strong>Gender:</strong> Female</p>
            <p><strong>Race/Species:</strong> Mutant</p>
          </div>
        </div>
      </div>

      <div className="comparison-charts-container side-by-side">
        <div className="comparison-charts">
          <h4>Physical Attributes</h4>
          <p>The Height Comparison Chart visually comparing a selected superhero’s height against two randomly chosen characters.</p>
          <CharacterChart
            character={selectedCharacter1}
            type="appearance"
            allCharacters={heroes}
          />
        </div>

        <div className="comparison-charts">
          <h4>Physical Attributes</h4>
          <p>The Height Comparison Chart visually comparing a selected superhero’s height against two randomly chosen characters.</p>
          <CharacterChart
            character={selectedCharacter2}
            type="appearance"
            allCharacters={heroes}
          />
        </div>
      </div>

      <div className="comparison-charts-container side-by-side">
        <div className="comparison-charts">
          <h4>Group Affiliations & Relationships</h4>
          <p>This visualization highlights how characters are linked within their universe, revealing key alliances, rivalries, and team dynamics at a glance.</p>
          <CharacterChart character={selectedCharacter1} type="biography" />
        </div>

        <div className="comparison-charts">
          <h4>Group Affiliations & Relationships</h4>
          <p>This visualization highlights how characters are linked within their universe, revealing key alliances, rivalries, and team dynamics at a glance.</p>
          <CharacterChart character={selectedCharacter2} type="biography" />
        </div>
      </div>

      <div className="comparison-charts full-width">
        <h4>Power Statistics</h4>
        <p>This chart provides a quick, at-a-glance representation of strengths, making it easy to compare heroes and villains based on their unique power profiles.</p>
        <ComparisonPowerChart character1={selectedCharacter1} character2={selectedCharacter2} />
      </div>
    </div>
  );
};

export default Comparison;
