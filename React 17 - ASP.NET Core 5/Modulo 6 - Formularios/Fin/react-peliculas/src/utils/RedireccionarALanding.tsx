import { Redirect } from "react-router";

export default function RedireccionarALanding(){
    return <Redirect to={{pathname: '/'}} />
}