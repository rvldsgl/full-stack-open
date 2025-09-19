```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET /notes
    Server-->>Browser: HTML page
    Browser->>Server: GET main.css, main.js
    Server-->>Browser: CSS & JS
    Browser->>Server: GET data.json
    Server-->>Browser: JSON data
    Browser->>Browser: Render notes with DOM API
