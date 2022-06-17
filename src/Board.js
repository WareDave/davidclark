import React, { Component, Col, Container, Row } from 'react'
import M from "materialize-css"; 
import './ttt.css'
import Header from "./header"
const $ = window.$;
M.AutoInit();









function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  function Square(props) {
    return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  }
  
  class Board extends Component {
    renderSquare(i) {
      const squares = this.props.squares;
      return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
    }
    render() {
      return (
       
        <main>
         
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>

        <br></br>  <br></br>  <br></br>
        <div>
        <a href="/" class="dickkiller" > DaveHome </a> 
        </div>
        </main>
      );
    }
  }













export default Board;