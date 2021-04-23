export default function Button(props: buttonProps){
    return (
        <button type={props.type} className={props.className}
        disabled={props.disabled}
        onClick={props.onClick}
        >{props.children}</button>
    )
}

interface buttonProps{
    children: React.ReactNode,
    onClick?(): void;
    type: "button" | "submit";
    disabled: boolean;
    className: string;
}

Button.defaultProps = {
    type: "button",
    disabled: false,
    className: 'btn btn-primary'
}