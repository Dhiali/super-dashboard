import React, { useState } from 'react';
import GlowHeader from '../components/glow-header';
import CharacterChart from '../components/characterchart';
import './dashboard.css';
import './comparison.css';
import infoIcon from '../assets/info.png';
import './timeline.css';

const TimelinePage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
              <strong>Explore a Superhero’s Journey Over Time</strong>
              <br /><br />
              Welcome to the Timeline Page, where you can dive into the history of your favorite
              superhero/villain. This interactive timeline allows you to explore key milestones,
              from their first comic book appearance to major transformations, publishers, and alter
              ego changes. Scroll through time to see how each character has grown, adapted, and shaped
              their universe. Whether you're tracking a hero’s legacy or uncovering their past, this page
              brings their story to life in a dynamic and engaging way!
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
        {/* Character Card */}
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

        {/* Alter Egos Chart */}
        <div className="alter-egos-chart">
          <h4>Alter Egos</h4>
          <p>This chart shows the different alter egos of the character over time.</p>
          <div className="chart-wrapper">
            <CharacterChart character={selectedCharacter} type="work" />
          </div>
        </div>
      </div>

      {/* TIMELINE CHART */}
      <div className="timeline-chart">
        <h4>Character Timeline</h4>
        <p>The Character Evolution Timeline provides a dynamic way to see how characters have developed throughout their history.</p>
        <div className="chart-wrapper">
          <CharacterChart character={selectedCharacter} type="aliases" />
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
