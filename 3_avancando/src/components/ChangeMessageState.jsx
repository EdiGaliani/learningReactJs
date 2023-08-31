import React from 'react'

const ChangeMessageState = ({handleMsg}) => {
    const messages = ["Oi", "Olá", "Oi, tudo bem?"]

  return (
    <div>
        <button onClick={() => handleMsg(messages[0])}>1</button>
        <button onClick={() => handleMsg(messages[1])}>2</button>
        <button onClick={() => handleMsg(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState