import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import welcome from './reducers/welcomeReducer.js'

export default combineReducers({
  router: routerReducer,
  welcome
})
