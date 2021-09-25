import React,{Fragment,useState} from 'react'

const Events = () => {
    const [texto, setTexto] = useState('Texto desde estado');
    const eventClick = () =>{
        console.log("me hizo clic");
        setTexto('cambiando el texto');
    }
    return (
        <Fragment>
            <hr/>
            <h2>{texto}</h2>
            <button onClick = { () => eventClick()}>clic</button>
        </Fragment>
    )
}

export default Events
