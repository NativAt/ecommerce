import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import store, { history } from './store'

import App from './containers/App/index'
import Search from './containers/Search/Search'

import 'sanitize.css/sanitize.css'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact  path="/search" component={Search} />
        <Route path="/home" component={App} />
      </div>  
    </ConnectedRouter>
  </Provider>,
  target
)
