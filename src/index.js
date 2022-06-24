import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageNotFound from './PageNotFound'
import SearchContainer from './SearchContainer'
import App from './App';
import Python from './python'
import Javascripts from './javascript'
import Myapps from './myapps'
import Contact from './contactme'
import Dice from './dice'
import Mtg from './mtg'
import Ttt from './ttt';
import {Route, Switch} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
    
            <Switch>
                <Route exact path="/" component={App}/> 
                <Route exact path='/TicTacToe' component={Ttt}></Route>
               <Route exact path="/SearchContainer" component={SearchContainer}/>
               <Route exact path="/spam&eggs" component={Python}/>
               <Route exact path="/JS" component={Javascripts}/>
               <Route exact path="/MyApps" component={Myapps}/> 
               <Route exact path="/contact" component={Contact}/>
               <Route exact path='/dice' component={Dice}/>
               <Route exact path='/mtg' component={Mtg} />
                <Route path="*" component={PageNotFound} /> 
            </Switch>
           
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
