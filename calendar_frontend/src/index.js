import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Landing from './Landing'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/calendar'>
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
