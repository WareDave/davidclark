import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageNotFound from './PageNotFound'
import SearchContainer from './SearchContainer'
import App from './App';
// import Preloader from './components/Preloader'
import {Route, Switch} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/> 
               <Route exact path="/SearchContainer" component={SearchContainer}/>
                <Route path="*" component={PageNotFound} /> 
            </Switch>
           
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
