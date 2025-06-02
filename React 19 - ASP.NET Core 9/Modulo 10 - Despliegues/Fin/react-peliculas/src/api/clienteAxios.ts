import axios from "axios";
import { obtenerToken } from "../features/seguridad/utilidades/ManejadorJWT";

const clienteAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

clienteAPI.interceptors.request.use((config) => {
    const token = obtenerToken();
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default clienteAPI;