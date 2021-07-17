import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import './rpsls.css'
import Header from './header';
var $ = window.$;
M.AutoInit();


window.onload = function(){ 
//Array for computer to choose from
let array = ["rock", "paper", "scissors", "lizard", "spock"];

//variables
var playerChoice = "";
var computerChoice = '';
var playerScore = 0;
var computerScore = 0;

//Container to display results
var container = document.querySelector("#container");
var content = document.createElement("div");
content.style.textAlign = "center";

//Displaying scores
var player = document.querySelector(".player-score");

var computer = document.querySelector(".computer-score");


//computer chooses random item from array above
var computerGo = () => {
  computerChoice = array[Math.floor(Math.random() * array.length)];
};

// Button: Rock
var btn = document.querySelector("#rock");
btn.onclick = () => {
  playerChoice = "rock";
  playRound();
};

// Button: Paper
var btn1 = document.querySelector("#paper");
btn.onclick = () => {
  playerChoice = "paper";
  playRound();
};

// Button: Scissors
var btn2 = document.querySelector("#scissors");
btn.onclick = () => {
  playerChoice = "scissors";
  playRound();
};

// Button: Lizard
var btn3 = document.querySelector("#lizard");
btn.onclick = () => {
  playerChoice = "lizard";
  playRound();
};

// Button: Spock
var btn4 = document.querySelector("#spock");
btn.onclick = () => {
  playerChoice = "spock";
  playRound();
};

// Checks score and ends game if either player reaches 5 points
var check = () => {
  if (playerScore == 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("lizard").disabled = true;
    document.getElementById("spock").disabled = true;
    content.textContent =
      "Woot! Are you a robot or something? Refresh to play again!";
  } else if (computerScore == 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("lizard").disabled = true;
    document.getElementById("spock").disabled = true;
    content.textContent = "Game over! Great, now computers will rule us. Refresh to play again!";
  }
};

//After the user selects an option, this function runs to play the game.
var playRound = () => {
  computerGo();
  if (playerChoice === "rock" && computerChoice === "rock") {
    content.textContent = "Rock vs rock! That's a tie!";
    check();
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    content.textContent = "You SUCK! Paper covers rock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    content.textContent = "I don't like you. You win this round! Rock smashes scissors!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "lizard") {
    content.textContent = "I don't like you. You win this round! Rock smashes lizard!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "spock") {
    content.textContent = "You SUCK! Spock Fights rock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    content.textContent = "I don't like you. You win this round! Paper covers rock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    content.textContent = "Paper vs Paper! That's a tie!";
    check();
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    content.textContent = "You SUCK! Scissors cut paper!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "lizard") {
    content.textContent = "You SUCK! Lizard eats paper!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "spock") {
    content.textContent = "I don't like you. You win this round! Paper disproves Spock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    content.textContent = "You SUCK! Rock smashes scissors!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    content.textContent = "I don't like you. You win this round! Scissors cut paper!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    content.textContent = "Scissors vs Scissors! That's a tie!";
    check();
  } else if (playerChoice === "scissors" && computerChoice === "lizard") {
    content.textContent = "I don't like you. You win this round! Scissors decapitate lizard!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "spock") {
    content.textContent = "You SUCK! Spock smashes scissors!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "rock") {
    content.textContent = "You SUCK! Rock crushes lizard!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "paper") {
    content.textContent = "I don't like you. You win this round! Lizard eats paper!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "scissors") {
    content.textContent = "You SUCK! Scissors decapitate lizard!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "lizard") {
    content.textContent = "Lizard vs lizard! Don't let them fight!";
    check();
  } else if (playerChoice === "lizard" && computerChoice === "spock") {
    content.textContent = "I don't like you. You win this round! Lizard poisons Spock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "rock") {
    content.textContent = "I don't like you. You win this round! Spock Fights rock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "paper") {
    content.textContent = "You SUCK! Paper disproves Spock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "MCP score: " + computerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "scissors") {
    content.textContent = "I don't like you. You win this round! Spock smashes scissors!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "lizard") {
    content.textContent = "You SUCK! Lizard poisons Spock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = computerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "spock") {
    content.textContent = "Spock vs Spock? What is going on?!";
    check();
  } else {
    content.textContent = "Something went wrong!";
  }
};

};
//refresh
function refreshPage() {
  window.location.href = window.location.href;
}



	


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {duration: 400 });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {hover: true});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {scrollOffset: 0, activeClass: 'active', throttle: 100});
});


class Rpsls extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
         <Header/>
         <body>
  <h1>Rock, Paper, Scissors, Lizard, Spock</h1>

  <div class="btn">
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    {/* <button id="scissors"><i class="large material-icons">content_cut</i></button> */}
    <button id="lizard">T-REX</button>
    <button id="spock">Spock</button>
  </div>

  <div class="scores">
    <h4 class="player-score">Player Score: </h4>
    <h4 class="MCP-score">Computer Score: </h4>
  </div>

  <div id="container">  </div>
  <script src="script.js"></script>
  
  <div id="refresh"><button class="refresh" onclick="refreshPage()">Restart game</button></div>
</body>


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

export default Rpsls;