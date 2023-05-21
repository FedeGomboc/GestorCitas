import "./index.css";
import Titulo from "./Componentes/Titulo";
import Subtitulo from "./Componentes/Subtitulo";
import Formulario from "./Componentes/Formulario";
import ListadoCitas from "./Componentes/ListadoCitas";
import { useState } from "react";

function App() {

  const [listaCitas, setListaCitas] = useState([])

  const agregarCita = (cita) => {
    setListaCitas([...listaCitas, cita])
  }

  const eliminarCita = (id) => {
    const nuevasCitas = listaCitas.filter((cita) => cita.id !== id);
    setListaCitas(nuevasCitas);
  }

  return (
    <div>
      <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo texto="CREAR MI CITA"></Subtitulo>
            <Formulario onAgregarCita={agregarCita}/>
          </div>
          <div className="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
            <ListadoCitas listaCitas={listaCitas} eliminar={(id) => eliminarCita(id)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;