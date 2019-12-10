import React from 'react'
import { NotFoundPage } from 'honeybee-ui'
import { Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const AppTwo = (props) => {
  return (
    <Router history={customHistory}>
      <Route component={NotFoundPage} />
    </Router>
  )
}


export default AppTwo