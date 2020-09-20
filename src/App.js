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
      xIsNext: true,
      instruction: 'Click me to Play',
      playerOneScore: 0,
      playerTwoScore: 0,
      squares: Array(9).fill(null),
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
    if(this.state.gameEnded){
      const squares = Array(9).fill(null)
      this.setState({squares: squares })}
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

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      let winner = 'playerOne';
      
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log("Hello")

        if(squares[a] === 'X') winner = "playerOne";
        else winner = 'playerTwo';
        let increase = this.increaseScore;
        increase(winner);
        this.instructionTextHandler("gameEnded",winner)
        
      }
    }
    
  }


  clickHandler = (i) => {
    if(this.state.playable && !this.state.squares[i]){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            
        });
    this.changeXisNext()
    this.calculateWinner(squares)
    
    }
    
  }


 
  
  render() {
    return (
      <div className="interface">
        <div className="game">
          <Player playerID = {'Player One'} playerScore = {`Score: ${this.state.playerOneScore}`}/>
          <Board increaseScore={this.increaseScore} 
          playable = {this.state.playable} 
          instructionTextHandler = {this.instructionTextHandler} 
          xIsNext = {this.state.xIsNext} 
          changeXisNext ={this.changeXisNext} 
          squares={this.state.squares}
          clickHandler = {this.clickHandler}/>
          <Player playerID = {'Player Two'} playerScore = {`Score: ${this.state.playerTwoScore}`}/>
        </div>
        
        <InstructionButton text={this.state.instruction} onClick = {this.makePlayable}/>
      </div>
      

    )
  }
}




export default App;
