export default function Cita(objeto) {

    const { onEliminar } = objeto;

    const handleEliminar = () => {
        onEliminar()
    }

    return (
        <div className="cita">
            <p>Mascota: <span>{objeto.objeto.mascota}</span></p>
            <p>Dueño: <span>{objeto.objeto.dueno}</span></p>
            <p>Fecha: <span>{objeto.objeto.fecha}</span></p>
            <p>Hora: <span>{objeto.objeto.hora}</span></p>
            <p>Sintomas: <span>{objeto.objeto.sintomas}</span></p>

            <button onClick={handleEliminar} class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )

}