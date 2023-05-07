import Input from "./Input";
import TituloInput from "./TituloInput";

export default function Formulario() {
  return (
    <>
      <form>

        <TituloInput texto="Nombre Mascota" />
        <br />
        <Input tipo="text" name="nombreMascota" placeholder="Nombre Mascota" size="30" />
      
        <br/>
        <br/>

        <TituloInput texto="Nombre Dueño" />
        <br />
        <Input tipo="text" name="nombreDueño" placeholder="Nombre dueño de la mascota" size="30" />
      
        <br/>
        <br/>

        <TituloInput texto="Fecha" />
        <br />
        <Input tipo="date" name="fecha" placeholder="" size="30" />

        <br/>
        <br/>

        <TituloInput texto="Hora" />
        <br />
        <Input tipo="time" name="hora" placeholder="" size="30" />

        <br/>
        <br/>

        <TituloInput texto="Sintomas" />
        <br />
        <Input tipo="text" name="sintomas" placeholder="" size="30"/>

        <br/>
        <br/>

        <button type="submit">Agregar Cita</button>
      </form>
    </>
  );
}
