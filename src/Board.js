import React from 'react'
import Square from './Square.js'


export default class Board extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            playerOneScore: 0,
            squares: Array(9).fill(null),
            xIsNext: true,
        }
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
            this.props.increaseScore(winner);
          }
        }
        
      }
    
    
      clickHandler(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
        this.calculateWinner(squares)
      }
    

    renderSquare(i){
        return(
            <Square onClick ={()=>this.clickHandler(i)} char = {this.state.squares[i]}/>
        )
    }

    render(){
        return(
            <div className="main">
                <h1>Tic  <span>X</span>  Tac  <span>O</span>  Toe  <span>X</span></h1>
                <table>
                    <tbody>
                        <tr>
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </tr>
                        <tr>
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </tr>
                        <tr>
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
        
    


}



