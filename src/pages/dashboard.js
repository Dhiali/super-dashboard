import { useState } from 'react';
import GlowHeader from '../components/glow-header';
import CharacterCard from '../components/charactercard';
import CharacterChart from '../components/characterchart';
import './dashboard.css';
import infoIcon from '../assets/info.png';

export default function Dashboard() {
  const characters = [
    {
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
    },

    {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/cd/14/81/cd148181b2ac105c7dace202c6882d20.jpg' },
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
      },

      {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/5d/90/c3/5d90c36487a915c3d7d68e874d499cb7.jpg' },
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
      },

      {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/0a/ae/16/0aae16ef7662a7ec7258159221ca2815.jpg' },
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
      },


      {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/aa/eb/19/aaeb19bd677d0a86259b0c0f666cecc4.jpg' },
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
      },


      {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/9c/a5/6a/9ca56ade41055793f6d6cf26eea4931b.jpg' },
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
      },


      {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/f6/3a/69/f63a69bfee8336651f81885b4d52233e.jpg' },
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
      },


      {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/d7/b7/ac/d7b7ac5970e78b7a12f8ad51ece24e89.jpg' },
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
      },

      {
        name: 'Superman',
        image: { url: 'https://i.pinimg.com/736x/eb/cb/93/ebcb939690225d022e131a3a37ced355.jpg' },
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
      },

    // Add more characters here...
  
  ];

  const [showInfo, setShowInfo] = useState(false);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);

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
              <strong>Welcome to FaceOff!</strong> {/* You can add full content here */}
            </p>
          </div>
        )}
      </div>

      {/* HEADING */}
      <div className="dashboard-content-wrapper">
        <h2 className="dashboard-heading">
          Browse the Elite: The Top 5% Most Powerful Superheroes & Villains
        </h2>

        {/* CARD SCROLL AREA */}
        <div className="card-scroll-container" id="card-scroll">
          {characters.map((character, index) => (
            <div
              className={`card-wrapper ${index === selectedCharacterIndex ? 'active-card' : ''}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <CharacterCard character={character} />
            </div>
          ))}
        </div>

       {/*  ADD THIS BLOCK BELOW CHARACTER CARDS */}
       {selectedCharacterIndex !== null && (
        <div className="character-charts-grid">
          <div className="chart-card">
      <h3>Powerstats</h3>
      <p>This chart provides a quick, at-a-glance representation of strengths, 
        making it easy to compare heroes and villains based on their unique power profiles.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="powerstats" />
    </div>

    <div className="chart-card">
      <h3>Physical Attributes </h3>
      <p>The Height Comparison Polar area centered chart visually comparing a selected 
        superhero’s height against two randomly chosen characters.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="appearance" />
    </div>

    <div className="chart-card">
      <h3>Biography Summary</h3>
      <p>Core identity and backstory of the character.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="biography" />
    </div>

    <div className="chart-card">
      <h3>Work Details</h3>
      <p>Explore the character's base and occupation.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="work" />
    </div>

    <div className="chart-card full-width">
      <h3>Aliases</h3>
      <p>Alternate names and code names used by the character.</p>
      <CharacterChart character={characters[selectedCharacterIndex]} type="aliases" />
    </div>
        </div>
        )}
      </div>
    </div>
  );
}
