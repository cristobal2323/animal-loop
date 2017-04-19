import React from 'react' 
import ReactDOM from 'react-dom' 
import Login from './routes/LoginRoutes'
import Home from './routes/HomeRoutes'
const css = require('../assets/main.scss');

import { BrowserRouter as Router, Route  } from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'
const History = createBrowserHistory()

window.__myapp_container = document.getElementById('app')

ReactDOM.render((
  <Router history={History}>
    <div>
        <Route exact={true} path="/" component={Login}/>
        <Route path="/home" component={Home}/>
    </div>
  </Router>
), window.__myapp_container)