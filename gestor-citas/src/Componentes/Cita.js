export default function Cita(prop) {
    return (
        <div className="cita">
            <p>Mascota: <span>{prop.prop.mascota}</span></p>
            <p>Dueño: <span>{prop.prop.dueno}</span></p>
            <p>Fecha: <span>{prop.prop.fecha}</span></p>
            <p>Hora: <span>{prop.prop.mascota}</span></p>
            <p>Sintomas: <span>{prop.prop.sintomas}</span></p>
        </div>
    )

}