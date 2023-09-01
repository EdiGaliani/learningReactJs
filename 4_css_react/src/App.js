import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const n = 15;
  const [name] = useState("Edi");
  const redTitle = true;


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

    </div>
  );
}

export default App;
