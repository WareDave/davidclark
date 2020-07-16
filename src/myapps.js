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


class Myapps extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
        <Header/>
        <p class='center-align'><h1 className="header pink-text">[ Forged In Fire By Dave Clark ]</h1><br/>
           
           Express App:<br/>
           <img src="https://i.imgur.com/ioK9cB8m.jpg" alt='starfleet'></img><br/>
           <a class="btn waves-effect waves-purple pink light-blue-text darken-text-2" href="https://captains-tools.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class = "material-icons">whatshot</i>Captains Log<i class = "material-icons">whatshot</i></a><br/>
           React Flask:<br/>
           <img src="https://i.imgur.com/4TNapS6m.jpg" alt='post-hub'></img><br/>
               <a class="btn waves-effect waves-purple pink grey-text darken-text-2" href="https://post-hub.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class = "material-icons">whatshot</i>Post-Hub<i class = "material-icons">whatshot</i></a><br/>
           visit me or see my work:<br/>
           <a class="btn waves-effect waves-purple white blue-text darken-text-2" href="https://www.linkedin.com/in/dave-the-clark/" target="_blank" rel="noopener noreferrer">Linked<i class="fa fa-linkedin"></i></a><br/>
           <a class="btn waves-effect waves-purple red black-text darken-text-2" href="https://github.com/WareDave" target="_blank" rel="noopener noreferrer">Github <i class="fa fa-github"></i></a>
           <a class="btn waves-effect waves-purple black red-text darken-text-2" href="https://profiles.generalassemb.ly/profiles/david-clark" target="_blank" rel="noopener noreferrer">GA</a>

           </p>
           <p class='center-align'>
           <h1 class='center-align'>[ Out The Box ]</h1>
                  <a href='https://www.instagram.com/outthebox303/' target='blank'><img class='balls' src="https://i.imgur.com/engcPUw.jpg" alt="link"></img></a><br/>
                  <a class="waves-effect waves-light red-text btn black modal-trigger" href="#modal4">About</a>


                    <div id="modal4" class="modal grey darken-4">
                        <div class="modal-content">
                        <h3>[ Out The Box ]</h3>
                        <h4>What we sell</h4>
                        <p>Are you a collector? Do you enjoy toy shows, comic-con's or cosplay?  If so than Out The Box is a marketplace designed just for you. We sell toys and memorabilia from all eras including but not limited to: TV, Movies, Music, books, Sports and Video Games.</p>
                        <h4>What we do</h4>
                        <p>Out The Box is a marketplace built by fans for fans. Weather your a collector with mountains of unwanted treasures or you are simply ready to part with an old collection and move on to the next big thing. Maybe you enjoy creating your own treasures and are looking for a better way to share them. Out The Box is here for you.  We will make your treasures available for the world to see.</p>
                        <h4>More than Just Toys</h4>
                        <p>In addition we sell clothing, jewelry & accessories, artwork, retro video games & board games, Skateboards, Shoes, and much more. Many items created by local artists right here in Colorado.</p>
                        <a class="btn waves-effect waves-purple white blue-text darken-text-2" href="https://www.outtheboxshop.com/" target="_blank" rel="noopener noreferrer">OutTheBoxShop.com</a>
                        </div>
                        <div class="modal-footer red darken-4">
                        <a href="/" class="modal-close waves-effect waves-green btn-floating pulse">Close</a>
                        </div>
                    </div>
                  <br/><a class="btn waves-effect waves-purple red black-text darken-text-2" href="https://www.outtheboxshop.com/" target="_blank" rel="noopener noreferrer">Shop<i class="material-icons right">add_shopping_cart</i></a><br/>
                  10215 Washington Street, Thornton, Colorado 80229 | Phone: 720-287-2082<br/> 
                  <a href='https://www.instagram.com/outthebox303/'> <img class="cbgb" src='https://i.imgur.com/iO75bdO.png'></img> </a><a href='https://www.facebook.com/outthebox303/'> <img class="cbgb" src='https://i.imgur.com/fvkvJGt.png'></img></a><a href='https://www.youtube.com/channel/UCDDgyvtmOxFyeLCc9DTNLSA'> <img class="cbgb" src='https://i.imgur.com/M1jhCXr.png'></img></a><br/>
            </p>
            <p class='center-align'>Developed and maintain outheboxshop.com</p>
            <p class='center-align'>Working On :<br/>
            I am currently working on a vendor intake app with new owner Ernesto, and the team at Consign Connect on a Full stack MERN app to using React-PDF, and Bootstrap for style.
 
            </p>
           <h1 class='center-align'>[ Soylent Shenanigans ]<br/>
               <a href='https://www.soylentshenanigans.com/' target='blank'> <img class='balls' src="https://i.imgur.com/s7gantL.jpg" alt="link"></img></a><br/> 
                <p class='center-align'><a href="https://www.instagram.com/soylent_shenanigans/?hl=en"><img class='jordi center-align' src="https://i.imgur.com/afko6pK.png"   target='blank'></img> </a>  <a href="https://www.facebook.com/SoylentShenanigans/" target='blank'><img class='jordi center-align' src="https://i.imgur.com/J9ikY9T.png" ></img></a></p>
                
                </h1><p class='center-align'>Worked On :<br/>
                <a href='https://www.soylentshenanigans.com/'>www.soylentshenanigans.com</a></p> 
                

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

export default Myapps;