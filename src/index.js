/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import App  from './containers'


// User log
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

// Store
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)


export default class app extends Component {
  
  render() {

    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}


AppRegistry.registerComponent('app', () => app);
