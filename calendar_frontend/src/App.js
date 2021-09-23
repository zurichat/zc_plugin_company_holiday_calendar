import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Plugin from './Plugin'
import Landing from './Landing'

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/calendar'>
          <Plugin />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterComponent
