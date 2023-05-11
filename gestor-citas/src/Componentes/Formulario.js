import Input from "./Input";
import TituloInput from "./TituloInput";

export default function Formulario() {
  return (
      <form>

        <TituloInput texto="Nombre Mascota" />
        <Input tipo="text" name="nombreMascota" placeholder="Nombre Mascota"  />

        <TituloInput texto="Nombre Dueño" />
        <Input tipo="text" name="nombreDueño" placeholder="Nombre dueño de la mascota"  />

        <TituloInput texto="Fecha" />
        <Input tipo="date" name="fecha" placeholder=""  />

        <TituloInput texto="Hora" />
        <Input tipo="time" name="hora" placeholder=""  />
        
        <TituloInput texto="Sintomas" />
        <textarea name="sintomas" className="u-full-width" placeholder=""/>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
  );
}
