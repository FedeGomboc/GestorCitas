import Cita from "./Cita"

export default function ListadoCitas() {

    const listaCitas = [
        { id: 1, mascota: "nina", dueno: "martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna" }
    ]

    return (
        <div className="lista-citas">
            {listaCitas.map(citaIndividual => {
                <div key={citaIndividual.id}>
                    <Cita prop={citaIndividual} />
                </div>
            })}
        </div>
    )
}