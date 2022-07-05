import React, { useState } from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import styles from './App.module.css'
import fetchCity from './services/fetchCity.js';




function App() {
  const [data, setData] = useState([])

  function onSearch(ciudad) {
    if (data.length > 2) {
      alert("Cant add more cities");
    } else {
      fetchCity(ciudad, setData)
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
        <div className={styles.citiesContainer}>
          {data.length > 0 && <Card
            primary
            max={data[data.length - 1].max}
            min={data[data.length - 1].min}
            name={data[data.length - 1].name}
            img={data[data.length - 1].img}
          />}
          <Cards cities={data} onClose={handleClose} />
        </div>
      </div>
    </div>
  );
}

export default App;
