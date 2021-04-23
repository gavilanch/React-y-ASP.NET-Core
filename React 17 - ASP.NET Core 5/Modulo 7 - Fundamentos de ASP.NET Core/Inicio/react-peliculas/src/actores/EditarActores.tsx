import FormularioActores from './FormularioActores'

export default function EditarActores() {
    return (
        <>
            <h3>Editar Actores</h3>
            <FormularioActores
                modelo={{nombre: 'Tom Holland', 
                biografia: `# tom
Ha nacido **tom**`,
                fechaNacimiento: new Date('1996-06-01T00:00:00'),
                fotoURL: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg' }}
                onSubmit={valores => console.log(valores)}
            />
        </>

    )
}