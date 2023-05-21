export default function Input({titulo, nombre, tipo, placeholder}){
    return (
        <>
            <label>{titulo}</label>
            <input type={tipo} name={nombre} className="u-full-width" placeholder={placeholder}/>
        </>
    )
}