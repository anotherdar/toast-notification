import {SET_ALERT, REMOVE_ALERT} from '../actions/actionsType'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT: {
            return [...state, action.payload]
        }  
        case REMOVE_ALERT: {
            console.log(action.payload)
            return state.filter(alert => alert.id !== action.payload)
        }  
        default: {
            return state;
        }
    }
}