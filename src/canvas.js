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
// JS operators for canvas
// HTMLCanvasElement.getContext()

var canvas = document.getElementById('canvas');
var ctx = canvas
// var ctx2d = canvas.getContext('2d');


// canvas operations
const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
   
    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }
// character operations

useEffect(() => {
    writeText({ text: 'Killing it!', x: 180, y: 70 });
   
    writeText({ text: 'You Know You This Dev', x: 180, y: 70 }, { textAlign: 'right' });
   
    writeText({ text: 'www.DaveTheClark.com', x: 180, y: 130 }, { fontSize: 30, color: 'green', textAlign: 'center' });
   
    writeText({ text: 'please use chat bot to reach me'+"or call"+ '303-641-6954', x: 180, y: 200 }, { fontSize: 14, fontFamily: 'cursive', color: 'blue', textAlign: 'center' });
  }, []);



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
    <br></br></p>if paired with a back end via routes. you can sen all types of data to your api.
        <div className="App">
      <h3>Write on the canvas how it works - <a href="https://github.com/WareDave" target="_blank" rel="noopener noreferrer">Dave's GitHub</a></h3>
      <p>code listed below. Please use it, break it, have fun, get messy.</p>
      <canvas ref={canvas}></canvas>
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