import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/Apropos/Apropos.js'
import Error from './Pages/Error/Error.js'
import './index.css'
import Accomodations from './Pages/Logements/Logements.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/accomodation">
          <Accomodations />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
