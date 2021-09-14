import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Value a dispararse')

    return (
        <small>{value}</small>
    )
}
)