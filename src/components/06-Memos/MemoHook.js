import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const {counter, increment}= useCounter(1000);
    //console.log(counter);

    const [show, setShow] = useState(false);
    const procesoPesado= (iteraciones)=> {
        for(let i= 0; i<iteraciones; i++){
            console.log('Haciendo iteraciones')
        }
        return `${iteraciones} iteraciones realizadas`
    }

    const memoProcesoPesado= useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button onClick={increment}
                    className="btn btn-primary mt-3 ml-5">+1</button>
            <button onClick={()=> setShow(!show)}
                    className="btn btn-primary mt-3 ml-10">Show / Hide {JSON.stringify(show)} </button>
        </div>
    )
}
