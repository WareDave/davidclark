import React, { Component, Col, Container, Row, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import './App.css'
import Header from "./header"
const $ = window.$;
M.AutoInit();

// events for head and foot on load

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


// canvas operations
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}           
var canvas = () => document.getElementById("starfield"),
context = canvas.getContext("2d"),
stars = 500,
colorrange = [0,60,240];
for (var i = 0; i < stars; i++) {
var x = () => Math.random() * canvas.offsetWidth;
y = Math.random() * canvas.offsetHeight,
radius = Math.random() * 1.2,
hue = colorrange[getRandom(0,colorrange.length - 1)],
sat = getRandom(50,100);
context.beginPath();
context.arc(x, y, radius, 0, 360);
context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
context.fill();
}

// canvas js
var canvas = document.getElementById("starfield"),
context = canvas.getContext("2d"),
stars = 200;


// componet and HTML

class Canvas extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
          {/* calling head */}
        <Header/>
       <h1>React Canvas The Pro Trick</h1>
       <h2>using this trick saves alot os time.</h2>
       <p>this is a scale down from what i use on some of my app.    
    <br></br></p>if paired with a back end via routes. you can send all types of data to your api.
        <div className="App">
      <h3>Starfield - <a href="https://github.com/WareDave" target="_blank" rel="noopener noreferrer">Dave's GitHub</a></h3>
     
     <canvas id='starfield' width='600' height='500'></canvas>
    </div>        
           
            <code>
           
{/* const writeText = (info, style = {}) => { 
   // const { text, x, y } = info;
   // const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
   
   // ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }
  */}

            </code>


               
           
{/* boiler plate footer */}
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

export default Canvas;