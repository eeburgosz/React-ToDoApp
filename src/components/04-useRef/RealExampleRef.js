import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import './focus.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            <button className="btn btn-primary mt-3 mb-5"
                    onClick={()=> {
                        setShow(!show)
                    }}>
                Show / Hide
            </button>
            {
                show && <MultipleCustomHooks/>
            }
        </div>
    )
}
