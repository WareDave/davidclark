import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import Header from './header'
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

      let userTron = prompt('Who are you');
      alert(userTron + "Life Starts at 20 For all MTG players")

      function UserTron(){
        document.getElementById('userTron').innerHTML = userTron; 
       
      }

      let userFoe = prompt('Who are you playing');
      alert(userFoe + "Doom is in the cards if you play" + userTron)

      function UserFoe(){
        document.getElementById('userTron').innerHTML = userFoe; 
       
      } 
      
      

     
      

      let YourCounter = 20;
      let FoeCounter = 20;
      let Mode = "0"; 
      
      function YourIncrease() {
        YourCounter++;
        document.getElementById('YourCount').innerHTML = YourCounter;
         
      }
      
      function YourDecrease() {
        YourCounter--;
        document.getElementById('YourCount').innerHTML = YourCounter;
        
      }
      
      function FoeIncrease() {
        FoeCounter++;
        document.getElementById('FoeCount').innerHTML = FoeCounter;
        
      }
      
      function FoeDecrease() {
        FoeCounter--;
        document.getElementById('FoeCount').innerHTML = FoeCounter;
        
      }  
      
      function Reset() {
        if (true) { 
          YourCounter = 20;
          FoeCounter = 20;
          document.getElementById('YourCount').innerHTML = YourCounter;
          document.getElementById('FoeCount').innerHTML = FoeCounter;
        }
      }
      
      function prepareOnClicks() {
          document.getElementById('YourUp').onclick = function() { YourIncrease(); };
          document.getElementById('YourDown').onclick = function() { YourDecrease(); };
          document.getElementById('FoeUp').onclick = function() { FoeIncrease(); };
          document.getElementById('FoeDown').onclick = function() { FoeDecrease(); };
          document.getElementById('reset').onclick = function() { Reset(); };
          
      }
      
      window.onload = function() {
        prepareOnClicks();
        const elem = document.querySelector('#YourDown');
        let draggie = ( elem, {
          axis: 'y'
        });
        document.getElementById('YourCount').innerHTML = YourCounter;
        document.getElementById('FoeCount').innerHTML = FoeCounter;
      };

    

      
    
  }

  

  

 
  render() {
   
    return(
      
      <main>
          <Header/>
          <div className="parallax"></div>
          <div id="container1">
  <div class="left1">
    <label id="YourName"><div id="userTron">{document.getElementById('UserTron')}The Winner</div></label>
    <div id="YourLife">
      <div id="YourUp"><i class="fas fa-arrow-circle-up"></i></div>
      <div id="YourCount">20</div>
      <div id="YourDown"><i class="fas fa-arrow-circle-down"></i></div>
    </div>
  </div>
  <div class="right1">
    <label id="FoeName">Some Cunt</label>
    <div id="FoeLife">
      <div id="FoeUp"><i class="fas fa-arrow-circle-up"></i></div>
      <div id="FoeCount">20</div>
      <div id="FoeDown"><i class="fas fa-arrow-circle-down"></i></div>
    </div>
  </div>
</div>
<div id="reset">
<i class="fas fa-undo"></i></div>
<div id="commander">
<i class="fab fa-wizards-of-the-coast"></i></div><br/><br/>





  
      </main>
     
    )
  }
}

export default Mtg;