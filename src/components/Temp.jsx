import React from 'react'

const Temp = ({label, temp}) => {
  return (
    <div>
        <span>{label}</span>
        <span>{temp}°</span>
    </div>
  )
}

export default Temp