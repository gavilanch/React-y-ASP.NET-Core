import Swal from "sweetalert2";

export default function confirmar(
    onConfirm: () => void,
    titulo: string = '¿Desea borrar el registro?',
    textoBotonConfirmacion: string = 'Borrar'
) {
    Swal.fire({
        title: titulo,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: '#d33',
        confirmButtonText: textoBotonConfirmacion
    }).then(resultado => {
        if (resultado.isConfirmed){
            onConfirm();
        }
    })
}