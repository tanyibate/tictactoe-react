import React from 'react'

function InstructionButton(props){
    return(<div className="notifyPlayers" onClick ={props.onClick}>
        <p>{props.text}</p>
    </div>)
}

export default InstructionButton