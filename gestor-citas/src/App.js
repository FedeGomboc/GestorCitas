import Titulo from "./Componentes/Titulo";
import Subtitulo from "./Componentes/Subtitulo";
import "./index.css"

function App() {
  return (
    <>
      <center>
        <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
        <br/>
        <br/>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo texto="CREAR MI CITA"></Subtitulo>
          </div>
          <div className="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
          </div>
        </div>
      </div>
      </center>
    </>
  );
}

export default App;
