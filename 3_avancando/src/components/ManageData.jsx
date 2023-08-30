import React from 'react';
import { useState } from 'react';

const ManageData = () => {
    const [number, setNumber] = useState(15);

    let someData = 10;
  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => someData = 15}>Mudar Variável</button>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar State</button>
    </div>
  )
}

export default ManageData;