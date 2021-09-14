import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import '../02-useEffect/effects.css';

export const Memorize = () => {

    const {counter, increment}= useCounter(10);
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <h2>Counter: <Small value={counter}/></h2>
            <button onClick={increment}
                    className="btn btn-primary mt-3 ml-5">+1</button>
            <button onClick={()=> setShow(!show)}
                    className="btn btn-primary mt-3 ml-10">Show / Hide {JSON.stringify(show)} </button>
        </div>
    )
}
