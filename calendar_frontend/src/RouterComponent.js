import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Landing from './Landing'

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/calendar'>
          <App />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterComponent
