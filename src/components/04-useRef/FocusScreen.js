import React, { useRef } from 'react'

import './focus.css'

export const FocusScreen = () => {

    /* const handleClick= ()=> {
        document.querySelector('input').focus();
    }; */

    const inputRef = useRef();
    const handleClick= ()=> {
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input ref={inputRef}
                   className="form-control" 
                   placeholder="Su nombre" />
            <button className="btn btn-primary mt-5"
                    onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
