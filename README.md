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
The development process prioritized user experience, implementing a dual search system that allows real-time character comparison. The interactive radar charts became a standout feature, displaying power statistics in an intuitive format. We integrated smooth transitions and glowing effects to enhance the comic-book aesthetic, while maintaining responsive design principles for optimal viewing across devices. The information bubble feature provides context and guidance, making the platform accessible to both casual fans and dedicated comic enthusiasts.

### Challenges
One of the primary challenges involved managing API calls efficiently. Initially, we faced performance issues due to multiple components making independent API calls. We resolved this by implementing a centralized API handling system that manages data fetching and distribution. State management presented another significant challenge, particularly with the dual search system. We overcame this by implementing a consolidated state management approach using React's useState hook, which improved component communication and reduced unnecessary re-renders. Tablet responsiveness required careful consideration, especially for the chart components. We addressed this through CSS media queries and flexible layouts that adapt to different screen sizes while maintaining functionality.

Throughout the development, we gained valuable insights into efficient API integration, state management patterns and responsive design principles. The project highlighted the importance of planning component architecture before implementation and the benefits of centralized data management. Future improvements could include implementing a caching system for frequently accessed character data, expanding the comparison metrics and adding more interactive features like character relationship networks. The development process has established a solid foundation for future enhancements while maintaining the core goal of providing an engaging platform for superhero comparison.


License
This project is licensed under the MIT License.

This README file provides an overview of the project, setup instructions, and details about the approach taken to make the website responsive. If you have any questions or need further assistance, feel free to ask!

