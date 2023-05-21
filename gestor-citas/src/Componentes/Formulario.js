import Input from "./Input";

export default function Formulario({onAgregarCita}) {

  const agregarCita = (e) => {
    e.preventDefault()
    
    let nuevaCita = {

      id: new Date().getTime(),
      mascota: e.target.inputMascota.value,
      dueno: e.target.inputDueno.value,
      fecha: e.target.inputFecha.value,
      hora: e.target.inputHora.value,
      sintomas: e.target.inputSintomas.value
    } 

    e.target.inputMascota.value = ''
    e.target.inputDueno.value = ''
    e.target.inputFecha.value = ''
    e.target.inputHora.value = ''
    e.target.inputSintomas.value = ''

    onAgregarCita(nuevaCita)
  }
  
  return (
      <form onSubmit={ (e) => agregarCita(e)}>
        <Input titulo="Nombre Mascota" nombre="inputMascota" tipo="text" placeholder="Nombre Mascota"  />

        <Input titulo="Nombre Dueño" nombre="inputDueno" tipo="text" placeholder="Nombre dueño de la mascota"  />

        <Input titulo="Fecha" nombre="inputFecha" tipo="date" placeholder=""  />

        <Input titulo="Hora" nombre="inputHora" tipo="time" placeholder=""  />
        
        <label>Sintomas</label>
        <textarea name="inputSintomas" className="u-full-width"/>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
  )
}
