import Input from "./Input";
import TituloInput from "./TituloInput";

export default function Formulario() {
  return (
      <form>

        <TituloInput texto="Nombre Mascota" />
        <Input tipo="text" id="nombreMascota" placeholder="Nombre Mascota"  />

        <TituloInput texto="Nombre Dueño" />
        <Input tipo="text" id="nombreDueño" placeholder="Nombre dueño de la mascota"  />

        <TituloInput texto="Fecha" />
        <Input tipo="date" id="fecha" placeholder=""  />

        <TituloInput texto="Hora" />
        <Input tipo="time" id="hora" placeholder=""  />
        
        <TituloInput texto="Sintomas" />
        <textarea id="sintomas" className="u-full-width" placeholder=""/>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
  );
}
