import React from 'react'



const Square = props => {
    return (
    <td onClick={props.onClick}>{props.char}</td>
    )
}



export default Square
