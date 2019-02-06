import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
// Redux logging middleware
import { createLogger } from 'redux-logger'
import rootReducer from '../todos/reducers/rootReducer'

// Create the redux logging middleware
const loggerMiddleware = createLogger()

// Configuring the Store. PreloadState is the initial State.
export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,

    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}