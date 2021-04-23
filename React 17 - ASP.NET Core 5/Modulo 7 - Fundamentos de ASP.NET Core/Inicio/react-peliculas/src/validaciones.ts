import * as Yup from 'yup'

export default function configurarValidaciones(){
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function (){
        return this.test('primera-letra-mayuscula', 'La primera letra debe ser mayúscula', 
        function (valor) {
            if (valor && valor.length > 0){
                const primeraLetra = valor.substring(0,1);
                return primeraLetra === primeraLetra.toUpperCase();
            }

            return true;
        })
    })
}