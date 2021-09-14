import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {

    console.log('Se dispara')

    return ( <>
        {/* <button onClick={increment}
                className="btn btn-primary">+1</button> */}
        <button onClick={()=>{increment(5)}}
        className="btn btn-primary">+1</button>
    </>)
})
