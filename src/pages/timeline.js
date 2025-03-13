import React, { useState } from 'react';
import GlowHeader from '../components/glow-header';
import CharacterChart from '../components/characterchart';
import './dashboard.css';
import './comparison.css'; // Import the comparison CSS for consistent styling
import infoIcon from '../assets/info.png';
import './timeline.css'; // Separate CSS file for timeline page

const TimelinePage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Mock character data for demonstration purposes
  const selectedCharacter = {
    name: 'Superman',
    image: { url: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg' },
    biography: {
      'full-name': 'Clark Kent',
      aliases: ['Kal-El', 'Man of Steel'],
      publisher: 'DC Comics',
      'first-appearance': 'Action Comics #1',
    },
    work: {
      occupation: 'Journalist',
      base: 'Metropolis',
    },
    appearance: {
      gender: 'Male',
      race: 'Kryptonian',
    },
  };

  return (
    <div className="timeline-page">
      <GlowHeader />

      {/* INFO BUBBLE */}
      <div className={`info-bubble ${showInfo ? 'expanded' : ''}`} onClick={toggleInfo}>
        <img src={infoIcon} alt="Info Icon" className="info-icon-inside-bubble" />
        {showInfo && (
          <div className="info-text">
            <p>
              <strong>Welcome to the Timeline Page!</strong>
              Explore the evolution of your favorite superheroes and villains over time.
              Discover key moments in their history and see how they have changed.
            </p>
          </div>
        )}
      </div>

      {/* SEARCH BAR */}
      <div className="comparison-search-container">
        <input
          type="text"
          placeholder="Search for a character"
          className="comparison-search-input full-width"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* CHARACTER CARD AND CHARTS */}
      <div className="content-container">
        <CharacterChart character={selectedCharacter} type="work" className="alter-egos-chart" />
        <div className="comparison-character-card-info">
          <img src="https://i.pinimg.com/736x/d7/b7/ac/d7b7ac5970e78b7a12f8ad51ece24e89.jpg" alt="Character" className="comparison-character-image" />
          <div className="comparison-character-info">
            <p><strong>Full Name:</strong> Clark Kent</p>
            <p><strong>Aliases:</strong> Kal-El, Man of Steel</p>
            <p><strong>Publisher:</strong> DC Comics</p>
            <p><strong>First Appearance:</strong> Action Comics #1</p>
            <p><strong>Occupation:</strong> Journalist</p>
            <p><strong>Base:</strong> Metropolis</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Race/Species:</strong> Kryptonian</p>
          </div>
        </div>
      </div>

      {/* TIMELINE CHART */}
      <CharacterChart character={selectedCharacter} type="aliases" className="timeline-chart" />
    </div>
  );
};

export default TimelinePage;
