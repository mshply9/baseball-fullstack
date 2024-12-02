import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [pitchers, setPitchers] = useState([]);

    useEffects(() => {
        // Fetch players from the backend
        axios.get('http://localhost:5001/players')
            .then(response => {
                setPlayers(response.data);
            })
            .catch(error => {
                console.error('Error fetching players', error);
            });

        "Fetch pitchers from the backend"
        axios.get('http://localhost:5001/pitchers')
            .then(response => {
                setPitchers(response.data);
            })
            .catch(error => {
                console.error('Error fetching pitchers', error);
            });
    }, []);

    return (
        <div>
            <h1>Baseball Analytics Dashboard</h1>

            {/* Players List */}
            <h2>Players</h2>
            <ul>
                {players.length > 0 ? (
                    players.map(player => (
                        <li key={player.id}>{player.name} - {player.team}</li>
                    ))
                ) : (
                    <p>No players found.</p>
                )}
            </ul>

            {/* Pitchers List */}
            <h2>Pitchers</h2>
            <ul>
                {pitchers.length > 0 ? (
                    pitchers.map(pitcher => (
                        <li key={pitcher.id}>{pitcher.name} - {pitcher.team}</li>
                    ))
                ) : (
                    <p>No pitchers found.</p>
                )}
            </ul>
        </div>
    );
}

export default App;
