import React from 'react'

const Forms = () => {

    const [fruta,setFruta] = React.useState('')
    const [descripcion,setDescripcion] = React.useState('')
    const [list,setLista] = React.useState([])
     const proccessData = (e) => {
         e.preventDefault()
         if(!fruta.trim()){
             console.log("esta vacío fruta");
             return
         }
         if(!descripcion.trim()){
            console.log("esta vacío descripcion");
            return
        }
        console.log("procesando" + fruta + descripcion);
        setLista([
            ...list,{fruta:fruta,descripcion:descripcion}
        ])
        e.target.reset()
        setFruta('')
        setDescripcion('')
     }

    return (
        <div>
            <h2>Formulario</h2>
            <form  onSubmit ={ proccessData }>
                <input 
                type="text" 
                name="" 
                id=""
                placeholder="Ingrese el texto"
                className="form-control mb-2"
                onChange ={ (e)=> setFruta(e.target.value)}
                />
                                <input 
                type="text" 
                name="" 
                id=""
                placeholder="Ingrese el descripcion"
                className="form-control mb-2"
                onChange ={ (e)=> setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <ul>
            {
                    list.map((item,index)=>(
                        <li key={index}>
                            {item.fruta}-{item.descripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Forms
