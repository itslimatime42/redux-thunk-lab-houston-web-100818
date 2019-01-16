import React from 'react'

export const CatList = function(props) {
    console.log(props)
    return (
        <div>
            {props.cats.map(cat => <img key={cat.id} src={cat.url} alt='' />)}
        </div>
    )
}