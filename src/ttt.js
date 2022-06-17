import React, { Component, Col, Container, Row } from 'react'
import M from "materialize-css"; 
import './ttt.css';
import  Board  from "./Board.js";
import Header from "./header";
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

// class Board extends React.Component {
//   renderSquare(i) {
//     const squares = this.props.squares;
//     return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
//   }
//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

class Ttt extends Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        xIsNext: true
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    var current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        xIsNext: !this.state.xIsNext
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  render() {


    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'You Are Up: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    let moveReset;
    let movesX = [];
    let movesO = [];

    history.map((step, move) => {
      let desc;
      if (move === 0) {
        desc = 'Restart';
        moveReset = <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
      } else {
        if (step.xIsNext) {
          desc = 'Moves' ;
          movesO.push(
            <li key={move}>
              <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
            </li>
          )
        } else {
          desc = 'Moves' ;
          movesX.push(
            <li key={move}>
              <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
            </li>
          )
        }
      }
    });

    return (
      
      <div className="game-wrap">
        <div className="game-header">
          <div>{status}</div>
          <div>{moveReset}</div>
        </div>
        <div className="game-body">
          <div className="game-left">
            <div className="title">Player: X</div>
            <ol>{movesX}</ol>
          </div>
          <div className="game-main">
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
          </div>
          <div className="game-right">
            <div className="title">Player: O</div>
            <ol>{movesO}</ol>
          </div>
        </div>
      </div>
    );
  }
}


export default Ttt;