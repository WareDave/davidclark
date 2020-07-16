import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import './App.css'
import Header from './header';
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


class Python extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
   
    return(
      
      <main>
         <Header/>
         <p>
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

export default Python;