import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './examples.css';

export const MultipleCustomHooks = () => {
    
const {counter, reset, resetTop, increment, decrement}= useCounter(1);
    //console.log(counter)

    const {loading, data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    if( counter > 30 ){
        reset();
    }
    if( counter < 1 ){
        resetTop();
    }

    const {author, quote}= !loading && data[0];

    return (
        <div>
            <h1>Breaking Bad quotes</h1>
            <hr/>
                {
                    loading ?
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                :
                    <blockquote className="blockquote text-end">
                        <p className="mb-3">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                }

            <button className="btn btn-primary"
                    onClick={decrement}> &lt; </button>
            <button className="btn btn-primary"
                    onClick={increment}> &gt; </button>

        </div>
    )
}
