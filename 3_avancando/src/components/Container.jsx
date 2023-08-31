import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <>
       <h1>Esse é o título do container</h1>
       {children}
       <p>O valor é: {myValue}</p> 
    </>
  )
}

export default Container