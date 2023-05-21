import Cita from "./Cita"

export default function ListadoCitas( {listaCitas, eliminarCita} ) {


    
    return (
        <>
            {listaCitas.map( (cita) => (
                <div key={cita.mascota}>
                    <Cita objeto={cita} onEliminarCita={eliminarCita} />
                    <br/>
                </div>
            ))}
            
        </>
    )
}