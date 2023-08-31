import './App.css';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const Cars = [
    {id:1, brand: "Ferrari", km: 0, color: "Amarelo", newCar: true},
    {id:2, brand: "Renault", km: 12548, color: "Verde", newCar: false},
    {id:3, brand: "Fiat", km: 0, color: "Preto", newCar: true}
  ]

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
      <CarDetails brand="Fiat" km={120000} color="Branco" newCar={true}/>
      <CarDetails brand="VW" km={138000} color="Preto" newCar={false}/>
      <CarDetails brand="Ford" km={18000} color="Prata" newCar={true}/>
      {/* Renderizando Lista em componentes */}
      {Cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          km={car.km} 
          color={car.color}
          newCar={car.newCar} 
        />
      ))}
      {/* Usando Fragments */}
      <Fragment propFragment="teste"/>
    </div>
  );
}

export default App;
