import Cita from "./Cita"

export default function ListadoCitas( {listaCitas, eliminar} ) {
    
    const handleEliminar = (id) => {
        eliminar(id)
    } 

    return (
        <>
            {listaCitas.map( (cita) => (
                <div key={cita.mascota}>
                    <Cita objeto={cita} onEliminar={() => handleEliminar(cita.id)}/>
                    <br/>
                </div>
            ))}
        </>
    )
}