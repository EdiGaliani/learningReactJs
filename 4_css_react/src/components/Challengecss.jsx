import React from 'react'
import Styles from './Challengecss.module.css'

const Challengecss = ({km, brand, color, newCar}) => {
  return (
    <div className={Styles.card}>
        <h3>{brand}</h3>
        <p>Marca: {brand}</p>
        <p>Cor: {color}</p>
        <p>KM: {km}</p>
        <p>Estado: {newCar === true ? "Novo" : "Usado"}</p>
    </div>
  )
}

export default Challengecss