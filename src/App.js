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
      gameEnded: false,
      xIsNext: false,
      instruction: 'Click me to Play',
      playerOneScore: 0,
      playerTwoScore: 0
    }
  }

  increaseScore(player){
    console.log(this)
    if(player === "playerOne"){
      this.setState({playerOneScore: this.state.playerOneScore + 1})
    }
    else{this.setState({playerTwoScore: this.state.playerTwoScore + 1})}
  }

  instructionTextHandler = (gameState,winner = null) =>{
    switch(gameState){
      case "playerOneTurn":
        this.setState({instruction: "It's Player 1's Turn"})
        break;
      case "playerTwoTurn":
        this.setState({instruction: "It's Player 2's Turn"})
        break;
      case "gameEnded":
        this.setState({
          instruction: `${winner} won the game, play again?`,
          playable: false,
          gameEnded: true,
          xIsNext: true

        })
        console.log(this.state.instruction)
        break;
      default:
        return
    }

  }

  makePlayable = () =>{
    if(!this.state.playable){
      this.setState({
        playable: true,
        instruction: "Player 1's turn"
      })
    }
  }

  changeXisNext = () =>{
    if(this.state.xIsNext) this.setState({instruction: "Player 2's turn"})
    else this.setState({instruction: "Player 1's turn"})
    this.setState({xIsNext: !this.state.xIsNext})
    console.log(this.state.xIsNext)
  }


 
  
  render() {
    return (
      <div className="interface">
        <div className="game">
          <Player playerID = {'Player One'} playerScore = {`Score: ${this.state.playerOneScore}`}/>
          <Board increaseScore={this.increaseScore} playable = {this.state.playable} instructionTextHandler = {this.instructionTextHandler} xIsNext = {this.state.xIsNext} changeXisNext ={this.changeXisNext}/>
          <Player playerID = {'Player Two'} playerScore = {`Score: ${this.state.playerTwoScore}`}/>
        </div>
        
        <InstructionButton text={this.state.instruction} onClick = {this.makePlayable}/>
      </div>
      

    )
  }
}




export default App;
