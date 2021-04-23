export default function Button(props: buttonProps){
    return (
        <button type="button" className="btn btn-primary">{props.children}</button>
    )
}

interface buttonProps{
    children: React.ReactNode
}