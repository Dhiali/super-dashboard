import React, { useState, useEffect } from 'react';
import GlowHeader from '../components/glow-header';
import CharacterCard from '../components/charactercard';
import CharacterChart from '../components/characterchart';
import './dashboard.css';
import infoIcon from '../assets/info.png';

export default function Dashboard() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fetchPowerfulCharacters = async () => {
      try {
        // Reduced initial fetch to 50 characters for faster loading
        const characterIds = Array.from({ length: 300 }, (_, i) => i + 1);
        const totalCharacters = characterIds.length;
        let loadedCount = 0;

        const results = await Promise.all(
          characterIds.map(async (id) => {
            try {
              const response = await fetch(`https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/${id}`);
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const data = await response.json();
              loadedCount++;
              setLoadingProgress(Math.floor((loadedCount / totalCharacters) * 100));
              return data;
            } catch (error) {
              loadedCount++;
              setLoadingProgress(Math.floor((loadedCount / totalCharacters) * 100));
              return null;
            }
          })
        );

        // Filter valid results
        const validResults = results.filter(char => 
          char !== null && 
          char.powerstats &&
          char.image?.url &&
          !char.image.url.includes('null')
        );

        // Calculate power scores with adjusted weights
        const charactersWithPowerScore = validResults.map(char => {
          const stats = char.powerstats;
          const powerValues = Object.entries(stats).map(([key, value]) => {
            const numValue = value === "null" ? 0 : parseInt(value);
            // Adjusted weights to better reflect overall power
            const weights = {
              strength: 1.2,
              power: 1.3,
              combat: 1.1,
              durability: 1.2,
              speed: 1.1,
              intelligence: 1.0
            };
            return numValue * (weights[key.toLowerCase()] || 1);
          });
          
          const totalPower = powerValues.reduce((sum, val) => sum + val, 0);
          return {
            ...char,
            powerScore: totalPower
          };
        });

        // Sort by power score and get top characters
        const sortedCharacters = charactersWithPowerScore
          .sort((a, b) => b.powerScore - a.powerScore);
        
        // Get top 15 characters instead of top 5%
        const topCharacters = sortedCharacters.slice(0, 15);
        
        console.log('Top powerful characters:', topCharacters);
        setCharacters(topCharacters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
        // Fallback to Superman if API fails completely
        setCharacters([{
          id: 1,
          name: "Superman",
          image: { url: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg' },
          biography: {
            'full-name': 'Clark Kent',
            aliases: ['Man of Steel'],
            publisher: 'DC Comics',
            'first-appearance': 'Action Comics #1'
          },
          work: { occupation: 'Reporter', base: 'Metropolis' },
          appearance: { gender: 'Male', race: 'Kryptonian' },
          powerstats: {
            intelligence: "90",
            strength: "100",
            speed: "100",
            durability: "100",
            power: "100",
            combat: "85"
          }
        }]);
      }
    };

    fetchPowerfulCharacters();
  }, []);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleCardClick = (index) => {
    setSelectedCharacterIndex(index === selectedCharacterIndex ? null : index);
  };

  return (
    <div className="dashboard-container">
      <GlowHeader />

      {/* INFO BUBBLE */}
      <div className={`info-bubble ${showInfo ? 'expanded' : ''}`} onClick={toggleInfo}>
        <img src={infoIcon} alt="Info Icon" className="info-icon-inside-bubble" />
        {showInfo && (
          <div className="info-text">
            <p>
              <strong>Welcome to FaceOff!</strong> Welcome to FaceOff! FaceOff is your ultimate superhero showdown platform, where you can compare the mightiest heroes and villains from across the comic book multiverse. Whether you're a die-hard comic book fan or a data enthusiast, our interactive visualizations
               let you explore and analyze superhero stats like never before.
               <br /><br />
               Powered by the SuperHero API, FaceOff brings you a rich dataset featuring over 700 characters from Marvel, DC Comics, 
               and beyond. This API provides in-depth details on each superhero and villain, including power stats like 
               intelligence, strength, speed, durability, power, and combat skills. You can also explore biographical 
               information such as real names, aliases, and first comic appearances, along with physical attributes like
                height, weight, race, and more. The dataset also includes team affiliations, relationships with other 
                characters, and high-quality images for each hero and villain.
                <br /><br />
                FaceOff allows you to compare characters side by side, track their abilities over time, and uncover fascinating insights into the world of superheroes. Choose your fighter, analyze their strengths, and see how they 
                stack up against the competition as you dive into the ultimate superhero data experience!
            </p>
          </div>
        )}
      </div>

      {/* HEADING */}
      <div className="dashboard-content-wrapper">
        <h2 className="dashboard-heading">
          Browse the Elite: The Top 5% Most Powerful Superheroes & Villains
        </h2>

        {loading ? (
          <div className="loading-container">
            <div className="loading">Loading powerful characters... {loadingProgress}%</div>
            <div className="loading-bar">
              <div 
                className="loading-progress" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="card-scroll-container" id="card-scroll">
            {characters.map((character, index) => (
              <div
                className={`card-wrapper ${index === selectedCharacterIndex ? 'active-card' : ''}`}
                key={character.id}
                onClick={() => handleCardClick(index)}
              >
                <CharacterCard character={character} />
              </div>
            ))}
          </div>
        )}

       {/*  ADD THIS BLOCK BELOW CHARACTER CARDS */}
       {selectedCharacterIndex !== null && (
        <div className="character-charts-grid">
         <div className="chart-card">
  <h4>Power Statistics</h4>
  <p>This chart provides a quick, at-a-glance representation of strengths, making it easy to compare heroes and villains based on their unique power profiles.</p>
  <CharacterChart character={characters[selectedCharacterIndex]} type="powerstats" />
</div>

<div className="chart-card">
  <h4>Physical Attributes </h4>
  <p>The Height Comparison Chart visually comparing a selected superhero’s height against two randomly chosen characters.</p>
  <CharacterChart
    character={characters[selectedCharacterIndex]}
    type="appearance"
    allCharacters={characters}
  />
</div>


    <div className="chart-card">
      <h4>Group Affiliations & Relationships </h4>
      <p>This visualization highlights how characters are linked within their universe, revealing key alliances, rivalries, and team dynamics at a glance.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="biography" />
    </div>

    <div className="chart-card">
      <h4>Timeline - Alter Egos</h4>
      <p>The First Appearance card allows users to explore superhero debuts across different eras.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="work" />
    </div>

    <div className="chart-card full-width">
      <h4>Timeline</h4>
      <p>The Character Evolution Timeline provides a dynamic way to see how characters have developed throughout their history.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="aliases" />
    </div>
        </div>
        )}
      </div>
    </div>
  );
}
