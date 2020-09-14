import Board from './Board.js'
import React, { Component } from 'react'
import Player from './player'
import InstructionButton from './instructionButton'

class App extends Component {

  constructor(props){
    super(props);
    this.increaseScore = this.increaseScore.bind(this);
    this.state = {
      playable: false,
      xIsNext: false,
      playerOneScore: 0,
      playerTwoScore: 0
    }
  }

  increaseScore(player){
    
    if(player === "playerOne"){
      this.setState({playerOneScore: this.state.playerOneScore + 1})
    }
    else{this.setState({playerTwoScore: this.state.playerTwoScore + 1})}
  }
  
  render() {
    return (
      <div className="interface">
        <div className="game">
          <Player playerID = {'Player One'} playerScore = {`Score: ${this.state.playerOneScore}`}/>
          <Board increaseScore={this.increaseScore}/>
          <Player playerID = {'Player Two'} playerScore = {`Score: ${this.state.playerTwoScore}`}/>
        </div>
        
        <InstructionButton text={'Click me to Play'}/>
      </div>
      

    )
  }
}




export default App;
