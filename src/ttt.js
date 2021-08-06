import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import './Ttt.css'
import Header from "./header"
const $ = window.$;
M.AutoInit();



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






const cells = Array.from(document.querySelectorAll("td"))
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const moveIndicator = document.querySelector("p span")
let onMove = "×",
  gameOver = false

const getText = indexArray => indexArray.reduce((str, i) => str + cells[i].textContent, "")

const checkWin = () => {
  const winningLine = lines.find(line => ["×××", "○○○"].includes(getText(line)))
  if (!winningLine)
    return false
  winningLine.forEach(index => cells[index].style.background = "#66ff66")
  gameOver = true
  return true
}

const checkDraw = () => {
  if (cells.some(cell => !cell.textContent))
    return false
  cells.forEach(cell => cell.style.background = "lightgray")
  gameOver = true
  return true
}

const markCell = e => {
  if (gameOver || e.target.textContent)
    return

  e.target.textContent = onMove

  if (checkWin())
    return

  if (checkDraw())
    return

  onMove = (onMove === "×") ? "○" : "×"
  moveIndicator.textContent = onMove
}

const startNewGame = () => {
  gameOver = false
  onMove = "×"
  moveIndicator.textContent = "×"
  cells.forEach(cell => {
    cell.textContent = ""
    cell.style.background = ""
  })
}

cells.forEach(cell => cell.addEventListener("click", markCell))
document.querySelector("button").addEventListener("click", startNewGame)  
  







class Ttt extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
        <Header/>
       
           
           

      
  

    

                

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