export default function Boton(props: BotonProps){

    return (
        <button type="button" className="btn btn-primary">
            {props.children}
        </button>
    )

}

interface BotonProps{
    children: React.ReactNode;
}