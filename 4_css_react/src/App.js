import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const n = 15;
  const name = "Edi";
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
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
    </div>
  );
}

export default App;
