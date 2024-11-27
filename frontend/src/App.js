import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/').then((response) => {
            setMessage(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Baseball Analytics Dashboard</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
