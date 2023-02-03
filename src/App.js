
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(1);
  const [incrementar, setIncrementar] = useState(true)

  const manejarClic = () => {
    if (incrementar === true){
      setNumClics(numClics + 1);
    }else {
      setNumClics(numClics - 1);
    }
    
  }

  const reiniciarContador = () => {
    if (incrementar === true){
      setNumClics(0);
    }else {
      setNumClics(100)
    }
  }

  const incrementarODecrementar = () => {
    setIncrementar(!incrementar)
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
        <Boton 
          texto={ incrementar===true ? 'Decrementar' : 'Incrementar' }
          esBotonDeClic={false}
          manejarClic={incrementarODecrementar} />
      </div>
    </div>
  );
}

export default App;