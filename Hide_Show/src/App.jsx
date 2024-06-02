import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <button className="fetch-button" onClick={fetchData}>Fetch Random Data</button>
      {data && (
        <div className="data-display">
          {data.map((user) => (
            <div key={user.id} className="user-card">
              <h3>User ID: {user.id}</h3>
              <p>Name: {user.name.firstname} {user.name.lastname}</p>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
