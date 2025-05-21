# Component/Architecture Diagram

This diagram shows how the main frontend components of FaceOff are structured and how they interact, especially for data visualization.

---

```mermaid
flowchart TD
    App[App.js]
    Navbar[Navbar]
    Pages[Pages (Dashboard, Comparison, Timeline)]
    Dashboard[Dashboard Page]
    Comparison[Comparison Page]
    Timeline[Timeline Page]
    CharacterCard[CharacterCard]
    CharacterChart[CharacterChart]
    ComparisonPowerChart[ComparisonPowerChart]
    LoadingScreen[LoadingScreen]
    ChartJS[Chart.js Library]

    App --> Navbar
    App --> Pages
    Pages --> Dashboard
    Pages --> Comparison
    Pages --> Timeline
    Dashboard --> CharacterCard
    Dashboard --> CharacterChart
    Comparison --> ComparisonPowerChart
    Timeline --> CharacterCard
    Timeline --> CharacterChart
    CharacterChart --> ChartJS
    ComparisonPowerChart --> ChartJS

    subgraph Visualization
        CharacterChart
        ComparisonPowerChart
    end
```

---

**Legend:**
- **App.js**: Root component, manages routing and layout.
- **Navbar**: Top navigation bar.
- **Pages**: Main views (Dashboard, Comparison, Timeline).
- **CharacterCard**: Displays character info.
- **CharacterChart/ComparisonPowerChart**: Visualization components using Chart.js.
- **LoadingScreen**: Shown during data fetches.
- **Chart.js**: External charting library.

