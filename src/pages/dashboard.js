import React, { useState, useEffect, useRef } from 'react';
import GlowHeader from '../components/glow-header';
import CharacterCard from '../components/charactercard';
import CharacterChart from '../components/characterchart';
import './dashboard.css';
import infoIcon from '../assets/info.png';
import axios from 'axios';

export default function Dashboard() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const fetchPowerfulCharacters = async () => {
      setLoading(true);
      try {
        // Fetch first 30 characters to find the most powerful ones
        const requests = Array.from({ length: 30 }, (_, i) => 
          axios.get(`https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/${i + 1}`)
        );
        
        const responses = await Promise.all(requests);
        const allCharacters = responses.map(res => res.data);
        
        // Calculate power level for each character
        const charactersWithPower = allCharacters.map(char => {
          const stats = char.powerstats;
          const totalPower = Object.values(stats).reduce((sum, stat) => 
            sum + (parseInt(stat) || 0), 0);
          return { ...char, totalPower };
        });

        // Sort by total power and get top 10 (approximately top 5% of fetched characters)
        const powerfulCharacters = charactersWithPower
          .sort((a, b) => b.totalPower - a.totalPower)
          .slice(0, 12); // Get top 12 characters

        setCharacters(powerfulCharacters);
      } catch (error) {
        console.error('Error fetching powerful characters:', error);
      } finally {
        setLoading(false);
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - cardContainerRef.current.offsetLeft);
    setScrollLeft(cardContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - cardContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    cardContainerRef.current.scrollLeft = scrollLeft - walk;
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
              <strong>Welcome to FaceOff!</strong> FaceOff is your ultimate superhero and villain showdown platform, where you can compare the mightiest heroes and villains from across the comic book multiverse. Whether you're a die-hard comic book fan or a data enthusiast, our interactive visualizations
               let you explore and analyze superhero stats like never before.
               <br /><br />
               Powered by the SuperHero API, FaceOff brings you a rich dataset featuring over 700 characters from Marvel, DC Comics 
               and beyond. This API provides in-depth details on each superhero and villain, including power stats like 
               intelligence, strength, speed, durability, power and combat skills. You can also explore biographical 
               information such as real names, aliases and first comic appearances, along with physical attributes like
                height, weight, race and more. The dataset also includes team affiliations, relationships with other 
                characters and high-quality images for each hero and villain.
                <br /><br />
                FaceOff allows you to compare characters side by side, track their abilities over time and uncover fascinating insights into the world of superheroes. Choose your fighter, analyze their strengths and see how they 
                stack up against the competition as you dive into the ultimate superhero data experience!
            </p>
          </div>
        )}
      </div>

      {/* HEADING */}
      <div className={`dashboard-content-wrapper ${showInfo ? "info-expanded" : ""}`}>
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
          <div 
            className="card-scroll-container" 
            ref={cardContainerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {characters.map((character, index) => (
              <div
                className={`card-wrapper ${index === selectedCharacterIndex ? 'active-card' : ''}`}
                key={character.id}
                onClick={() => !isDragging && handleCardClick(index)}
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
                <p>This chart provides a quick representation of strengths, making it easy to compare characters based on their unique power profiles.</p>
               <p><b>Hover over a dot...</b></p>
  <CharacterChart character={characters[selectedCharacterIndex]} type="powerstats" />
</div>

<div className="chart-card">
<h4>Physical Attributes</h4>
                <p>This Height Comparison Chart visually compares a selected characters height against two random characters.</p>
                <p><b>Try clicking on name...</b></p>
  <CharacterChart
    character={characters[selectedCharacterIndex]}
    type="appearance"
    allCharacters={characters}
  />
</div>


    <div className="chart-card">
    <h4>Group Affiliations & Relationships</h4>
                <p>This visualization highlights how characters are linked within their universe revealing key alliances, rivalries and team dynamics at a glance.</p>
                <p><b>Hover over a dot...</b></p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
      <CharacterChart character={characters[selectedCharacterIndex]} type="biography" />
    </div>

    <div className="chart-card">
    <h4>Alter Egos</h4>
              <p>This chart shows the different alter egos of the character over time.</p>
              <p><b>Hover over section..</b></p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="work" />
    </div>

    <div className="chart-card full-width">
    <h4>Character Timeline</h4>
            <p>The Character Evolution Timeline provides a dynamic way to see how characters have developed throughout their history.</p>
            <p><b>Hover over dots..</b></p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="aliases" />
    </div>
        </div>
        )}
      </div>
    </div>
  );
}
