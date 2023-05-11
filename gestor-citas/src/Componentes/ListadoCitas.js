import Cita from "./Cita"

export default function ListadoCitas({ listaCitas }) {


    return (
        <>
            {listaCitas.map((cita) => (
                <div key={cita.mascota}>
                    <Cita prop={cita} />
                </div>
            ))}
        </>
    )
}