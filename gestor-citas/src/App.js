import Titulo from "./Componentes/Titulo";
import Subtitulo from "./Componentes/Subtitulo";
import "./index.css";
import Formulario from "./Componentes/Formulario";
import Cita from "./Componentes/Cita";
import ListadoCitas from "./Componentes/ListadoCitas";
import { useState } from "react";

function App() {
  const listaCitas = [
    { id: 1, mascota: "Nina", dueno: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna" },
    { id: 2, mascota: "Roy", dueno: "Fede", fecha: "2020-01-06", hora: "17:45", sintomas: "Está gordito" }
  ]

 // const [cita, setCita] = useState([])

  return (
    <div className="root">
      <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo texto="CREAR MI CITA"></Subtitulo>
            <Formulario />
          </div>
          <div className="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
            <ListadoCitas listaCitas={listaCitas}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
