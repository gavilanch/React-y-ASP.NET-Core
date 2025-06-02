export default function LiteralesDeObjetosMejorado(){

    let apellido = 'Gavilán';

    const paisProp = 'pais';
    const paisValor = 'RD';

    let persona = {
        nombre: 'Felipe',
        apellido,
        funcionNormal(){},
        funcionFlecha: () => {},
        [paisProp]: paisValor
    };

    const retornarValorPropiedadPersona = (prop) => persona[prop];

    console.log(retornarValorPropiedadPersona('apellido'));

    console.log(persona);
}