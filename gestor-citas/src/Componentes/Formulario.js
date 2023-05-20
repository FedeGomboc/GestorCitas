import { useState } from "react";
import Input from "./Input";


export default function Formulario({onAgregarCita}) {

  const [cita, setCita] = useState({mascota: '', dueno: '', fecha: '', hora: '', sintomas: ''})

  
  
  return (
      <form>
        <Input titulo="Nombre Mascota" tipo="text" placeholder="Nombre Mascota"  />

        <Input titulo="Nombre Dueño" tipo="text" placeholder="Nombre dueño de la mascota"  />

        <Input titulo="Fecha" tipo="date" placeholder=""  />

        <Input titulo="Hora" tipo="time" placeholder=""  />
        
        <label>Sintomas</label>
        <input type="textarea" className="u-full-width" placeholder=""/>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
  );
}
