import React from 'react'

const Counter = () => {
      const [counter,setCounter] = React.useState(0);
      const eventCounter = () => {
        setCounter(counter + 1);
      }
    return (
        <div>
            <h2></h2>
            <h3>Nuestro numero aumentado: {counter}</h3>
            <h4>{counter > 2 ? 'es mayor a dos':'es menor a 2'}</h4>
            <button onClick = {( )=> eventCounter()}>Aumentar</button>
        </div>
    )
}

export default Counter
