import {combineReducers} from 'redux'
import counter from './Counter'
import isLogged from './isLogged'

export default combineReducers({
    Counter: counter,
    auth: isLogged
})