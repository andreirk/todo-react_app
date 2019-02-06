import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import TodoContainer from './todos/containers/todoContainer'
import LoginContainer from './todos/containers/loginContainer';
import SignUpContainer from './todos/containers/signUpContainer';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/signUp" component={SignUpContainer} />
        <Route path="/" component={TodoContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
