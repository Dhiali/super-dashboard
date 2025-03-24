import React, { useState } from 'react';
import './charactercard.css';

export default function CharacterCard({ character }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle potential null or missing values from API
  const getDisplayValue = (value) => {
    if (!value || value === "null" || value === "-") return "Unknown";
    return value;
  };

  const getAliases = (aliases) => {
    if (!aliases || aliases === "null" || aliases === "-") return "None";
    return Array.isArray(aliases) ? aliases.join(', ') : aliases;
  };

  return (
    <div
      className={`character-card ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleCard}
    >
      <img 
        src={character.image?.url || 'placeholder-image.jpg'} 
        alt={character.name} 
        className="character-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'placeholder-image.jpg';
        }}
      />
      
      {isExpanded && (
        <div className="character-info">
          <h3 className="character-name">{getDisplayValue(character.name)}</h3>
          <p><strong>Full Name:</strong> {getDisplayValue(character.biography?.['full-name'])}</p>
          <p><strong>Aliases:</strong> {getAliases(character.biography?.aliases)}</p>
          <p><strong>Publisher:</strong> {getDisplayValue(character.biography?.publisher)}</p>
          <p><strong>First Appearance:</strong> {getDisplayValue(character.biography?.['first-appearance'])}</p>
          <p><strong>Occupation:</strong> {getDisplayValue(character.work?.occupation)}</p>
          <p><strong>Base:</strong> {getDisplayValue(character.work?.base)}</p>
          <p><strong>Gender:</strong> {getDisplayValue(character.appearance?.gender)}</p>
          <p><strong>Race/Species:</strong> {getDisplayValue(character.appearance?.race)}</p>
        </div>
      )}
    </div>
  );
}