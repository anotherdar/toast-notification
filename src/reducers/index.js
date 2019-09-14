import {combineReducers} from 'redux'
import counter from './Counter'
import isLogged from './isLogged'
import alertReducer from './alertReducer'

export default combineReducers({
    Counter: counter,
    auth: isLogged,
    alert: alertReducer
})