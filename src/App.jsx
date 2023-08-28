import { useState } from 'react';
import './App.css';

// Importando imagem
import City from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecutionFunction from './components/ExecutionFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {
      id: 1,
      brand: "Ford",
      color: "Yellow",
      newCar: true,
      km: 0
    },
    {
      id: 2,
      brand: "Ferrari",
      color: "Red",
      newCar: false,
      km: 14514
    },
    {
      id: 3,
      brand: "Renault",
      color: "White",
      newCar: false,
      km: 26479
    },
  ];

  function showMessage() {
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const infos = [
    {
      id: 1,
      nome: "Eduardo",
      idade: 19,
      profissao: "Estudante",
    },
    {
      id: 2,
      nome: "Ana",
      idade: 21,
      profissao: "Quimica",
    },
    {
      id: 3,
      nome: "Pedro",
      idade: 16,
      profissao: "Estudante",
    },
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em assets*/}
      <div>
        <img src={City} alt="Paisagem da cidade" />
      </div>

      <ManageData />

      <ListRender />

      <CondicionalRender />

      {/* props */}
      <ShowUserName name={userName} />

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />

      {/* reaproveitando */}
      <CarDetails brand="Ford" km={105454} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={100013} color="Verde" newCar={false} />

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* fragments */}
      <Fragment propFragment="Teste" />
      <hr />

      {/* children */}
      <Container valor="Testando">
        <p>E este seria o conteudo</p>
      </Container>
      <Container valor="Testando2">
        <h5>E este seria o conteudo</h5>
      </Container>
      <hr />

      {/* executando funcao */}
      <ExecutionFunction myFunction={showMessage} />
      <hr />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <hr />

      {/* desafio */}
      {infos.map((info) => (
        <UserDetails
          key={info.id}
          nome={info.nome}
          idade={info.idade}
          profissao={info.profissao}
        />
      ))}
      <hr />

    </div>
  );
};

export default App;
