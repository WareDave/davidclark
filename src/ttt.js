import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import './ttt.css'
import Header from "./header"
const $ = window.$;
M.AutoInit();

















let board = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

let p1Counter = 1;
let p2Counter = 1;

class Player {
constructor() {
this.isTurn = false;
this.win = false;
}
}

class Space {
constructor(id) {
this.played = false;
this.id = id;
}

addSymbolX(space) {
$(space).append("<div class='x'>X</div>");
}

addSymbolO(space) {
$(space).append("<div class='o'>O</div>");
}
}

//create players
const player1 = new Player();
const player2 = new Player();

//create spaces
const space1 = new Space('one');
const space2 = new Space('two');
const space3 = new Space('three');
const space4 = new Space('four');
const space5 = new Space('five');
const space6 = new Space('six');
const space7 = new Space('seven');
const space8 = new Space('eight');
const space9 = new Space('nine');

//switch turns
function switchTurns(one, two) {
one.isTurn = true;
two.isTurn = false;
}

//gameplay
player1.isTurn = true;

$('.grid').on('click', (e) => {
if(player1.win !== true && player2.win !== true) {
if(e.target.id === space1.id && space1.played === false) {
   if(player1.isTurn) {
     space1.addSymbolX(e.target);
     let index = board[0].indexOf(1);
     if(index !== -1) {
       board[0][index] = 'x';
     }
     switchTurns(player2, player1);
     space1.played = true;
   } else {
       space1.addSymbolO(e.target);
       let index = board[0].indexOf(1);
       if(index !== -1) {
         board[0][index] = 'o';
       }
       switchTurns(player1, player2);
       space1.played = true;
   }
} 

else if (e.target.id === space2.id && space2.played === false) {
   if(player1.isTurn) {
     space2.addSymbolX(e.target); 
     let index = board[0].indexOf(2);
     if(index !== -1) {
       board[0][index] = 'x';
     }
     switchTurns(player2, player1);
     space2.played = true;
   } else {
       space2.addSymbolO(e.target);
       let index = board[0].indexOf(2);
       if(index !== -1) {
         board[0][index] = 'o';
       }
       switchTurns(player1, player2);
       space2.played = true;
   } 
}

else if (e.target.id === space3.id && space3.played === false) {
   if(player1.isTurn) {
     space3.addSymbolX(e.target);   
     let index = board[0].indexOf(3);
     if(index !== -1) {
       board[0][index] = 'x';
     }
     switchTurns(player2, player1);
     space3.played = true;
   } else {
       space3.addSymbolO(e.target); 
       let index = board[0].indexOf(3);
       if(index !== -1) {
         board[0][index] = 'o';
       }
       switchTurns(player1, player2);
       space3.played = true;
   }   
}

else if (e.target.id === space4.id && space4.played === false) {
   if(player1.isTurn) {
     space4.addSymbolX(e.target);  
     let index = board[1].indexOf(4);
     if(index !== -1) {
       board[1][index] = 'x';
     }
     switchTurns(player2, player1);
     space4.played = true;
   } else {
       space4.addSymbolO(e.target);
       let index = board[1].indexOf(4);
       if(index !== -1) {
         board[1][index] = 'o';
       }
       switchTurns(player1, player2);
       space4.played = true;
   } 
}

else if (e.target.id === space5.id && space5.played === false) {
   if(player1.isTurn) {
     space5.addSymbolX(e.target); 
     let index = board[1].indexOf(5);
     if(index !== -1) {
       board[1][index] = 'x';
     }
     switchTurns(player2, player1);
     space5.played = true;
   } else {
       space5.addSymbolO(e.target); 
       let index = board[1].indexOf(5);
       if(index !== -1) {
         board[1][index] = 'o';
       }
       switchTurns(player1, player2);
       space5.played = true;
   }   
}  

else if (e.target.id === space6.id && space6.played === false) {
   if(player1.isTurn) {
     space6.addSymbolX(e.target);
     let index = board[1].indexOf(6);
     if(index !== -1) {
       board[1][index] = 'x';
     }
     switchTurns(player2, player1);
     space6.played = true;
   } else {
       space6.addSymbolO(e.target);
       let index = board[1].indexOf(6);
       if(index !== -1) {
         board[1][index] = 'o';
       }
       switchTurns(player1, player2);
       space6.played = true;
   } 
}

else if (e.target.id === space7.id && space7.played === false) {
   if(player1.isTurn) {
     space7.addSymbolX(e.target);
     let index = board[2].indexOf(7);
     if(index !== -1) {
       board[2][index] = 'x';
     }
     switchTurns(player2, player1);
     space7.played = true;
   } else {
       space7.addSymbolO(e.target); 
       let index = board[2].indexOf(7);
       if(index !== -1) {
         board[2][index] = 'o';
       }
       switchTurns(player1, player2);
       space7.played = true;
   }   
}

else if (e.target.id === space8.id && space8.played === false) {
   if(player1.isTurn) {
     space8.addSymbolX(e.target);
     let index = board[2].indexOf(8);
     if(index !== -1) {
       board[2][index] = 'x';
     }
     switchTurns(player2, player1);
     space8.played = true;
   } else {
       space8.addSymbolO(e.target);
       let index = board[2].indexOf(8);
       if(index !== -1) {
         board[2][index] = 'o';
       }
       switchTurns(player1, player2);
       space8.played = true;
   } 
}

else if (e.target.id === space9.id && space9.played === false) {
   if(player1.isTurn) {
     space9.addSymbolX(e.target);
     let index = board[2].indexOf(9);
     if(index !== -1) {
       board[2][index] = 'x';
     }
     switchTurns(player2, player1);
     space9.played = true;
   } else {
       space9.addSymbolO(e.target); 
       let index = board[2].indexOf(9);
       if(index !== -1) {
         board[2][index] = 'o';
       }
       switchTurns(player1, player2);
       space9.played = true;
   }   
}

//check if playerX wins
// top row
if(board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") {
  $('.header').text('Player One Wins!');
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}  
// middle row 
else if (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") {
  $('.header').text('Player One Wins!');
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1:');
  p1Counter += 1;
  player1.win = true;
}
// bottom row
else if (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") {
  $('.header').text('Player One Wins!'); 
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1: ' + p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// first column
else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
  $('.header').text('Player One Wins!'); 
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1: ' + p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// second column
else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
  $('.header').text('Player One Wins!'); 
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1: ' + p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// third column
else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
  $('.header').text('Player One Wins!'); 
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1: ' + p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// diaganol right
else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
  $('.header').text('Player One Wins!');  
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1: ' + p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// diaganol left
else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
  $('.header').text('Player One Wins!'); 
  $('.header').css('color', 'tomato');
  $('.p1').text ('Player 1: ' + p1Counter);
  p1Counter += 1;
  player1.win = true;
} 

// check if player 2 wins

//top row
if(board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o") {
  $('.header').text('Player Two Wins!');
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}  
// middle row 
else if (board[1][0] === "o" && board[1][1] === "o" && board[1][2] === "o") {
  $('.header').text('Player Two Wins!');  
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// bottom row
else if (board[2][0] === "o" && board[2][1] === "o" && board[2][2] === "o") {
  $('.header').text('Player Two Wins!');   
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// first column
else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
  $('.header').text('Player Two Wins!'); 
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// second column
else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
  $('.header').text('Player Two Wins!');  
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// third column
else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
  $('.header').text('Player Two Wins!');  
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// diaganol right
else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
  $('.header').text('Player Two Wins!');  
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// diaganol left
else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
  $('.header').text('Player Two Wins!');    
  $('.header').css('color', '#33DBFF');
  $('.p2').text ('Player 2: ' + p2Counter);
  p2Counter += 1;
  player2.win = true;
}
}
});


$('.reset').on('click', () => {
player1.isTurn = true;
player2.isTurn = false;
player1.win = false;
player2.win = false;
$('.x').remove();
$('.o').remove();
$('.header').text('Tic Tac Toe');
board = [[1,2,3],[4,5,6],[7,8,9]];
space1.played = false;
space2.played = false;
space3.played = false;
space4.played = false;
space5.played = false;
space6.played = false;
space7.played = false;
space8.played = false;
space9.played = false;  
});












// const statusDisplay = document.querySelector('.game--status');
// /*
// Here we declare some variables that we will use to track the 
// game state throught the game. 
// */
// /*
// We will use gameActive to pause the game in case of an end scenario
// */
// let gameActive = true;
// /*
// We will store our current player here, so we know whos turn 
// */
// let currentPlayer = "X";
// /*
// We will store our current game state here, the form of empty strings in an array
//  will allow us to easily track played cells and validate the game state later on
// */
// let gameState = ["", "", "", "", "", "", "", "", ""];
// /*
// Here we have declared some messages we will display to the user during the game.
// Since we have some dynamic factors in those messages, namely the current player,
// we have declared them as functions, so that the actual message gets created with 
// current data every time we need it.
// */
// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// /*
// We set the inital message to let the players know whose turn it is
// */
// // statusDisplay.innerHTML = currentPlayerTurn();
// function handleCellPlayed() {

// }
// function handlePlayerChange() {

// }
// function handleResultValidation() {

// }
// function handleCellClick() {

// }
// function handleRestartGame() {

// }
// /*
// And finally we add our event listeners to the actual game cells, as well as our 
// restart button
// */
// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// // document.querySelector('.game--restart').addEventListener('click', handleRestartGame);






class Ttt extends Component {
 







    



  render() {
   
    return(
      
      <main>
      
       


      <div class='flex'>
  <div class='p1'>Player 1: 0</div>
  <h1 class='header'>Tic Tac Toe</h1>
  <div class='p2'>Player 2: 0</div>
</div>
<div class='grid'>
  <div class='space' id='one'></div>
  <div class='space' id='two'></div>
  <div class='space' id='three'></div>
  <div class='space' id='four'></div>
  <div class='space' id='five'></div>
  <div class='space' id='six'></div>
  <div class='space' id='seven'></div>
  <div class='space' id='eight'></div>
  <div class='space' id='nine'></div>
</div> 

<div class='wrapper'>
  <button class='reset'>Reset</button>
</div>
        
           
      {/* <section>
        <h1 class="game--title">Tic Tac Toe</h1><br></br>
        <div class="game--container">
            <div data-cell-index="0" class="cell"></div>
            <div data-cell-index="1" class="cell"></div>
            <div data-cell-index="2" class="cell"></div>
            <div data-cell-index="3" class="cell"></div>
            <div data-cell-index="4" class="cell"></div>
            <div data-cell-index="5" class="cell"></div>
            <div data-cell-index="6" class="cell"></div>
            <div data-cell-index="7" class="cell"></div>
            <div data-cell-index="8" class="cell"></div>
        </div>
        <h2 class="game--status"></h2>
        <button onClick='.addEventListener(handleRestartGame)' class="game--restart">Restart Game</button>
    </section> */}
      
  

    

                

 <footer>
          <div class="footer-copyright">
            <div class="container">
            Forged In Fire By <a class="green-text" href="https://davetheclark.com/">WareDave</a>
           <div class="pink-text text-lighten-4 right">© 2020 Copyright</div> 
       
           
            </div>
          </div>
        
 </footer>       

      </main>
     
    )
  }
}

export default Ttt;