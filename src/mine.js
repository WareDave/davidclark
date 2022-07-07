import React, { Component, Col, Container, Row } from 'react'
import {Link} from 'react-router-dom'
import M from "materialize-css"; 
import Header from './header'
import './mine.css'
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






class Mine extends Component {
 
  componentDidMount() {
    const elem = document.querySelector('.carousel');
    const instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });


      var suit = '♣♦♥♠'.split('');
var number = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',');
var deck=[];
var turn=0;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//Deal the Cars
function deal(){
	var t=0;
	do {
		//remove last card from deck
		var card = deck.splice(-1,1).toString();
    
    //remove first character and then assign number values for cards J=11,Q=12,K=13,A=14
    var cardval = card.substr(1).replace("J","11").replace("Q","12").replace("K","13").replace("A","14");
    
   
    //consider using document.querySelectorAll('.players')[t]
    document.querySelector('#player'+t).innerHTML+='<div class="card" data-cardvalue="'+cardval+'" data-player="'+t+'" rel="'+card+'" onclick="toss(this)"></div>';
	    t=Number(!t); //flip from 0 to 1 since there are 2 players
	}
	while (deck.length > 0);	
}

function toss (card){
  //only allow this to run if its the right players turn
  var check = "player"+turn;
  
  if(document.querySelectorAll("#middle .card").length<2 && card.parentElement.id==check){
    var fragment = document.createDocumentFragment();
    fragment.appendChild(card);
    card.innerHTML=card.getAttribute("rel");
    
    document.getElementById("middle").appendChild(fragment);     
    turn=Number(!turn); 
    //now need to flip the cards, show what they are, calculate who won and track score accordingly!
    setTimeout(function(){ 

      if(document.querySelectorAll("#middle .card").length==2){

        var c0=Number(document.querySelectorAll("#middle .card")[0].dataset.cardvalue);
        var c1=Number(document.querySelectorAll("#middle .card")[1].dataset.cardvalue);

        //first check if its equal
        if(c0==c1){
          //TIE gives everyone a point instead of keeping them and letting winner take all!
          document.querySelector("#player0_score span").innerHTML++;
          document.querySelector("#player1_score span").innerHTML++;
          
        } else {
          if(c0>c1){
            document.querySelector("#player0_score span").innerHTML++; //cool how ++ works on a stringbut += does not
          } else {
            document.querySelector("#player1_score span").innerHTML++;
          }
        }

        document.querySelectorAll("#middle .card").forEach(e => e.parentNode.removeChild(e)); //remove cards

      }
    }, 2000);
    
  }
}

//Build the deck
suit.forEach(function(s){
  number.forEach(function(n){
    deck.push(s+''+n);
  });
});

//shuffle deck
shuffle(deck);

deal();
     

     
      
    
  }

  

  

 
  render() {
   
    return(
      
      <main>
          <Header/>
          <div id="player0_score"><label>Player 1 Score: </label><span>0</span></div>
                <div id="player1_score"><label>Player 2 Score: </label><span>0</span></div>
                   <section id="player0"></section>
                   <section id="middle"></section>
                   <section id="player1"></section>





  
      </main>
     
    )
  }
}

export default Mine;