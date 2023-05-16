export default function Input({tipo, id, placeholder, size}){
    return (
        <>
            <input type={tipo} id={id} className="u-full-width" placeholder={placeholder}/>
        </>
    )
}