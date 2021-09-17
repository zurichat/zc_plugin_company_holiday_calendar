import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Landing from './Landing'

const RouterComponent = () => {
  return (
    <Router>
      
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/calendar'>
          <App />
        </Route>
      
    </Router>
  )
}

export default RouterComponent
