import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password}= formValues;

    useEffect( ()=> {
        console.log('Email cambió')
    },[email]);

/*     const handleInputChange= ({target})=> {
        //console.log(target);
        setFomrState({
            ...fomrState,
            [target.name]: target.value

        });
    }; */

    const handleSubmit= (e)=> {
        e.preventDefault();
        console.log('Hola desde el handleSubmit')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
            <hr/>
            <div className="form-group">
                <input type="text"
                       name= "name"
                       className="form-control"
                       placeholder="tu nombre"
                       autoComplete="off"
                       value={name}
                       onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input type="email"
                       name= "email"
                       className="form-control"
                       placeholder="tu email"
                       autoComplete="off"
                       value={email}
                       onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input type="password"
                       name= "password"
                       className="form-control"
                       placeholder="password"
                       autoComplete="off"
                       value={password}
                       onChange={handleInputChange}></input>
            </div>
            
            <button className="btn btn-primary"
                    onSubmit={handleSubmit}>
                Guardar
            </button>

        </form>
    )
}
