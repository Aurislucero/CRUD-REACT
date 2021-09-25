import React from 'react';
import { nanoid } from 'nanoid'
// import Paragraph from './components/Paragraph';
// import Variables from './components/Variables';
// import Events from './components/Events';
// import Counter from './components/Counter';
// import List from './components/List';
// import Forms from './components/Forms';
function App() {
   const [tarea,setTarea] = React.useState('')
   const [tareas,setTareas] = React.useState([])
   const [modoEdicion,setModoEdicion] = React.useState(false)
   const [id,setId] = React.useState(false)
   const [error,setError] = React.useState(null)
   const agregarTarea = (e)=>{
     e.preventDefault();
     if(!tarea.trim()){
      console.log('elemento vacio');
      return setError('agregar datos')
     }

     setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }]);
     console.log('tarea');
     setTarea('')
     setError(null)
   }

  const eliminarTarea = id =>{
      const arrayFiltrado = tareas.filter( item =>item.id !== id)
      setTareas(arrayFiltrado)
  }
  const editar = item =>{ 
    console.log(item);
    setModoEdicion(true)
    setTarea(item.NombreTarea)
    setId(item.id)
}
const editarTarea = (e)=>{
  e.preventDefault();
  if(!tarea.trim()){
   console.log('elemento vacio');
   return setError('agregar datos')
  }
  const arrayEditado = tareas.map( item =>item.id == id?{id,NombreTarea:tarea}:item)
  setTareas(arrayEditado)
  setModoEdicion(false)
  setTarea('')
  setId('')
  setError(null)
}
  return (
    <div className="container mt-5">
    <h1 className="text-center">CRUD</h1>
    <hr/>
    <div className="row">
  
      <div className="col-xs-12 col-sm-8">
        <h4 className="text-center">Lista de Tareas</h4>
        <ul className="list-group">{
          tareas.length == 0 ?('La lista esta vacía'):(
            tareas.map(item=>(
              <li className="list-group-item d-flex justify-content-between" key={item.id}>
              <span className="lead" >{item.NombreTarea}</span>
               <div>
               <button 
                className="btn btn-sm btn-danger float-right mx-2"
                onClick = {()=>eliminarTarea(item.id)}
              >Eliminar</button>
              <button 
                className="btn btn-sm btn-warning float-right"
                onClick = {()=>editar(item)}
              >Editar</button>
               </div>

            </li>
            ))
          )

        }

        </ul>
      </div>
  
      <div className="col-xs-12 col-sm-4">
        <h4 className="text-center">
        {modoEdicion ? 'Editar tarea':'Agregar Tarea'}
        </h4>
        <form onSubmit= {modoEdicion? editarTarea:agregarTarea}>
          {
            error? <span className="text-danger">{error}</span>:null
          }
          <input 
            type="text" 
            className="form-control mb-2"
            placeholder="Ingrese Tarea"
            onChange = {e=> setTarea(e.target.value)}
            value = {tarea}
          />
          <div className="row p-2">
          {
            modoEdicion?(<button className="btn btn-warning btn-block col-12" type="submit"> {modoEdicion?'Editar':'Agregar'} </button>)
            :(<button className="btn btn-dark btn-block col-12" type="submit"> {modoEdicion?'Editar':'Agregar'} </button>)
          }
          </div>

          
        </form>
      </div>
  
    </div>
  </div>
  );
}

export default App;
