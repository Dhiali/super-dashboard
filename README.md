<p align="center">
  <img src="https://github.com/Dhiali/super-dashboard/blob/main/src/assets/fo%202.3.png?raw=true" width="150">
</p>
 

# FaceOff - Superhero Power Comparison API Website
### Author
Dhiali Chetty

FaceOff is an interactive data visualization platform that brings superhero and villain statistics to life through dynamic, engaging charts and comparisons. Built with React and powered by the SuperHero API (https://superheroapi.com/index.html), this application allows users to explore over 700 characters from various comic book universes including Marvel, DC and more. Users can browse through the most powerful characters in the dashboard, compare any two characters head-to-head in the comparison view or dive deep into a character's history and evolution in the timeline section. Each view offers unique interactive visualizations including radar charts for power statistics, polar area charts for physical attributes, relationship networks and chronological timelines. Whether you're a comic book enthusiast seeking to settle debates about character abilities, a data visualization fan interested in creative ways to present information or just curious about superhero statistics, FaceOff provides an engaging platform to explore and analyze superhero data in ways never seen before.



---

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

### Prerequisites

- **Node.js** (v14 or higher recommended): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** for package management.
- **SuperHero API Key**: Register for a free API key at [SuperHero API](https://superheroapi.com/index.html). Add your API key to a `.env` file in the project root as:
  ```env
  REACT_APP_SUPERHERO_API_TOKEN=your_api_key_here
  ```
- **Git** (for cloning the repository): [Download Git](https://git-scm.com/)
- **(Optional) React DevTools**: For debugging React apps, install the [React DevTools browser extension](https://react.dev/link/react-devtools).

Make sure all prerequisites are installed before proceeding with the installation steps below.

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


## Project Features

### Main Features & Functionality

- **Character Gallery (Home Page):**
  - Browse a curated gallery of the most powerful superheroes and villains.
  - Click on any character card to view detailed charts of their power stats and physical attributes.
  - View global statistics and featured characters.
  - Interactive info bubble provides helpful tips and context.

- **Comparison View:**
  - Dual search system to find and select any two characters.
  - Side-by-side comparison of character stats, biographies and images.
  - Interactive radar and polar area charts for visualizing power and physical attributes.

- **Timeline View:**
  - Explore a character's history, evolution and publisher timeline.
  - Interactive timeline chart and info cards for key events.

- **Visualization & Analytics:**
  - Dynamic charts (powered by Chart.js) for power stats, physical attributes and timelines.
  - Responsive design for desktop and mobile devices.

- **User Experience:**
  - Smooth transitions and glowing effects for a comic-book aesthetic.
  - Info bubbles and tooltips for guidance and context.

These features provide an engaging and interactive platform for exploring, comparing, and analyzing superhero data.

## The Idea

The idea was to create an immersive superhero comparison platform where users can analyze and compare their favorite characters through interactive data visualizations.

## Wireframes

![Wireframe](https://github.com/Dhiali/super-dashboard/blob/main/src/assets/wireframess.png?raw=true)




### Challenges
One of the primary challenges involved managing API calls efficiently. Initially, we faced performance issues due to multiple components making independent API calls. We resolved this by implementing a centralized API handling system that manages data fetching and distribution. State management presented another significant challenge, particularly with the dual search system. We overcame this by implementing a consolidated state management approach using React's useState hook, which improved component communication and reduced unnecessary re-renders. Tablet responsiveness required careful consideration, especially for the chart components. We addressed this through CSS media queries and flexible layouts that adapt to different screen sizes while maintaining functionality.

Throughout the development, we gained valuable insights into efficient API integration, state management patterns and responsive design principles. The project highlighted the importance of planning component architecture before implementation and the benefits of centralized data management. Future improvements could include implementing a caching system for frequently accessed character data, expanding the comparison metrics and adding more interactive features like character relationship networks. The development process has established a solid foundation for future enhancements while maintaining the core goal of providing an engaging platform for superhero comparison.

## Demonstration
[Link To Demonstration Video](https://drive.google.com/drive/folders/1Y0wYQVNzQextt4zcyJ20wf5Buxe7BxJJ?usp=sharing)

## Conclusion

### Highlights
- Successfully implemented interactive data visualizations for superhero statistics using Chart.js.
- Developed a dual search and comparison system for side-by-side character analysis.
- Designed a responsive and visually engaging UI with glowing effects and smooth transitions.
- Integrated info bubbles and tooltips to enhance user guidance and accessibility.

### Challenges & Solutions
- **CORS Issues with Images:**
  - Challenge: Loading images from third-party APIs resulted in CORS errors.
  - Solution: Implemented a local proxy server to fetch and serve images, bypassing CORS restrictions.
- **API Data Inconsistencies:**
  - Challenge: Some characters had missing or inconsistent data fields.
  - Solution: Added robust error handling and fallback values to ensure a smooth user experience.
- **State Management for Comparisons:**
  - Challenge: Managing state for dual character selection and comparison.
  - Solution: Utilized React hooks and modularized state logic for clarity and maintainability.

### Future Improvements
- Add user authentication and the ability to save favorite characters or comparisons.
- Implement advanced analytics and trend visualizations.
- Expand the timeline feature with more granular historical data.
- Improve accessibility and add localization for multiple languages.
- Optimize performance for large datasets and mobile devices.

---

### Licensing
This project is licensed under the MIT License.

### Author & Contact
**Author:** Dhiali Chetty  
**Email:** info@dhialidigitaldesigns.co.za

### Resources
- [Figma](https://figma.com/) (UI/UX design)
- [ChatGPT](https://chat.openai.com/) (AI assistance)

This README file provides an overview of the project, setup instructions, and details about the approach taken to make the website responsive. If you have any questions or need further assistance, feel free to ask!

