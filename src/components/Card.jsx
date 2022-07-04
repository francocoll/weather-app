import React from 'react';
import Temp from './Temp';

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose } = props
  return (<div>
    <button onClick={onClose}>X</button>
    <span>{name}</span>
    <Temp label='Min' temp={min}/>
    <Temp label='Max' temp={max}/>
    <img src={` http://openweathermap.org/img/wn/${img}@2x.png`} alt='icono' />
  </div>)
};