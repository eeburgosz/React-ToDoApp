import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {
    
    const {counter, increment, decrement}= useCounter(1);
    //console.log(counter);
    
    const {loading, data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {quote}= !loading && data[0];
    
    const pTag = useRef();
    useLayoutEffect(()=> {
        console.log(pTag.current.getBoundingClientRect())
    },[quote]);
    
    return (
        <div>
            <h1><strong>Layout</strong></h1>
            <h1>Breaking Bad quotes</h1>
            <hr/>          
                <blockquote className="blockquote text-end">
                    <p className="mb-3" ref={pTag}>{quote}</p>                
                </blockquote> 
                <button className="btn btn-primary"
                    onClick={decrement}> &lt; </button>
                <button className="btn btn-primary"
                    onClick={increment}> &gt; </button>           
        </div>
    )
}
