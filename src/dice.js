import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import Header from './header'
import './App.css'
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






class Dice extends Component {
 
  componentDidMount() {
    const elem = document.querySelector('.carousel');
    const instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });

      const dice6 = {
        sides: 6,
        roll: function () {
          const randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
      
    
      const dice4 = {
        sides: 4,
        roll: function () {
          const randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }

      const dice12 = {
        sides: 12,
        roll: function () {
          const randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }

      const dice10 = {
        sides: 10,
        roll: function () {
          const randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
      const dice8 = {
        sides: 8,
        roll: function () {
          const randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }

      
      const dice20 = {
        sides: 20,
        roll: function () {
          const randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }

      function printNumber(number) {
        const placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
      }
      
      const button6 = document.getElementById('button6');
      
      button6.onclick = function() {
        const result = dice6.roll();
        printNumber(result);
      };

      const button4 = document.getElementById('button4');
      
      button4.onclick = function() {
        const result = dice4.roll();
        printNumber(result);
      };

      

      function printNumber(number) {
        const placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
      }
      
      const button10 = document.getElementById('button10');
      
      button10.onclick = function() {
        const result = dice10.roll();
        printNumber(result);
      };

      function printNumber(number) {
        const placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
      }
      
      const button8 = document.getElementById('button8');
      
      button8.onclick = function() {
        const result = dice8.roll();
        printNumber(result);
      };

      function printNumber(number) {
        const placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
      }
      
      const button12 = document.getElementById('button12');
      
      button12.onclick = function() {
        const result = dice12.roll();
        printNumber(result);
      };

      function printNumber(number) {
        const placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
      }
      
      const button20 = document.getElementById('button20');
      
      button20.onclick = function() {
        const result = dice20.roll();
        printNumber(result);
      };
         
  }

  

 
  render() {
   
    return(
      
      <main>
          <Header/>
          <p id="placeholder">
  
  </p>
  <button id="button6">Roll D6</button>

  <button id="button4">Roll D4</button> 

  <button id="button8">Roll D8</button>

  <button id="button10">Roll D10</button>  

  <button id="button12">Roll D12</button> 

  <button id="button20">Roll D20</button>

  <footer>
          <div class="footer-copyright">
            <div class="container">
             Forged In Fire By The <a class="green-text" href="https://github.com/WareDave">WareDave  <i class="fa fa-github"></i></a> 
            <a class="pink-text text-lighten-4 right" href="/">© 2020 Copyright</a>

           
            </div>
          </div>
        
 </footer>     
      </main>
     
    )
  }
}

export default Dice;