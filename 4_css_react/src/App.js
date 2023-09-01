import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import Challengecss from './components/Challengecss';

function App() {
  const n = 15;
  const [name] = useState("Edi");
  const redTitle = true;


  const Cars = [
    {id:1, brand: "Ferrari", km: 0, color: "Amarelo", newCar: true},
    {id:2, brand: "Renault", km: 12548, color: "Verde", newCar: false},
    {id:3, brand: "Fiat", km: 0, color: "Preto", newCar: true}
  ]


  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este parágafro é do App.js</p> 
      
      {/* Inline CSS */}
      <p style={{
        color: "magenta",
        padding: "25px",
        borderTop: "2px solid red"
      }}>Este elemento foi estilizado de forma inline</p>
      
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? {color:"purple"} : {color:"pink"}}>CSS dinâmico</h2>
      <h2 style={n > 10 ? {color:"purple"} : {color:"pink"}}>CSS dinâmico</h2>
      <h2 style={name === "Edi" 
        ? {color:"green", backgroundColor:"#000"} 
        : null
      }>Teste Nome</h2>

      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />

      {/* Challenge CSS */}
      <div className='car-container'>
        {Cars.map((car) => (
          <Challengecss 
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
            newCar={car.newCar}
          />
        ))}
      </div>


    </div>
  );
}

export default App;
