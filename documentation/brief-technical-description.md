# Brief Technical Description

## What the App Does
FaceOff is a React-based web application that allows users to explore, compare and visualize statistics for over 700 superheroes and villains from various comic book universes (Marvel, DC and more). Users can browse a dashboard of top characters, compare two characters side-by-side and view a timeline of a character's history and evolution.

## API Used
The app uses the [SuperHero API](https://superheroapi.com/index.html) to fetch character data, including power stats, appearance, biography and connections. API requests are handled via Axios and the API token is stored in a `.env` file.

## Types of Visualisations
- **Radar Charts:** For comparing power statistics (intelligence, strength, speed, durability, power, combat).
- **Polar Area Charts:** For visualizing physical attributes (height, weight, etc.).
- **Timeline Charts:** For showing a character's history, first appearance and publisher evolution.
- **Info Cards & Tables:** For displaying detailed character information and relationships.

## Assumptions
- All character data is fetched live from the SuperHero API; no backend or local database is used.
- The app assumes the API is available and responsive; limited error handling is implemented for API downtime.
- Visualizations are based on the data structure provided by the API, which may have missing or inconsistent fields for some characters.

## Limitations
- The app is read-only; users cannot add or edit character data.
- Some characters may have incomplete or missing data, which can affect chart accuracy.
- Advanced analytics (e.g. exporting data, multi-character comparison) are not implemented but are suggested for future work.
- The app is optimized for modern browsers and may not be fully compatible with legacy browsers.


