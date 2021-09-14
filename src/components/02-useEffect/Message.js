import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        //console.log('Componente montado');
        const mouseMove= (e)=> {
            console.log('Movimiento')
        }
        window.addEventListener('mousemove', mouseMove); /* ,(e)=> {
            console.log(e)
        }) */
        return () => {
            //console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Mensaje</h3>
        </div>
    )
}
