export default function Input({tipo, nombre, placeholder, size}){
    return (
        <>
        <input type={tipo} name={nombre} placeholder={placeholder} size={size}/>
        </>
    )
}