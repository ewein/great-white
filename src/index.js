import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from './toolbox/theme.js'
import './toolbox/theme.css'

import 'sanitize.css/sanitize.css'
import './style/stylesheet.scss'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
