import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlowHeader from '../components/glow-header';
import CharacterChart from '../components/characterchart';
import './dashboard.css';
import './comparison.css';
import infoIcon from '../assets/info.png';
import './timeline.css';

const TimelinePage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoker = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          'https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/search/Joker'
        );
        if (data.results && data.results.length > 0) {
          setSelectedCharacter(data.results[0]);
        }
      } catch (error) {
        console.error('Error fetching Joker:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJoker();
  }, []);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    try {
      const { data } = await axios.get(
        `https://www.superheroapi.com/api.php/8ded20877f9a17e2095ab692c039d13a/search/${query}`
      );
      setSearchResults(data.results || []);
    } catch (error) {
      console.error('Error searching characters:', error);
      setSearchResults([]);
    }
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    setSearchQuery(character.name);
    setSearchResults([]);
  };

  return (
    <div className={`timeline-page ${showInfo ? 'info-expanded' : ''}`}>
      <GlowHeader />

      {/* INFO BUBBLE */}
      <div className={`info-bubble ${showInfo ? 'expanded' : ''}`} onClick={toggleInfo}>
        <img src={infoIcon} alt="Info Icon" className="info-icon-inside-bubble" />
        {showInfo && (
          <div className="info-text">
            <p>
              <strong>Explore A Characters Journey Over Time</strong>
              <br /><br />
              Welcome to the Timeline Page, where you can dive into the history of your favorite
              superhero/villain. This interactive timeline allows you to explore key milestones,
              from their first comic book appearance to major transformations, publishers and alter
              ego changes. Scroll through time to see how each character has grown, adapted and shaped
              their universe. Whether you're tracking a hero’s legacy or uncovering their past, this page
              brings their story to life in a dynamic and engaging way!
            </p>
          </div>
        )}
      </div>

      {/* SEARCH BAR */}
      <div className="comparison-search-container">
        <div className="search-wrapper full-width">
          <input
            type="text"
            placeholder="Search for a character"
            className="comparison-search-input full-width"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(char => (
                <div 
                  key={char.id}
                  className="search-result-item"
                  onClick={() => handleCharacterSelect(char)}
                >
                  {char.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading character data...</div>
      ) : selectedCharacter ? (
        <>
          {/* Character Card */}
          <div className="content-container">
            <div className="comparison-character-card-info">
              <img 
                src={selectedCharacter.image.url} 
                alt={selectedCharacter.name} 
                className="comparison-character-image" 
              />
              <div className="comparison-character-info">
                <p><strong>Full Name:</strong> {selectedCharacter.biography['full-name']}</p>
                <p><strong>Aliases:</strong> {selectedCharacter.biography.aliases.join(', ')}</p>
                <p><strong>Publisher:</strong> {selectedCharacter.biography.publisher}</p>
                <p><strong>First Appearance:</strong> {selectedCharacter.biography['first-appearance']}</p>
                <p><strong>Occupation:</strong> {selectedCharacter.work.occupation}</p>
                <p><strong>Base:</strong> {selectedCharacter.work.base}</p>
                <p><strong>Gender:</strong> {selectedCharacter.appearance.gender}</p>
                <p><strong>Race/Species:</strong> {selectedCharacter.appearance.race}</p>
              </div>
            </div>

            {/* Alter Egos Chart */}
            <div className="alter-egos-chart">
              <h4>Alter Egos</h4>
              <p>This chart shows the different alter egos of the character over time.</p>
              <p><b>Hover over section..</b></p>
           
              <div className="chart-wrapper">
                <CharacterChart character={selectedCharacter} type="work" />
              </div>
            </div>
          </div>

          {/* TIMELINE CHART */}
          <div className="timeline-chart">
            <h4>Character Timeline</h4>
            <p>The Character Evolution Timeline provides a dynamic way to see how characters have developed throughout their history.</p>
            <p><b>Hover over dots..</b></p>
            <div className="chart-wrapper">
              <CharacterChart character={selectedCharacter} type="aliases" />
            </div>
          </div>
        </>
      ) : (
        <div className="loading">No character data available</div>
      )}
    </div>
  );
};

export default TimelinePage;
