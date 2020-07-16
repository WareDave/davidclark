import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import './App.css'
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


class Contact extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
          <Header/>
          <h1 class='center-align'>WareDave Dev Wizard</h1>
                    <p class='center-align'>David Clark<br/>
                    Full Stack Web Developer |  Westminster, CO <i href='tel:3036416954'>(303) 641-6954</i><br/>
                    <a href="mailto:davetheclark87@gmail.com">Davetheclark@gmail.com</a>
                    <p class='center-align'>Ambitious and dedicated software wizard with a background in operations and quality assurance. Capable of learning new processes and systems quickly, and able to contribute as a resourceful team member and successfully work independently. It gives me great joy to combine my love of efficiency and skills as a wizard to create intuitive web and app experiences.<br/>
            Please see [ mad skills ] section on the <Link href='/'>Home </Link>page for spells or visit my GitHub  <a href="https://github.com/WareDave" class="fa fa-github"></a><br/></p>
     <img class='spike' src='https://i.imgur.com/ZMpPE4Z.png'></img><img class='spike' src='https://i.imgur.com/SZJEs9e.png'></img> <img class='spike' src='https://i.imgur.com/LsOc40a.png'></img><a href="mailto:davetheclark87@gmail.com"><img class='spike' src='https://i.imgur.com/yqMMdJe.png'></img> </a>  
     </p>

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

export default Contact;