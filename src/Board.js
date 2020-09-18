import React from 'react'
import Square from './Square.js'


export default class Board extends React.Component{


    renderSquare(i){
        return(
            <Square onClick ={()=>this.props.clickHandler(i)} char = {this.props.squares[i]}/>
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



