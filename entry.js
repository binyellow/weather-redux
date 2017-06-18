import React, {Component} from 'react';
import ReactDom from 'react-dom';
import APP from './src/containers/APP.js';
import reducer from './src/reducers/index.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

var store = createStore(reducer);
ReactDom.render(
  <Provider store={store}>
    <APP/>
  </Provider>, document.getElementById("root"))
