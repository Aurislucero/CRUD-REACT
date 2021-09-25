import React from 'react'

const List = () => {
    const listInitial = [
        { id:1,texto:'tarea 1'},
        { id:2,texto:'tarea 2'},
        { id:3,texto:'tarea 3'},
        { id:4,texto:'tarea 4'},
    ];
    const [list,setList] = React.useState(listInitial);
    const addElement = () =>{
        console.log('djjdjd');
        setList([
            ...list,{ id:5,texto:'tarea 5'}])
    }
    return (
        <div>
            <h2>Lists</h2>
            {
                list.map((item,index)=>(
                    <h4 key={index}>{item.texto}</h4>
                ))
            }
            <button onClick = { ()=>addElement()}>Agregar elemento</button>
        </div>
    )
}

export default List
