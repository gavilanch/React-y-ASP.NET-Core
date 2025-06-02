import type { AxiosError } from "axios";

export default function extraerErroresIdentity(obj: AxiosError): string[]{

    const data = obj.response?.data as RespuestaError[];
    const mensajesDeError: string[] = data.map(error => error.description);
    return mensajesDeError;

}

interface RespuestaError{
    code: string;
    description: string;
}