export default function Cita(prop) {
    return (
        <div className="cita">
            <p>Mascota: <span>{prop.prop.mascota}</span></p>
            <p>Dueño: <span>{prop.prop.dueno}</span></p>
            <p>Fecha: <span>{prop.prop.fecha}</span></p>
            <p>Hora: <span>{prop.prop.hora}</span></p>
            <p>Sintomas: <span>{prop.prop.sintomas}</span></p>

            <button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )

}