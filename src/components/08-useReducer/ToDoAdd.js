import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({ handleAddToDo }) => {

    const [{description}, handlerInputChange, reset]= useForm({

        description: ''

    });

    const handleSubmit= (e)=> {

        e.preventDefault();

        if(description.trim().length <= 0){
            return;
        };
        const newToDo= {
            id: new Date().getTime(),
            desc: description,
            done: false
         };
        handleAddToDo(newToDo);
        reset();

    };

    return (
        <>
          <h4>Agregar ToDo</h4>
                <hr/>
                <form onSubmit= {handleSubmit}>
                    <input onChange= {handlerInputChange}
                            value= {description}
                            type= "text"
                            name= "description"
                            placeholder= "Aprender..."
                            autoComplete= "off"
                            className= "form-control"></input>
                    <button type= "submit"
                            className= "btn btn-outline-primary mt-1 btn-block">Agregar</button>
                </form>  
        </>
    )
}
