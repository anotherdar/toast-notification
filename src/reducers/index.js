import {combineReducers} from 'redux'
import alertReducer from './alertReducer'

export default combineReducers({
    alert: alertReducer
})