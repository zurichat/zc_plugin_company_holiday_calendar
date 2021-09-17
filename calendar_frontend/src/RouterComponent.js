import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Landing from './Landing'

const RouterComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/calendar'>
          <App />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default RouterComponent
