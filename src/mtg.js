import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import Header from './header'
import './mtg.css'
import './App.css'
const $ = window.$;
M.AutoInit();



document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.tap-target');
  let instances = M.TapTarget.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.tooltipped');
  let instances = M.Tooltip.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.materialboxed');
  let instances = M.Materialbox.init(elems, {duration: 400 });
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems, {hover: true});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.scrollspy');
  let instances = M.ScrollSpy.init(elems, {scrollOffset: 0, activeClass: 'active', throttle: 100});
});






class Mtg extends Component {
 
  componentDidMount() {
    const elem = document.querySelector('.carousel');
    const instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });

      // let userTron = prompt('Who are you');
      alert("Life Starts at 20 For all MTG players")

      // function UserTron(){
      //   document.getElementById('userTron').innerHTML = userTron; 
       
      // }

      // let userFoe = prompt('Who are you playing');
      // alert(userFoe + " Doom is in the cards if you play" + userTron)

      // function UserFoe(){
      //   document.getElementById('userTron').innerHTML = userFoe; 
       
      // } 
      
      

     
      

      var counter = 20;

      $("#plus").click(function(){
        counter++;
        $("#count").text(counter);
      });
      
      $("#minus").click(function(){
        counter--;    
        $("#count").text(counter);
      });
      
    
  }

  

  

 
  render() {
   
    return(
      
      <main>
          <Header/>
          <div className="parallax"></div>
          <h1 >( You ) </h1>
          <p class="button" id="minus">-</p>
             <p id="count">20</p>
                <p class="button" id="plus">+</p><br></br><br></br><br></br>


                <div className="parallax"></div>
          <h1 >( Foe ) </h1>
          <p class="button" id="minus">-</p>
             <p id="count">20</p>
                <p class="button" id="plus">+</p><br></br><br></br><br></br>

              





  
      </main>
     
    )
  }
}

export default Mtg;