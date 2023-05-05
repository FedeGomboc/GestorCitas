import Titulo from "./Componentes/Titulo";
import Subtitulo from "./Componentes/Subtitulo";

function App() {
  return (
    <>
      <center>
        <Titulo texto="Administrador de pacientes"></Titulo>
      </center>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo texto="Crear mi cita"></Subtitulo>
          </div>
          <div className="one-half column">
            <Subtitulo texto="Administra tus citas"></Subtitulo>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
