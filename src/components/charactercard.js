import React, { useState } from 'react';
import './charactercard.css';

export default function CharacterCard({ character }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`character-card ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleCard}
    >
      <img src={character.image.url} alt={character.name} className="character-image" />
      
      {isExpanded && (
        <div className="character-info">
          <p><strong>Full Name:</strong> {character.biography['full-name']}</p>
          <p><strong>Aliases:</strong> {character.biography.aliases.join(', ')}</p>
          <p><strong>Publisher:</strong> {character.biography.publisher}</p>
          <p><strong>First Appearance:</strong> {character.biography['first-appearance']}</p>
          <p><strong>Occupation:</strong> {character.work.occupation}</p>
          <p><strong>Base:</strong> {character.work.base}</p>
          <p><strong>Gender:</strong> {character.appearance.gender}</p>
          <p><strong>Race/Species:</strong> {character.appearance.race}</p>
        </div>
      )}
    </div>
  );
}
