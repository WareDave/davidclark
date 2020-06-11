import React,  { Component} from 'react';
import Search from '../Search';
import Results from '../Results';
import {Link } from 'react-router-dom'

import M from "materialize-css"; 
const $ = window.$;
M.AutoInit();


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {hover: true});
  });


class SearchContainer extends Component {

    state = {
        giphys: []
    }
    
    retrieveGiphy = async (query) => {
        try {
            const giphs = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=hUX4tF4XTbPw4DvKqDiFBKvUcx0EiAmB&q=${query}`);
            const giphsJson = await giphs.json();
            console.log(giphsJson);
            this.setState({
                giphys: giphsJson.data
            });
        } catch(err) {
            console.log(err);
            return err;
        }
    }
    
    render() {
        return(
        <main>
            <div class="navbar-fixed red">
       
            <nav>
     <div class="nav-wrapper red darken-4">
     <div class="col s12">
     <a  href="https://profiles.generalassemb.ly/profiles/david-clark" class="fab fab fa-old-republic fa-2x black-text"></a>
      <a href="https://giphy.com/" class="brand-logo black-text center">[ Giphy ]</a>
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><Link class="black-text" to="/">Home</Link></li> 
      <a class='dropdown-trigger material-icons' href='/SearchContainer' data-target='dropdown1'>view_list</a>
      </ul>
      <ul id='dropdown1' class='dropdown-content'>
  <li><a class="pink-text" href="https://post-hub.herokuapp.com/">Post-Hub</a></li>
  <li><a class="pink-text" href="https://captains-tools.herokuapp.com/">StarFleet</a></li>
  <li class="divider" tabindex="-1"></li>
  <li><a class="blue-text" href="https://www.linkedin.com/in/dave-the-clark/">LinkedIn</a></li>
  <li><a class="black-text" href="https://github.com/WareDave">GitHub</a></li>
  <li><a class="red-text" href="https://profiles.generalassemb.ly/profiles/david-clark">GA Profile</a></li>
</ul>
      </div>
    </div>
  </nav>
  </div>

            <React.Fragment>
                <Search getQuery={this.retrieveGiphy}/>
                <Results data={this.state.giphys}/>
            </React.Fragment>
        </main>   
        )
    }
}

export default SearchContainer;