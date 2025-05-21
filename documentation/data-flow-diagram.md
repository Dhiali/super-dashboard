# Data Flow Diagram (DFD)

This diagram illustrates how data flows from the SuperHero API through the FaceOff React application and into the visualization components.

---

```mermaid
flowchart TD
    A[User Interacts with UI] --> B[React Components (Pages/Views)]
    B --> C[API Handler / Axios]
    C --> D[SuperHero API]
    D --> C
    C --> E[Process & Transform Data]
    E --> F[App State (useState/useEffect)]
    F --> G[Visualization Components]
    G --> H[Charts, Tables, Info Cards]

    subgraph API
        D
    end
    subgraph Frontend
        B
        C
        E
        F
        G
        H
    end
```

---

**Legend:**
- **User Interacts with UI**: User actions (search, compare, view timeline, etc.)
- **React Components**: Pages and components handling user input and rendering views
- **API Handler / Axios**: Handles HTTP requests to the SuperHero API
- **SuperHero API**: External data source
- **Process & Transform Data**: Data formatting, filtering and mapping for frontend use
- **App State**: Data stored in React state (useState/useEffect)
- **Visualization Components**: Chart.js, info cards, tables, etc.

