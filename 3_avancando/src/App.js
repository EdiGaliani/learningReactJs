import './App.css';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}

      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em SRC */}
      
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <ShowUserName name="Edi"/>
      <CarDetails brand="Fiat" km={120000} color="Branco"/>
    </div>
  );
}

export default App;
