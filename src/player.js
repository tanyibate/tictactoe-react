import React from 'react'

function Player(props){
    return(
        <div className="player">
            <h2>{props.playerID}</h2>
            <input type="text" placeholder="Your name.."/>
            <h1>{props.playerScore}</h1>
        </div>
    )
}

export default Player