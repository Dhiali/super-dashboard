# Entity-Relationship (ER) Diagram

This diagram represents the main data structures and relationships used in the FaceOff React frontend. Although the app is API-driven, the frontend manages and structures data for charts, tables and state management.

---

```mermaid
erDiagram
    Character {
        string id
        string name
        PowerStats powerstats
        Appearance appearance
        Biography biography
        Connections connections
        string imageUrl
    }
    PowerStats {
        int intelligence
        int strength
        int speed
        int durability
        int power
        int combat
    }
    Appearance {
        string gender
        string race
        string height
        string weight
        string eyeColor
        string hairColor
    }
    Biography {
        string fullName
        string alterEgos
        string aliases
        string placeOfBirth
        string firstAppearance
        string publisher
        string alignment
    }
    Connections {
        string groupAffiliation
        string relatives
    }
    ChartData {
        string[] labels
        int[] values
        string chartType
    }
    AppState {
        Character selectedCharacter
        Character[] comparisonCharacters
        ChartData[] timelineData
    }

    Character o-- PowerStats
    Character o-- Appearance
    Character o-- Biography
    Character o-- Connections
    AppState o-- Character : selectedCharacter
    AppState o-- Character : comparisonCharacters
    AppState o-- ChartData : timelineData
```

---

**Legend:**
- `o--` means one-to-one or one-to-many relationship.
- `AppState` represents the main React state structure for the app.
- `ChartData` is used for chart visualizations (radar, polar area, timeline, etc).

