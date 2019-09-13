import {SING_IN} from '../actions/actionsType'

export default (state = false, action) => {
    switch(action.type) {
        case SING_IN: {
            return !state
        }
        default: {
            return state
        }
    }
}