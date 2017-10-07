import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import welcome from './reducers/welcomeReducer.js'

export default combineReducers({
  router: routerReducer,
  counter,
  welcome
})
