export default function formatearFecha(fechaISO: string){
    return new Date(fechaISO).toISOString().split('T')[0];
}