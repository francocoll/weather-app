import React from 'react';

import styles from './Card.module.css'
import { AiOutlineClose } from 'react-icons/ai'

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose, temp } = props
  return (
    <div className={styles.card}>
      <div className={styles.button}>
        <p></p>
        <button onClick={onClose}><AiOutlineClose /></button>
      </div>
      <img src={` http://openweathermap.org/img/wn/${img}@2x.png`} alt='icono' />
      <div className={styles.info}>
        <span className={styles.name}>
          {name}
        </span>
        <div className={styles.temps}>
          <div className={styles.temp}>
            {Math.round(temp)} °C
          </div>
          <div className={styles.minMax}>
            {min}°C / {max}°C
          </div>
        </div>
      </div>
    </div>)
};