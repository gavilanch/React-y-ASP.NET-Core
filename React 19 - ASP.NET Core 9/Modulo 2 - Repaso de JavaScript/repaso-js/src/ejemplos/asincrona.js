export function Promesa(){
    fetch('https://jsonplaceholder2.typicode.com/todos/1')
    .then(respuesta => respuesta.json())
    .catch(error => console.error('hubo un error'))
    .then(json => console.log(json));

}

export async function AsyncAwait(){
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await respuesta.json();
        // debugger;
        console.log(json);
    } catch (error){
        console.error('hubo un error en AsyncAwait');
    }
}