import "./App.css";
import Boton from "./componentes/Boton";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";

function App() {
  const manejarClic = () => {
    console.log("Se hace Clic en boton");
  };

  const reiniciarContador = () => {
    console.log("Se hace clic en Reiniciar");
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
