import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from "./header"
// import Preloader from './components/Preloader'
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



class App extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
    return(
      
      <main>
         
         <Header/>
<h1 class='center-align'>
         <a class="btn-floating btn-large waves-effect doom left-align"><Link to='/spam&eggs'> <i href="/spam&eggs" class="fab fa-python"></i></Link>  </a>
         <a class="waves-effect doom btn-large center-align"><Link class='cock' to='/MyApps'>My Apps</Link>  </a> 
         
         <a class="waves-effect doom btn-large center-align"><Link class='cock' to='/contact'>Contact Me</Link>  </a>   
        <a class="btn-floating btn-large waves-effect doom right-align"><Link to='/js'><i href="" class="fab fa-js-square"></i>  </Link>  </a>
        </h1>
      <ul class = "collapsible" data-collapsible = "expandable">
         <li>
            <div class = "collapsible-header red darken-4">
            <i class="fas fa-user-secret black-text"></i>About</div>
            <div class = "collapsible-body center-align">
            <img src="https://i.imgur.com/PlnYW1Um.jpg" alt="header"></img>
            <h1>[ WareDave ]</h1>
            <p>
            ! Hairy Wizard Not The Wizard Harry !
            </p>
            <p>Ambitious and dedicated software wizard with a background in operations and quality assurance. Capable of learning new processes and systems quickly, and able to contribute as a resourceful team member and successfully work independently. It gives me great joy to combine my love of efficiency and skills as a wizard to create intuitive web and app experiences.<br/>
            Please see [ mad skills ] section for spells or visit my GitHub  <a href="https://github.com/WareDave" class="fa fa-github"></a><br/>
            <h4>Ground Zero :</h4>
              <img src="https://i.imgur.com/9Mgqi9pm.jpg" alt="dos"></img>
              <p>The last stand-alone version of MS-DOS to be released. Windows 95 was released on August 24, 1995. In the Windows 95 command line, the operating system version number was listed as MS-DOS version 7.0.</p>
              <p>I received mine in October of 1996. It was the first computer that was my own. Soon after I found myself learning my first CLI spells. A wizard I would become.</p> 

            <h4>The Spark :</h4>
              <img src="https://i.imgur.com/cTzolC4m.jpg" alt="myspace"></img>
              <p>Myspace (originally stylized as MySpace and currently stylized as myspace) is an American social networking service. From 2005 to 2008, it was the largest social networking site in the world, reaching more than 100 million users per month.</p>
              <p>Dave finds self with demi-lord like power… ENTERS ( HTML ) ( CSS )  </p>

            <h4>The Kindling : </h4>
            <img src="https://i.imgur.com/knDpK2Im.png" alt="python"></img><br/>
               <a class="purple-text" href="https://post-hub.herokuapp.com/">docs.python.org</a>
              <h1> Do I have to like “Monty Python’s Flying Circus”?</h1>
              <p>No, but it helps. :)</p>


            <a class="btn-floating pulse grey black-text darken-text-2" href="https://github.com/WareDave" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a> </p>
            
                <a class="waves-effect waves-purple waves-light red btn modal-trigger" href="#modal1">Veiw Dave's Resume</a><br/>

               <a href="./img/DaveClark.pdf" download><i class = "material-icons">picture_as_pdf</i> Download .pdf</a>
                
             

               
                <div id="modal1" class="modal grey darken-4">
                  <div class="modal-content">
                    <h1>WareDave Dev Wizard</h1>
                    <p>David Clark<br/>
                    Full Stack Web Developer |  Westminster, CO(303) 641-6954<br/>
    <a href="mailto:davetheclark87@gmail.com"><img class='spike' src='https://i.imgur.com/yqMMdJe.png'></img> </a>  
                    | davetheclark87@gmail.com | https://www.linkedin.com/in/dave-the-clark/ | <br/>
                        <br/>
                        SKILLS:<br/>
                        Python, SQL, PostgreSQL,  mySQL, JavaScript, jQuery, SASS, Bootstrap, Bulma, MongoDB, Express, Node.js, React, Git<br/>
                        <br/>
                        EXPERIENCE :<br/>
                        Web Developer | General Assembly – Denver, CO					Nov 2019 – Feb 2020<br/>
                        Software Engineering immersive. Achieved 700+ coding hours in 12-week web development immersive.<br/> 

                        Tron Chess <br/>
                            • Tron Themed JavaScript Chess Game<br/>
                            • Tech : JavaScript, CSS, HTML<br/>
                            • 

                        Post-Hub<br/>
                            • Post It Note/Event React Flask App<br/>
                            • Tech : JavaScript, JSON, React, Python,  PostgreSQL<br/>
                            • https://post-hub.herokuapp.com/<br/>
                          
                        Installer | Life Alert Inc. – Denver, Colorado						January 2009-Current <br/>
                        My main responsibility is installing and testing the Life alert system and verifying all  equipment is functioning properly.  I also correct systems that aren’t functioning as  expected as well as assist customers in filling out and returning paperwork to the main  office.  I work with all different kinds of technical equipment from computers, landline as well as cell phones, and fax machines, to the life alert response equipment.
                        QA Tesker CNC Operations | Williams Form Engineering - Golden, Colorado			Jan 2018 - Oct 2019<br/>
                        I was the primary QA and operations for the golden location. I set the Teskers helix and pressure. As well as performed checks on the raw bar and bar that has been run. As well as check and tested the dies. As well as Set programming for operators, And Log all data for review and states, then set times for part by operator by Using the data from logs.<br/>
                        <br/>EDUCATION<br/>
                        General Assembly Software Engineering Immersive | Denver, CO 			 11/2019 – 2/2020<br/>
                        Red Rocks Community College - Associate of Science coursework - 				2016-2017 <br/>
                        Community College Of Aurora - Associate of Science coursework -				2015-2016 <br/>

                    </p>
                  </div>
                  <div class="modal-footer red darken-4">
                    <a href="/" class="modal-close pulse waves-effect waves-green btn-flat">Done</a>
                  </div>
                </div>
            </div>
         </li>
         <li>
            <div class = "collapsible-header red darken-4">
            <i class="fab fa-dev black-text"></i>Collaboration</div>
            <div class = "collapsible-body center-align"><p>
                 <h1>[ Out The Box ]</h1>
                  <img class='balls' src="https://i.imgur.com/engcPUw.jpg" alt="link"></img><br/>
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
            <p>Developed and maintain outheboxshop.com</p>
            <p>Working On :<br/>
            I am currently working on a vendor intake app with new owner Ernesto, and the team at Consign Connect on a Full stack MERN app to using React-PDF, and Bootstrap for style.
 
            </p>
            <h1>[ Soylent Shenanigans ]</h1>
        <img class='balls' src="https://i.imgur.com/s7gantL.jpg" alt="link"></img><br/> 
        <h4 class="center">Follow On<br/>
    <p class='center-align'><a href="https://www.instagram.com/soylent_shenanigans/?hl=en"><img class='jordi center-align' src="https://i.imgur.com/afko6pK.png"   target='blank'></img> </a>  <a href="https://www.facebook.com/SoylentShenanigans/" target='blank'><img class='jordi center-align' src="https://i.imgur.com/J9ikY9T.png" ></img></a> </p>     
    </h4>
       <p>Worked On :<br/>
       Developed and maintain<a href='https://www.soylentshenanigans.com/'>www.soylentshenanigans.com</a></p>
            </div>
           
         </li>
         <li>
            <div class = "collapsible-header red darken-4">
            <i class="fas fa-dragon black-text"></i>Mad Skills</div>
            <div class = "collapsible-body center-align "><p>List Me What You Got </p><br/>
            <img src="https://i.imgur.com/ZU91U03s.png" alt="talking head"></img><br/>
            <i class="fab fa-python"></i>  <i href="https://en.wikipedia.org/wiki/JavaScript" class="fab fa-js-square"></i>  <i class="fab fa-html5"></i>  <i class="fab fa-css3-alt"></i>  <i class="fab fa-node-js"></i>  <i class="fab fa-react"></i>  <i class="fab fa-angular"></i>  <i class="fab fa-bootstrap"></i>  <i class="fab fa-aws"></i>  <a href="https://github.com/WareDave" class="fa fa-github black-text"></a>  <i href="https://company.wizards.com/content/games" class="fab fa-d-and-d"></i><br/>
         <p> JQuery | JSON | SQL | PostgreSQL | MySQL | SQLite | MongoDB<br/>
          Style: SASS |  Bulma  <br/>
          Testing: Postman | VScode | Sublime <br/>
          CLI: Terminal | cmd | Bash 
          OS: <i class="fab fa-apple"></i> | <i class="fab fa-linux"></i> | <i class="fab fa-windows"></i></p><br/> 
          <p> MongoDB<br/>
              <img src="https://i.imgur.com/xApirqjl.jpg" alt="propic1"></img><img src="https://i.imgur.com/ZQu9E6Ol.jpg" alt="sample"></img><img src="https://i.imgur.com/MX8iQirl.jpg" alt='stuff'></img><br/>
              Python Flask<br/>
              <img src="https://i.imgur.com/vtQMEgXl.jpg" alt="davesballs"></img><img src="https://i.imgur.com/2TFR9Fyl.jpg" alt="junk"></img><img src="https://i.imgur.com/rnbmYYKl.jpg" alt="newpic"></img><br/>
              React Nodejs<br/>
              <img src="https://i.imgur.com/676xFrkl.jpg" alt="link"></img><img src="https://i.imgur.com/uztzz0Hl.jpg" alt="link"></img><img src="https://i.imgur.com/QyisWAcl.jpg" alt="link"></img><br/>
               </p>
              SQL<br/> 
              <img src="https://i.imgur.com/uAqW8wYl.jpg" alt="link"></img><img src="https://i.imgur.com/L0dPloXl.jpg" alt="link"></img><img src="https://i.imgur.com/RoYzJX7l.jpg" alt="link"></img><br/>
              For More Spells click Button<br/>
              <a class="btn waves-effect waves-purple pulse grey purple-text darken-text-2" href="https://github.com/WareDave" target="_blank" rel="noopener noreferrer"> wizard stuff</a>
            </div>
         </li>
         
        
        
      </ul>	 
      <p class='center-align'>
      <img class='spike1' src='https://i.imgur.com/ZMpPE4Z.png'></img><img class='spike1' src='https://i.imgur.com/SZJEs9e.png'></img> <img class='spike1' src='https://i.imgur.com/LsOc40a.png'></img><a href="mailto:davetheclark87@gmail.com"><img class='spike1' src='https://i.imgur.com/yqMMdJe.png'></img> </a>  
      </p>
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

export default App;







 