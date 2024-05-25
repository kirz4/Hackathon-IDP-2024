import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handlePost = () => {
    axios.post('http://127.0.0.1:5000/api/data', { key: 'value' })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error posting the data!', error);
      });
  };

  return (
    <div className="App">
      <h1 className="text-6xl">Data from Backend</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
      <button onClick={handlePost}>Send Data</button>
    </div>
  );
}

export default App;
