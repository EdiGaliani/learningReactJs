import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import Container from './components/Container';
import ExecuteFunctions from './components/ExecuteFunctions';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const Cars = [
    {id:1, brand: "Ferrari", km: 0, color: "Amarelo", newCar: true},
    {id:2, brand: "Renault", km: 12548, color: "Verde", newCar: false},
    {id:3, brand: "Fiat", km: 0, color: "Preto", newCar: true}
  ]

  const Users = [
    {id: 1, name: "Edi", age: "41", job: "Developer"},
    {id: 2, name: "João", age: "17", job: "Contabilist"},
    {id: 3, name: "Dione", age: "65", job: "Police man"}
  ]

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const showMessage = () => {
    return console.log("Foi executado pelo pai!")
  }

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
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color}
          newCar={car.newCar} 
        />
      ))}
      {/* Usando Fragments */}
      <Fragment propFragment="teste"/>
      {/* Usando Children */}
      <Container myValue="Testing">
        <h4>Testando o container</h4>
      </Container>
      {/* Função como props */}
      <ExecuteFunctions myFunction={showMessage}/>
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMsg={handleMessage} />
      {/* Desafio 4 */}
      {Users.map((user) => (
        <UserDetails 
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
