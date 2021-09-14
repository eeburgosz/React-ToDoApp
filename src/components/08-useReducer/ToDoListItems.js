import React from 'react'

export const ToDoListItems = ({toDo, i, handleDelete, handleToggle}) => {
    return (
        <li key= {toDo.id}
            className= "list-group-item" >
            <p  onClick= {()=> handleToggle(toDo.id)}
                className= {`${toDo.done && 'complete'}`}> {i+1}. {toDo.desc}</p>
            <button onClick= {()=> handleDelete(toDo.id)}
                    className= "btn btn-danger">Borrar</button>
        </li>
    )
}
