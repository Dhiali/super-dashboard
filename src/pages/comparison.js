import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GlowHeader from "../components/glow-header";
import CharacterChart from "../components/characterchart";
import ComparisonPowerChart from "../components/comparisonpowerchart";
import heroes from "../data/heroes";
import infoIcon from "../assets/info.png";
import "./dashboard.css";
import "./comparison.css";

const Comparison = () => {
  const [searchHero1, setSearchHero1] = useState("");
  const [searchHero2, setSearchHero2] = useState("");
  const [searchResults1, setSearchResults1] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [selectedChar1, setSelectedChar1] = useState(null);
  const [selectedChar2, setSelectedChar2] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const location = useLocation();

  // Fetch default characters on component mount
  useEffect(() => {
    const fetchDefaultCharacters = async () => {
      try {
        // Fetch Superman (ID: 644) and Batman (ID: 70)
        const [superman, batman] = await Promise.all([
          fetch('https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/644'),
          fetch('https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/70')
        ]);

        const char1 = await superman.json();
        const char2 = await batman.json();

        setSelectedChar1(char1);
        setSelectedChar2(char2);
        setSearchHero1(char1.name);
        setSearchHero2(char2.name);
      } catch (error) {
        console.error('Error fetching default characters:', error);
      }
    };

    fetchDefaultCharacters();
  }, []);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const searchCharacter = async (query, isFirstHero) => {
    if (query.length < 2) {
      isFirstHero ? setSearchResults1([]) : setSearchResults2([]);
      return;
    }

    try {
      const response = await fetch(`https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/search/${query}`);
      const data = await response.json();
      const results = data.results || [];
      isFirstHero ? setSearchResults1(results) : setSearchResults2(results);
    } catch (error) {
      console.error('Search error:', error);
      isFirstHero ? setSearchResults1([]) : setSearchResults2([]);
    }
  };

  const handleSearch = (value, isFirstHero) => {
    if (isFirstHero) {
      setSearchHero1(value);
      searchCharacter(value, true);
    } else {
      setSearchHero2(value);
      searchCharacter(value, false);
    }
  };

  const selectCharacter = async (character, isFirstHero) => {
    try {
      // Fetch full character details when selected
      const response = await fetch(`https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/${character.id}`);
      const fullCharacter = await response.json();

      if (isFirstHero) {
        setSelectedChar1(fullCharacter);
        setSearchHero1(fullCharacter.name);
        setSearchResults1([]);
      } else {
        setSelectedChar2(fullCharacter);
        setSearchHero2(fullCharacter.name);
        setSearchResults2([]);
      }
    } catch (error) {
      console.error('Error fetching character details:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <GlowHeader />

      <div className={`info-cbubble ${showInfo ? "expanded" : ""}`} onClick={toggleInfo}>
        <img src={infoIcon} alt="Info Icon" className="info-icon-inside-bubble" />
        {showInfo && (
          <div className="info-text">
            <p>
              <strong>Compare Characters Like Never Before!</strong>
              <br /><br />
Welcome to the Comparison Page, where you can put your favorite characters against each other and analyze their strengths, abilities and physical attributes side by side. Using interactive charts, you can compare power stats, height, weight and more, gaining a deeper understanding of how these characters stack up. Whether you’re debating who would win in a fight or simply exploring superhero dynamics, this page provides a visual and data-driven way to settle the score. Type in your characters and let the showdown begin! 
            </p>
          </div>
        )}
      </div>

      <div className={`comparison-content-wrapper ${showInfo ? "info-expanded" : ""}`}>
        <div className="comparison-search-container side-by-side">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for Hero 1"
              className="comparison-search-input left-input"
              value={searchHero1}
              onChange={(e) => handleSearch(e.target.value, true)}
            />
            {searchResults1.length > 0 && (
              <div className="search-results">
                {searchResults1.map(char => (
                  <div 
                    key={char.id}
                    className="search-result-item"
                    onClick={() => selectCharacter(char, true)}
                  >
                    {char.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for Hero 2"
              className="comparison-search-input right-input"
              value={searchHero2}
              onChange={(e) => handleSearch(e.target.value, false)}
            />
            {searchResults2.length > 0 && (
              <div className="search-results">
                {searchResults2.map(char => (
                  <div 
                    key={char.id}
                    className="search-result-item"
                    onClick={() => selectCharacter(char, false)}
                  >
                    {char.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="comparison-cards-container side-by-side">
          {!selectedChar1 ? (
            <div className="comparison-character-card-info">Loading...</div>
          ) : (
            <div className="comparison-character-card-info">
              <img src={selectedChar1.image.url} alt={selectedChar1.name} className="comparison-character-image" />
              <div className="comparison-character-info">
                <p><strong>Full Name:</strong> {selectedChar1.biography['full-name']}</p>
                <p><strong>Aliases:</strong> {selectedChar1.biography.aliases.join(', ')}</p>
                <p><strong>Publisher:</strong> {selectedChar1.biography.publisher}</p>
                <p><strong>First Appearance:</strong> {selectedChar1.biography['first-appearance']}</p>
                <p><strong>Occupation:</strong> {selectedChar1.work.occupation}</p>
                <p><strong>Base:</strong> {selectedChar1.work.base}</p>
                <p><strong>Gender:</strong> {selectedChar1.appearance.gender}</p>
                <p><strong>Race/Species:</strong> {selectedChar1.appearance.race}</p>
              </div>
            </div>
          )}

          {!selectedChar2 ? (
            <div className="comparison-character-card-info">Loading...</div>
          ) : (
            <div className="comparison-character-card-info">
              <img src={selectedChar2.image.url} alt={selectedChar2.name} className="comparison-character-image" />
              <div className="comparison-character-info">
                <p><strong>Full Name:</strong> {selectedChar2.biography['full-name']}</p>
                <p><strong>Aliases:</strong> {selectedChar2.biography.aliases.join(', ')}</p>
                <p><strong>Publisher:</strong> {selectedChar2.biography.publisher}</p>
                <p><strong>First Appearance:</strong> {selectedChar2.biography['first-appearance']}</p>
                <p><strong>Occupation:</strong> {selectedChar2.work.occupation}</p>
                <p><strong>Base:</strong> {selectedChar2.work.base}</p>
                <p><strong>Gender:</strong> {selectedChar2.appearance.gender}</p>
                <p><strong>Race/Species:</strong> {selectedChar2.appearance.race}</p>
              </div>
            </div>
          )}
        </div>

        {selectedChar1 && selectedChar2 && (
          <>
            <div className="character-charts-grid">
              <div className="chart-card">
                <h4>Power Statistics</h4>
                <p>This chart provides a quick representation of strengths, making it easy to compare characters based on their unique power profiles.</p>
               <p><b>Hover over a dot...</b></p>
                <ComparisonPowerChart character1={selectedChar1} character2={selectedChar2} />
              </div>

              <div className="chart-card">
                <h4>Physical Attributes</h4>
                <p>This Height Comparison Chart visually compares a selected characters height against two random characters.</p>
                <p><b>Try clicking on name...</b></p>
                <div className="side-by-side-charts">
                  <CharacterChart
                    character={selectedChar1}
                    type="appearance"
                    allCharacters={heroes}
                  />
                  <CharacterChart
                    character={selectedChar2}
                    type="appearance"
                    allCharacters={heroes}
                  />
                </div>
              </div>

              <div className="chart-card">
                <h4>Group Affiliations & Relationships</h4>
                <p>This visualization highlights how characters are linked within their universe revealing key alliances, rivalries and team dynamics at a glance.</p>
                <p><b>Hover over a dot...</b></p>
                <div className="side-by-side-charts">
                  <CharacterChart character={selectedChar1} type="biography" />
                  <CharacterChart character={selectedChar2} type="biography" />
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Comparison;
