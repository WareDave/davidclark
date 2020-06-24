import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
         
        <div class="navbar-fixed red darken-4">
       
         <nav>
         
    <div class="nav-wrapper red darken-4">
      <a href="https://www.linkedin.com/in/dave-the-clark/" class="brand-logo center black-text">[ DaveHome ]</a>
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
                  10215 Washington Street, Thornton, Colorado 80229 | Phone: 720-287-2082<br/> <a href="https://www.instagram.com/outthebox303/" class="fa fa-instagram"></a><a href="https://www.youtube.com/channel/UCDDgyvtmOxFyeLCc9DTNLSA" class="fa fa-youtube"></a><a href="https://www.facebook.com/outthebox303/
                  " class="fa fa-facebook"></a>
            </p>
            <p>Working On :<br/>
               Full stack app with owner and entrepreneur Ernesto. Stack originally set up to be a MERN app. Refactoing for a Python flask back end for larger expansion.
               Using React-pdf, React Hooks, react-signature-canvas, and form inputs to render and download data. 
            </p>
            <h1>[ Soylent Shenanigans ]</h1>
        <img class='balls' src="https://i.imgur.com/s7gantL.jpg" alt="link"></img><br/> 
       <a class="purple-text darken-text-2" href="https://www.instagram.com/soylent_shenanigans/?hl=en" target="_blank" rel="noopener noreferrer">Follow Soylent Shenanigans<br/><a href="https://www.instagram.com/soylent_shenanigans/?hl=en" class="fa fa-instagram"></a></a> <a href="https://www.facebook.com/SoylentShenanigans/" class="fa fa-facebook"></a><br/>
       <p>Worked On :<br/>
        <a href='https://www.soylentshenanigans.com/'>www.soylentshenanigans.com</a></p>
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
         <li>
            <div class = "collapsible-header red darken-4">
            <i class="fas fa-hat-wizard black-text"></i>Projects & Apps</div>
            <div class = "collapsible-body center-align "><p><h1 className="header pink-text">[ WareDave Projects ]</h1><br/>
           
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
            <h1>[ Soylent Shenanigans ]</h1>
        <img class='balls' src="https://i.imgur.com/s7gantL.jpg" alt="link"></img><br/> 
       <a class="purple-text darken-text-2" href="https://www.instagram.com/soylent_shenanigans/?hl=en" target="_blank" rel="noopener noreferrer">Follow Soylent Shenanigans<br/><a href="https://www.instagram.com/soylent_shenanigans/?hl=en" class="fa fa-instagram"></a></a> <a href="https://www.facebook.com/SoylentShenanigans/" class="fa fa-facebook"></a><br/>
       <p>Worked On :<br/>
        <a href='https://www.soylentshenanigans.com/'>www.soylentshenanigans.com</a></p>
            </div>
         </li>
         <li>
            <div class = "collapsible-header red darken-4">
            <i href="https://en.wikipedia.org/wiki/JavaScript" class="fab fa-js-square black-text"></i>JavaScript</div>
            <div class = "collapsible-body"><p>
<h1 className="header pink-text">[ JavaScript ]</h1> <br/>
<i href="https://en.wikipedia.org/wiki/JavaScript" class="fab fa-js-square"></i>   
            <a class="waves-effect waves-purple pink waves-light btn modal-trigger" href="#modal3">About JavaScript</a>
           

                  
              <div id="modal3" class="modal grey darken-4">
                    <div class="modal-content">
                        <h1>What's It Good For</h1>
                            <p> JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

                                Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[8] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,[9] and all major web browsers have a dedicated JavaScript engine to execute it.

                                As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.

                                JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.

                                Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.<br/>
                                <a class="btn waves-effect green black-text darken-text-2" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">Javascript Wikipedia</a><br/>
                                </p>

                          </div>
                          <div class="modal-footer red darken-4">
                        <a href="/" class="modal-close waves-effect waves-green btn-floating pulse">done</a>
                    </div>
              </div>           
            </p>

              <p><pre><code class="language-javascript">
                          Data Types:
                                      undefined : "undefined"<br/>
                                      Boolean : "boolean"<br/>
                                      Number : "number"<br/>
                                      String : "string"<br/>
                                      BigInt : "bigint"<br/>
                                      Symbol : "symbol"<br/><br/>
                                      Basic syntax:<br/>
                                     
                                      </code></pre> 
                                      <pre><code class="language-javascript">
                                      Looping from 1 to 100 print out the following<br/>
                                      // If the number is divisible by 3, log X foo<br/>
                                      // if the number is divisible by 5, log X bar<br/>
                                      // If the number is divisible by 15, log X foobar<br/>
                                      // Only one output per number<br/>
                                      // Expected output:<br/>
                                      //<br/>
                                      // 1<br/>
                                      // 2<br/>
                                      // 3 foo<br/>
                                      // 4<br/>
                                      // 5 bar
                                      // 6 foo<br/>
                                      // ...<br/>
                                      // 15 foobar<br/>
                                      // ...<br/>
                                      // 100 bar 
                                      </code></pre>                                   
                                      </p>
                                      
                                  <img src="https://i.imgur.com/84pV9CHm.jpg" alt="link"></img><br/><br/>
                                  <pre><code class="language-javascript">
                                  <p>
                                  const a = 4;<br/> 
                                  const b = 53;<br/> 
                                  const c = 57;<br/> 
                                  const d = 16;<br/> 
                                  const e = 'Dave';<br/> 
                                  const f = false;<br/> 

                              
                                  'Dave' = 'Sux'<br/> 
                                  a + b == c<br/> 
                                  a * a == b<br/> 
                                  e === 'Sux'<br/> 
                                  42 == '42'<br/> 
                                  </p>

   </code></pre>
   <pre><code class="language-javascript">
                                 
                                  let g = b + c;
                                  

<p></p>
{/* for (let i = 1; i < 99; i++) {
	console.log(i);
} */}
                                   </code></pre>
                                    


          </div>
         </li>
         <li>
            <div class = "collapsible-header red darken-4">
            <i class="fab fa-python black-text"></i>Python</div>
            <div class = "collapsible-body"><p>
                  <h1 className="header pink-text center-align">[ Python ]</h1><br/>
                  
              <p className="center-align">
                  <a class="waves-effect waves-purple pink waves-light btn modal-trigger" href="#modal2">About Python Click Me</a>
              </p>
                  
                  <div id="modal2" class="modal grey darken-4">
                    <div class="modal-content">
                      <h1>Pi What?</h1>
                      <p>Python is a general purpose and high level programming language. You can use Python for developing desktop GUI applications, websites and web applications. Also, Python, as a high level programming language, allows you to focus on core functionality of the application by taking care of common programming tasks.<br/>-medium.com </p>
                    </div>
                    <div class="modal-footer red darken-4">
                      <a href="spam" class="modal-close waves-effect waves-green btn-floating pulse">done</a>
                    </div>
                  </div>
            <div className="center-align" >
             <br/><p> for documents click</p> 
             <a href="https://docs.python.org/3/" class="fab fa-python yellow-text center-align">Doc</a>
             <p className="center-align">Basic of Python Code</p>
             </div>
             <pre><code>
             the basics: <br/>
             Data types:<br/>
             Text Type:	str<br/>
              Numeric Types:	int, float, complex<br/>
              Sequence Types:	list, tuple, range<br/>
              Mapping Type:	dict<br/>
              Set Types:	set, frozenset<br/>
              Boolean Type:	bool<br/>
              Binary Types:	bytes, bytearray, memoryview<br/><br/>
              Variables:<br/>
              dave = 0<br/>
              sux = 5<br/>
              print(dave)<br/>
              print(sux)<br/><br/>
              Numbers:<br/>
              int<br/>
              float<br/>
              complex<br/>
              dave = 42<br/>
              still = 4.2<br/>
              sux = 4two<br/><br/>
              </code></pre>
              <p className="center-align">basic Syntax and loops:</p><br/>
             <pre><code class="Python">player_name =  input("Ready to boogie what's your name? > ")<br/>
print("ready for this {}".format(player_name) + 'let us Boogie')<br/>


States=list(state_capitals.keys())# sets list with key<br/>
print ('Your bitch ass still needs to learn US States and Capitals. 50 mf rounds. Enter exit to punk out.')<br/>
point=0 <br/>
for i in range(5): # sets up rounds<br/>
    state=random.choice(States) <br/>
    capital = state_capitals[state]<br/>
    user_guess = input('what is the capital of %s?'%state + 'your going to get it wrong {}. '.format(player_name))<br/>
    if user_guess.lower() == 'exit': # lets you to exit <br/>
        break<br/>
    elif user_guess.title() == capital:<br/>
        point+=1<br/>
        print('Want A Cookie! point to player %d' %point)<br/>
    else:<br/>
        print('You suck, The capital of {} is {}.'.format(state,capital))<br/>
print('We are done here all you got right was %d, You are dead inside' %point) # end game<br/>
restart = input("Do you want to restart the game {}? Yes or No ".format(player_name))<br/>
if restart == 'yes':<br/>
    main()<br/>
    </code></pre> 
       <p className="center-align"> For Fun an Games:</p><br/>
        <pre class="line-numbers"><code class="language-python"> 
        import sys<br/>
import random<br/><br/>

ans = True<br/><br/>

while ans:<br/>
    question = input("Ask the WareDave a question: (press enter to quit) ")<br/><br/>
    
    answers = random.randint(1,25)<br/><br/>
    
    if question == "":<br/><br/>
        sys.exit()<br/>
    
    elif answers == 1:<br/><br/>
        print ("f!@# you guys, I'm going home")<br/><br/>
    
    elif answers == 2:<br/><br/>
        print ("we need to get the hell out of dodge")<br/><br/>
    
    elif answers == 3:<br/><br/>
        print ("if it's going to be that kind of party")
        <br/><br/>
    elif answers == 4:<br/><br/>
        print ("fuck off")<br/><br/>
    
    elif answers == 5:<br/><br/>
        print ("your mother had a peg leg with a kick stand")<br/><br/>
    
    elif answers == 6:<br/><br/>
        print ("han shot first")
    
    elif answers == 7:<br/><br/>
        print ("doom,doom,doom. Time to sing the doom song.")<br/><br/>
    
    elif answers == 8:<br/><br/>
        print ("Good, Bad, im the guy with the gun.")<br/><br/>
		
	elif answers == 9:<br/><br/>
		print ("time to start hooking")
		<br/><br/>
	elif answers == 10:<br/><br/>
		print ("Batman")<br/><br/>
		
	elif answers == 11:<br/><br/>
		print ("Dick, as in you are a.")<br/><br/>
		
	elif answers == 12:<br/><br/>
		print ("balls")<br/><br/>
		
	elif answers == 13:<br/><br/>
		print ("your face hangs like sleaves of wizard")<br/><br/>
		
	elif answers == 14:<br/><br/>
		print ("you are sick. why would you ask that?")<br/><br/>
		
	elif answers == 15:<br/><br/>
		print ("you are alright guy")<br/><br/>
		
	elif answers == 16:<br/><br/>
		print ("i donno, maybe get a cat.")<br/><br/>
		
	elif answers == 17:	<br/><br/>
		print ("quit your day job")<br/><br/>
	
	elif answers == 18:<br/><br/>
	    print ("you will die alone")<br/><br/>
		
	elif answers == 19:<br/><br/>
		print ("you made it move, then you lost it. put the bag back on")<br/><br/>
		
	elif answers == 20:<br/><br/>
		print ("try getting him drunk, he may not care that your ugly.")<br/><br/>
		
	elif answers == 21:<br/><br/>
		print ("spam, spam eggs and spam")<br/><br/>
		
	elif answers == 22:<br/><br/>
		print ("you mother was a hampster")<br/><br/>
		
	elif answers == 23:<br/><br/>
		print ("no, you smell like candy")<br/><br/>
		
	elif answers == 24:<br/><br/>
		print ("try the truck stop, you may have better luck.")<br/><br/>
		
	elif answers == 25: <br/><br/>
		print ("not metal.")<br/><br/>
          </code></pre>   
            </p>
            or get hardcore and used it with frameworks like flask and add postgresql or sqlite as a back end for web apps or apis<br/>
            <img src="https://i.imgur.com/rt2jdMdl.jpg" alt="link"></img><img src="https://i.imgur.com/rt2jdMdl.jpg" alt="link"></img><br/> 
            <img src="https://i.imgur.com/NGXlF6Nl.jpg" alt="link"></img><img src="https://i.imgur.com/NGXlF6Nl.jpg" alt="link"></img><br/> 
            </div>
         </li>
         
       
      </ul>	 
      
      {/* <Route
            exact path="/posts"
            render={(props) => 
              <PostContainer {...props}
              />
            }
          /> */}
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







 