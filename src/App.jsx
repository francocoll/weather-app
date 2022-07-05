import React, { useState } from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import { Cairns } from './data.js';
import styles from './App.module.css'
const apiKey = 'b3437cc06cbfd4fb0cf476387fc37408'



function App() {
  const [data, setData] = useState([])

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setData((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className={styles.app}>
      <div className={styles.fondo} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className={styles.citiesContainer}>
          <Card
            primary
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />
          <Cards cities={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
