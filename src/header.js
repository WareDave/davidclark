import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
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


class Header extends Component {
 
  componentDidMount() {
   

    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
     
      setTimeout(showSlides, 9999); // Change image every 2 seconds
    }
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

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <div class="text2">
  [ David L. Clark ]<br/>
 software wizard<br/>
      email me at <a class='spike3' href="mailto:davetheclark87@gmail.com">Davetheclark@gmail.com</a><br/><br/>
      
   <i class="fas fa-exclamation-triangle"></i> Hairy Wizard Not The Wizard Harry <i class="fas fa-exclamation-triangle"></i> 
  </div>
</div>

<div class="mySlides fade">
  <div id="numbertext">2 / 3</div>
  
  <div class="text2">
  <h1 className="header black-text">
  <i class="fas fa-hand-spock"></i></h1>
  [ Dave ]<br/>
    Ambitious and dedicated software wizard with a background in operations and quality assurance.<br/>
     Capable of learning new processes and systems quickly, and able to contribute as a resourceful team member and successfully work independently.<br/>
     It gives me great joy to combine my love of efficiency and skills as a wizard to create intuitive web and app experiences.<br/>
     Please see [ mad skills ] section for spells or visit my GitHub  <a href="https://github.com/WareDave" class="fa fa-github white-text"></a> 

  </div>
</div>

<div class="mySlides fade">
  <div id="numbertext">3 / 3</div>

  <div class="text2">
  [ Dave Clark ]<br/>
       <i  href="https://www.python.org/" class="fab fa-python"></i>  <i id='spike3' href="https://en.wikipedia.org/wiki/JavaScript" class="fab fa-js-square"></i>  <i class="fab fa-html5"></i>  <i class="fab fa-css3-alt"></i>  <i class="fab fa-node-js"></i>  <i class="fab fa-react"></i> <i class="fab fa-angular"></i> <i class="fab fa-bootstrap"></i>  <i class="fab fa-aws"></i>  <a href="https://github.com/WareDave" class="fa fa-github white-text"></a>  <i id='spike3' href="https://company.wizards.com/content/games" class="fab fa-d-and-d white-text"></i><br/>
        JQuery | JSON | SQL | PostgreSQL | MySQL | SQLite | MongoDB<br/>
        Style: SASS |  Bulma  <br/>
        Testing: Postman | VScode | Sublime <br/>
        CLI: Terminal | cmd | Bash <br/>
        OS: <i class="fab fa-apple"></i> | <i class="fab fa-linux"></i> | <i class="fab fa-windows"></i><br/>
  </div>
</div>

<a class="prev" onclick="plusSlides(-1)"><i onclick="plusSlides(-1)"></i></a>
<a class="next" onclick="plusSlides(1)"><i onclick="plusSlides(1)" class="fas fa-forward"></i></a>

</div>


<div>
  <span id="dot" onclick="currentSlide(1)"></span> 
  <span id="dot" onclick="currentSlide(2)"></span> 
  <span id="dot" onclick="currentSlide(3)"></span> 
</div>




        
          


        
      

      </main>
     
    )
  }
}

export default Header;