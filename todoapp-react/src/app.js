import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import './semantic/dist/semantic.min.css';
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import Layout from './todos/containers/layout'

import * as TodoActions from './todos/actions/todoActions'

// import AppBar from 'material-ui/AppBar';
const store = configureStore()

// At first dispatch a Get Todos Actions, So we'll recieve the Todos
// fetched from the server at the start of the app
store.dispatch(TodoActions.GetTodos())

const App = (props) => {
  return (
    <Provider store={store} >
      <Layout>
        <Routes />
      </Layout>

    </Provider>
  )
}

export default App;
