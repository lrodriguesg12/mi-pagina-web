
interface IProps {
    titulo: String
    descripcion: String
    gap?: Number
}

export default function Noticia({titulo, descripcion, gap=2}: IProps) {
    return (
        <div className={`flex flex-col m-4 gap-${gap} border`}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
}