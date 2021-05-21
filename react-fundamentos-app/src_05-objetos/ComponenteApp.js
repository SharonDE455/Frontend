import React from 'react'

const persona = {
    nombre: 'Sharon Dayanna',
    apellidos: 'Delgado Estrada',
    email: 'sharondelgado1227@gmail.com'
}

const ComponenteApp = () => {
    console.log('Componente con Objs');

    return (
        <>
            <h1>Saludo desde un Functional Component's React</h1>
            <h5>Retorno multilinea de un componente</h5>
            <hr></hr>
            <p>Esta es una configuracion para un componente multilinea</p>
            <hr></hr>
            <p>Objeto Persona: {persona.nombre} {persona.apellidos}</p>
            <p>Email: {persona.email}</p>
            <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
    
    
}

export default ComponenteApp;