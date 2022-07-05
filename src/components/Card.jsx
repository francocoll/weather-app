import React from 'react';
import Temp from './Temp';
import styles from './Card.module.css'
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose, primary } = props
  return (
    <div className={`${styles.card} ${primary ? styles.primary : ''}`}>

      <span className={styles.name}>
        {name}
        {!primary &&
          <button className={styles.button} onClick={onClose}><IoCloseCircleOutline /></button>}
      </span>
      <img src={` http://openweathermap.org/img/wn/${img}@2x.png`} alt='icono' />
      <div className={styles.temps}>
        <Temp label='Min' temp={min} />
        <Temp label='Max' temp={max} />
      </div>
    </div>)
};