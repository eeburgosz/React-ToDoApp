import React from 'react'
import { ToDoListItems } from './ToDoListItems'



export const ToDoList = ({toDos, handleDelete, handleToggle}) => {
 
    return (
        <ul className="list-group list-group-flush">
            {
                toDos.map((toDo, i) => (
                    <ToDoListItems key= {toDo.id}
                                   toDo= {toDo}
                                   i= {i}
                                   handleDelete= {handleDelete}
                                   handleToggle= {handleToggle} 
                    />                    
                ))
            }
        </ul> 
    )
}
