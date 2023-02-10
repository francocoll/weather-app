import React from 'react';
import Temp from './Temp';
import styles from './Card.module.css'
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose, temp } = props
  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={onClose}><IoCloseCircleOutline /></button>
      <img src={` http://openweathermap.org/img/wn/${img}@2x.png`} alt='icono' />
      <span className={styles.name}>
        {name}
      </span>
      <div>
        {Math.round(temp)}
      </div>
      <div className={styles.temps}>
        <Temp label='Min' temp={min} />
        <Temp label='Max' temp={max} />
      </div>
    </div>)
};