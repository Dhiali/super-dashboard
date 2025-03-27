<p align="center">
  <img src="https://github.com/Dhiali/super-dashboard/blob/main/src/assets/fo%202.3.png?raw=true" width="150">
</p>
 
# FaceOff - Superhero Power Comparison API

FaceOff is an interactive data visualization platform that brings superhero and villain statistics to life through dynamic, engaging charts and comparisons. Built with React and powered by the SuperHero API (https://superheroapi.com/index.html), this application allows users to explore over 700 characters from various comic book universes including Marvel, DC and more. Users can browse through the most powerful characters in the dashboard, compare any two characters head-to-head in the comparison view or dive deep into a character's history and evolution in the timeline section. Each view offers unique interactive visualizations including radar charts for power statistics, polar area charts for physical attributes, relationship networks and chronological timelines. Whether you're a comic book enthusiast seeking to settle debates about character abilities, a data visualization fan interested in creative ways to present information or just curious about superhero statistics, FaceOff provides an engaging platform to explore and analyze superhero data in ways never seen before.



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

