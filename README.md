# Full-Stack Baseball Analytics Program

## 1. Project Setup 

### Frontend
Use React for the UI <br> 
react-router-dom for navigation <br> 
axios for API calls <br> 
chart.js for data visualization <br> 

### Backend
Use Node.js with framework like Express <br>
Database: <br> 
Relational: PostgreSQL/MySQL <br>
NoSQL: MongoDB <br><br>
Include REST API or GraphQL for serving data <br>
Use Baseball APIs for data (e.g., MLB Stats API, SportsRadar or Baseball-Reference) <br>

## 2. Application Features
### 1. User Interface (React)
Home page with summary stats (top players, games, standings) <br> 
Player and team stats filters and search options <br> 
Visualization of data (charts for batting averages, win-loss stats, etc.) <br>

### 2. Backend API Endpoints 
/teams: Fetch team details and stats <br>
/players: Fetch player-specific stats <br>
/games: Fetch schedule and game results <br>
Dynamic Queries: Add query paramaters to filter stats (e.g., ?season=2024&team=Yankees) <br> 

### 3. Database Schema: 
Teams Table: Name, Division, Wins, Losses, etc. <br> 
Players Table: Name, Position, Team, Stats, etc. <br>
Games Table: Matchup, Date, Result, etc. <br> 

### 4. Authentication (Optional) 
Implement user login using JWT <br> 
Allow users to save favororite players or teams <br> 

## 3. Development Steps
### 1. Initialize Repositories: 
Create a monorepo or separate repos for frontend and backend <br> 

### 2. Fetch and Process Data: 
Write scripts to pull data from APIs <br>
Normalize and store in the database <br> 

### 3. Backend Development: 
Set up routes, controllers, and services <br> 
Create a robust error-handling and validation system <br> 

### 4. Frontend Development: 
Create reusable components (e.g., tables, cards, filters) <br>
Connect to backend via API calls <br> 
Add routing and state management (e.g., Context API or Redux) <br> 

### 5. Deploy: 
Use services like Vercel/Netlify for the frontend <br>
Host the backend on platforms like Heroku, AWS, or Railway <br> 
Use Docker for easier deployment <br> 

## 4. Tools/Technologies: 
Frontend: React, TailwingCSS/Material-UI, Chart.js <br> 
Backend: Node.js, Express, Axios <br> 
Database: PostgreSQL or MongoDB <br> 
Hosting: AWS, Netlify, Vercel <br>
