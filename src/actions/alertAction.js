import {SET_ALERT, REMOVE_ALERT} from './actionsType'
import uuid from 'uuid'

export const setAlert = (type, msg) => dispatch => {
    const id = uuid.v4()
    dispatch ({
        type: SET_ALERT,
        payload: {
            id,
            msg,
            type
        }
    })
    setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: id}), 3000 )
}
