import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
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


class Header extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
         
         <div class="navbar-fixed red darken-4">
       
       <nav>
       
  <div class="nav-wrapper red darken-4">
    <a href="/" class="brand-logo center black-text">[ DaveHome ]</a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
    <li><a  href="https://profiles.generalassemb.ly/profiles/david-clark" class="fab fab fa-old-republic fa-2x black-text"></a></li>
      
    </ul>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><Link class="fas fa-search fa-1x black-text" to="/SearchContainer"></Link></li>
       <a class='dropdown-trigger fas fa-dice-d20 fa-2x black-text' href='/' data-target='dropdown1'></a>


<ul id='dropdown1' class='dropdown-content'>
  <li><a class="pink-text" href="https://post-hub.herokuapp.com/">Post-Hub</a></li>
  <li><a class="pink-text" href="https://captains-tools.herokuapp.com/">StarFleet</a></li>
  <li class="divider" tabindex="-1"></li>
  <li><a class="blue-text" href="https://www.linkedin.com/in/dave-the-clark/">LinkedIn</a></li>
  <li><a class="black-text" href="https://github.com/WareDave">GitHub</a></li>
  <li><a class="red-text" href="https://profiles.generalassemb.ly/profiles/david-clark">GA Profile</a></li>
  <li><a class='red-text' href='https://www.soylentshenanigans.com/'></a>soylent<br/>shenanigans</li>
</ul>
     
    </ul>
  </div>
</nav>
</div>
        
          

<div class="carousel carousel-slider center">
  <div class="carousel-fixed-item center">
    <a class="btn-floating pulse black black-text darken-text-2" href="https://github.com/WareDave" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
  </div>
  <div class="carousel-item grey darken-4 white-text" href="/">
  <h1 className="header pink-text">[ David L. Clark ]</h1>
  <h2 className="header pink-text" >software wizard<br/>
      email me at <a class="green-text" href='davetheclark87@gmail.com'>davetheclark87@gmail.com</a></h2>
    <p class="red-text"> <i class="fas fa-exclamation-triangle"></i> Hairy Wizard Not The Wizard Harry <i class="fas fa-exclamation-triangle"></i> </p>
    
    <br/>
  </div>
 
  <div class="carousel-item  grey lighten-1 black-text" href="/">
  <h1 className="header black-text">
  <i class="fas fa-hand-spock"></i></h1>
  <h4>[ Dave ]</h4>
    <p class="black-text">Ambitious and dedicated software wizard with a background in operations and quality assurance.<br/>
     Capable of learning new processes and systems quickly, and able to contribute as a resourceful team member and successfully work independently.<br/>
     It gives me great joy to combine my love of efficiency and skills as a wizard to create intuitive web and app experiences.<br/>
     Please see [ mad skills ] section for spells or visit my GitHub</p>
  </div>
  <div class="carousel-item black white-text" href="/">
  <h1 className="header pink-text">[ Dave Clark ]</h1>
       <i href="https://www.python.org/" class="fab fa-python"></i>  <i href="https://en.wikipedia.org/wiki/JavaScript" class="fab fa-js-square"></i>  <i class="fab fa-html5"></i>  <i class="fab fa-css3-alt"></i>  <i class="fab fa-node-js"></i>  <i class="fab fa-react"></i> <i class="fab fa-angular"></i> <i class="fab fa-bootstrap"></i>  <i class="fab fa-aws"></i>  <a href="https://github.com/WareDave" class="fa fa-github white-text"></a>  <i href="https://company.wizards.com/content/games" class="fab fa-d-and-d white-text"></i><br/>
       <p> JQuery | JSON | SQL | PostgreSQL | MySQL | SQLite | MongoDB<br/>
        Style: SASS |  Bulma  <br/>
        Testing: Postman | VScode | Sublime <br/>
        CLI: Terminal | cmd | Bash 
        OS: <i class="fab fa-apple"></i> | <i class="fab fa-linux"></i> | <i class="fab fa-windows"></i></p><br/>
            
  </div>
  <div class="carousel-item black white-text" href="#four!">
    <h2>come see me on <a href="https://www.linkedin.com/in/dave-the-clark/" class="fa fa-linkedin"></a></h2>
    <h1 class="pink-text">Or On GA <a href="https://profiles.generalassemb.ly/profiles/david-clark">Profiles</a></h1>
    need a Dev Wizard email me direct at<br/>
    davetheclark87@gmail.com
  </div>
</div>

 
        
      

      </main>
     
    )
  }
}

export default Header;