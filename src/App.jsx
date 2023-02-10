import React, { useState } from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import styles from './App.module.css'
import fetchCity from './services/fetchCity.js';





function App() {
  const [data, setData] = useState([])

  function onSearch(ciudad) {
    if (data.length > 5) {
      alert("Cant add more cities");
    } else {
      fetchCity(ciudad, setData)
      console.log(data[0].temp)
    }
  }

  function handleClose(id) {
    setData(prevData => {
      return prevData.filter(city => city.id !== id)
    })
  }

  return (
    <div className={styles.app}>
      <div className={styles.fondo} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        {data.length > 0 ? (
          <div className={styles.citiesContainer}>
            <Cards cities={data} onClose={handleClose} />
          </div>
        ) : <span className={styles.noCities}>No cities to show :( </span>}
      </div>
    </div>
  );
}

export default App;
