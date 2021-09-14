import React, { useEffect, useState } from 'react';

import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [fomrState, setFomrState] = useState({
        name: '',
        email: ''
    });

    const {name, email}= fomrState;

    useEffect( ()=> {
        console.log('Hola')
    },[]);

    const handleInputChange= ({target})=> {
        //console.log(target);
        setFomrState({
            ...fomrState,
            [target.name]: target.value

        })
    }

    return (
        <div>
            <h1>Simple Form - useEffect</h1>
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

            {(name === '123') && <Message/>}

        </div>
    )
}
