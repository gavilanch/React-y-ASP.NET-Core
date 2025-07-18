export default function Boton(props: BotonProps){

    return (
        <button type={props.type ?? 'button'} className={props.className ?? 'btn btn-primary'} 
        onClick={props.onClick}
        disabled={props.disabled ?? false}
        >
            {props.children}
        </button>
    )

}

interface BotonProps{
    children: React.ReactNode;
    onClick?(): void;
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean;
    className?: string;
}