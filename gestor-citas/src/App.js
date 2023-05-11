import Titulo from "./Componentes/Titulo";
import Subtitulo from "./Componentes/Subtitulo";
import "./index.css";
import Formulario from "./Componentes/Formulario";
import Cita from "./Componentes/Cita";
import ListadoCitas from "./Componentes/ListadoCitas";

function App() {
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo texto="CREAR MI CITA"></Subtitulo>
            <Formulario />
          </div>
          <div className="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
            <ListadoCitas />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
