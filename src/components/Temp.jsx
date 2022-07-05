import React from 'react'
import styles from './Temp.module.css'

const Temp = ({label, temp}) => {
  return (
    <div className={styles.temp}>
        <span>{label}</span>
        <span>{temp}°</span>
    </div>
  )
}

export default Temp