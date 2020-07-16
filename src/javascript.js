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


class Javascripts extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
          <Header/>
         <p class='center-align'>
<h1 class='center-align' className="header pink-text">[ JavaScript ]</h1> <br/>
<h1 class='center-align'>
<i href="https://en.wikipedia.org/wiki/JavaScript" class="fab fa-js-square center-align"></i>   
            <a class="waves-effect waves-purple pink waves-light btn modal-trigger" href="#modal3">About JavaScript</a>
            </h1>           

                  
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

              <p ><pre><code class="language-javascript">
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

export default Javascripts;