import "./index.css";
import Titulo from "./Componentes/Titulo";
import Subtitulo from "./Componentes/Subtitulo";
import Formulario from "./Componentes/Formulario";
import ListadoCitas from "./Componentes/ListadoCitas";
import { useState } from "react";

function App() {

  const [listaCitas, setListaCitas] = useState([])

  const agregarCita = (mascota, dueno, fecha, hora, sintomas) => {
    
    const nuevaCita = 
    {
      id: new Date().getTime(),
      mascota: mascota,
      dueno: dueno,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    }

    setListaCitas([...listaCitas, nuevaCita])
  }

  const citas = 
  [
    {id: 1, mascota: "Nina", dueno: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna"},
    {id: 2, mascota: "Roy", dueno: "Fede", fecha: "2020-01-06", hora: "17:45", sintomas: "Está gordito"},
  ]

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
            <ListadoCitas listaCitas={citas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;