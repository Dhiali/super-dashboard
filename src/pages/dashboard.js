import { useState } from 'react';
import GlowHeader from '../components/glow-header';
import CharacterCard from '../components/charactercard';
import './dashboard.css';
import infoIcon from '../assets/info.png'; // your icon path

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

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

    // Drag-to-scroll logic
    const handleMouseDown = (e) => {
        const slider = e.currentTarget;
        slider.isDown = true;
        slider.startX = e.pageX - slider.offsetLeft;
        slider.scrollLeft = slider.scrollLeft;
        slider.classList.add('grab');
      };
    
      const handleMouseLeave = (e) => {
        const slider = e.currentTarget;
        slider.isDown = false;
        slider.classList.remove('grab');
      };
    
      const handleMouseUp = (e) => {
        const slider = e.currentTarget;
        slider.isDown = false;
        slider.classList.remove('grab');
      };
    
      const handleMouseMove = (e) => {
        const slider = e.currentTarget;
        if (!slider.isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - slider.startX) * 1.5; //scroll speed
        slider.scrollLeft -= walk;
      };
    

  return (
    <div className="dashboard-container">
      <GlowHeader />

      <div className={`info-bubble ${showInfo ? 'expanded' : ''}`} onClick={toggleInfo}>
        <img src={infoIcon} alt="Info Icon" className="info-icon-inside-bubble" />
        {showInfo && (
          <div className="info-text">
            <p>
              <strong>Welcome to FaceOff!</strong> FaceOff is your ultimate superhero showdown platform, 
              where you can compare the mightiest heroes and villains from across the comic book multiverse. 
              Whether you're a die-hard comic book fan or a data enthusiast, our interactive visualizations let 
              you explore and analyze superhero stats like never before.
              <br /><br />
              Powered by the SuperHero API, FaceOff brings you a rich dataset featuring over 700 characters from Marvel,
               DC Comics, and beyond. This API provides in-depth details on each superhero and villain, including power
                stats like intelligence, strength, speed, durability, power, and combat skills. You can also explore 
                biographical information such as real names, aliases, and first comic appearances, along with physical 
                attributes like height, weight, race, and more. The dataset also includes team affiliations, 
                relationships with other characters, and high-quality images for each hero and villain.

              <br /><br />
              FaceOff allows you to compare characters side by side, track their abilities over time, 
              and uncover fascinating insights into the world of superheroes.Choose your fighter, analyze 
              their strengths, and see how they stack up against the competition as you dive into the ultimate 
              superhero data experience!
            </p>
          </div>
          
        )}
      </div>

    
      <div className="dashboard-content-wrapper">
    <h2 className="dashboard-heading">
      Browse the Elite: The Top 5% Most Powerful Superheroes & Villains
    </h2>

    
    <div
  className="card-scroll-container"
  onMouseDown={handleMouseDown}
  onMouseLeave={handleMouseLeave}
  onMouseUp={handleMouseUp}
  onMouseMove={handleMouseMove}
>
  {characters.map((character, index) => (
    <CharacterCard key={index} character={character} />
  ))}
</div>


  </div>

    </div>
  );
}


