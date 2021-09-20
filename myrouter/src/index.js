import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,BrowserRouter as Router, Switch  } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './User';
import Visit from './Visit';
import NotFound from './NotFound';

const routing =(
  <Router>
   <div>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to = "/user">User</Link></li>
        <li><Link to = "/visit">Visit</Link></li>
        </ul>
      </div>
    <Switch>
    <Route exact path ="/" component = {App}/>
    <Route path ="/user" component = {User}/>
    <Route path ="/visit" component = {Visit}/>
    <Route component = {NotFound}/>
    </Switch>
  </Router>
);
ReactDOM.render(  
    routing,
  document.getElementById('root')
);
