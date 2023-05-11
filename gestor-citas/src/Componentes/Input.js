export default function Input({tipo, nombre, placeholder, size}){
    return (
        <>
            <input type={tipo} name={nombre} className="u-full-width" placeholder={placeholder}/>
        </>
    )
}