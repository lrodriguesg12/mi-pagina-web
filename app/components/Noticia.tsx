
interface IProps {
    titulo: String
    descripcion: String
    gap?: Number
}

export default function Noticia(props: IProps) {
    return (
        <div className={`flex flex-col m-4 gap-${props.gap} border`}>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
        </div>
    )
}