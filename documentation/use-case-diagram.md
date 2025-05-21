# Use Case Diagram

This diagram models how different users interact with the FaceOff system. The main user roles are:
- **Viewer**: Any user who visits the site to explore, compare and visualize superhero data.
- **Data Analyst**: A user interested in deeper data exploration and analysis (advanced features, if available).

---

```mermaid
usecaseDiagram
    actor Viewer as V
    actor "Data Analyst" as DA

    V --> (Browse Dashboard)
    V --> (Search for Characters)
    V --> (Compare Two Characters)
    V --> (View Character Timeline)
    V --> (View Charts & Stats)
    V --> (Read Character Info)

    DA --> (Export Data)
    DA --> (Analyze Trends)
    DA --> (View Advanced Visualizations)
    DA --> (Compare Multiple Characters)
    DA --> (All Viewer Actions)
```

---

**Legend:**
- **Viewer**: Can browse, search, compare and view visualizations.
- **Data Analyst**: Can do everything a Viewer can, plus export data and access advanced analytics (if implemented).

