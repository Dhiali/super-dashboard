<p align="center">
  <img src="https://github.com/Dhiali/super-dashboard/blob/main/src/assets/fo%202.3.png?raw=true" width="150">
</p>
 
# FaceOff - Superhero Power Comparison API

FaceOff is an interactive data visualization platform that brings superhero and villain statistics to life through dynamic, engaging charts and comparisons. Built with React and powered by the SuperHero API (https://superheroapi.com/index.html), this application allows users to explore over 700 characters from various comic book universes including Marvel, DC and more. Users can browse through the most powerful characters in the dashboard, compare any two characters head-to-head in the comparison view or dive deep into a character's history and evolution in the timeline section. Each view offers unique interactive visualizations including radar charts for power statistics, polar area charts for physical attributes, relationship networks and chronological timelines. Whether you're a comic book enthusiast seeking to settle debates about character abilities, a data visualization fan interested in creative ways to present information or just curious about superhero statistics, FaceOff provides an engaging platform to explore and analyze superhero data in ways never seen before.

### Built With
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![ChartJS](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)


![Faceoff homepage screenshot](https://github.com/Dhiali/super-dashboard/blob/main/src/assets/home%20screen.png?raw=true)

## How To Install

To get started, clone the repo:
```
git clone https://github.com/Dhiali/super-dashboard.git
```

Install all the dependencies using npm:
```
npm install
```

Run the app:
```
npm start
```

## Features

| Home Page | Compare Page | Timeline Page |
| :--- | :--- | :--- |
| Character Gallery | Dual Search System | Character Evolution |
| Global Statistics | Character Cards | Interactive Timeline |
| Featured Character | Visualization Charts | Publisher History |
| Visualization Charts |  |  |
| Interactive Info Bubble |  |  |

## The Idea

The idea was to create an immersive superhero comparison platform where users can analyze and compare their favorite characters through interactive data visualizations.

## Wireframes

![Wireframe](https://github.com/Dhiali/super-dashboard/blob/main/src/assets/wireframess.png?raw=true)

## Development Process

### Highlights
Highlights of my page are definitely my search bar and my evolution chain, I think these added features really gives a nice user experience and a nice flow to the website

### Challenges
This was my first react project and I made some beginner mistakes by having each component making it's own api calls to [PokeAPI](https://pokeapi.co/) and some of the other components were dependant on the information from other components. I Had to rewrite almost all of my code to have all the api calls in one file that passes the data into an array, which made it a lot easier to get the data I needed, this allowed me to just import the data file into each component and use only what I needed. None of the components were dependant on each other.

Another main challenge I had was with regards to the search bar and the evolution chain. Some pokemon names had '-' high-fins in their names and I made a function that splits then name and only used the first part of the name. Later on in my build, this made issues where my search bar was dependent on having the full name to access the correct api link and this was essential for my evolution chain as well as loading the data for the Pokemon that the user searches for. To fix this issue, I rewrote all my code for my search bar and started by pushing the full name with the high-fins to my array and then a modified version of the names that had only the name.

Dashboard Page: Displays a list of top superheroes and villains with interactive character cards.
Comparison Page: Allows users to compare two characters side by side with various charts.
Timeline Page: Provides an interactive timeline for exploring a character's history and alter egos.
Responsive Design: Ensures the application looks good and functions well on different devices and screen sizes.
Setup Instructions
Prerequisites
Node.js and npm installed on your machine.
Basic knowledge of React and CSS.
Steps to Set Up the Project
Clone the Repository

Copy
git clone <repository-url>
cd superhero-dashboard
Install Dependencies

Copy
npm install
Start the Development Server

Copy
npm start
This will start the development server and open the application in your default web browser.

Project Structure
src/components: Contains reusable React components used throughout the application.
src/pages: Contains the main pages of the application (Dashboard, Comparison, Timeline).
src/css: Contains CSS files for styling the application.
src/data: Contains sample data for superheroes and villains.
Making the Website Responsive
To ensure the website is responsive, the following approaches were taken:

Flexbox and Grid Layouts: Utilized Flexbox and CSS Grid to create flexible and responsive layouts that adapt to different screen sizes.

Media Queries: Implemented media queries to adjust the layout and styles for different screen sizes. The breakpoints used are:

max-width: 1200px: Adjust layout for medium to large screens.
max-width: 768px: Adjust layout for tablets and smaller screens.
max-width: 480px: Adjust layout for mobile devices.
Relative Units: Used relative units like percentages (%) and viewport width (vw) to ensure elements scale appropriately across different devices.

Responsive Images: Ensured images scale properly on different screen sizes by setting max-width: 100% and height: auto.

Overflow Handling: Added overflow: hidden to ensure content stays within its container and does not overflow.

Custom Components
GlowHeader: A reusable header component with a glowing effect.
CharacterCard: A component to display character information.
CharacterChart: A component to display various charts related to a character.
ComparisonPowerChart: A component to compare the power statistics of two characters.
CSS Files
dashboard.css: Styles for the dashboard page.
comparison.css: Styles for the comparison page.
timeline.css: Styles for the timeline page.
Future Enhancements
Implement more interactive features and animations.
Add more detailed charts and visualizations.
Improve accessibility features.
Contributing
Feel free to fork the repository and submit pull requests with improvements or new features. Please ensure to update the documentation as needed.

License
This project is licensed under the MIT License.

This README file provides an overview of the project, setup instructions, and details about the approach taken to make the website responsive. If you have any questions or need further assistance, feel free to ask!

