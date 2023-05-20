export default function Input({titulo, tipo, placeholder}){
    return (
        <>
            <label>{titulo}</label>
            <input type={tipo} className="u-full-width" placeholder={placeholder}/>
        </>
    )
}