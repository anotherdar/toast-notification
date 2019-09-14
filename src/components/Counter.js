import React from 'react'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import {increment, decrement} from '../actions/counterActions'
import { setAlert } from '../actions/alertAction'
//componets
import Button from './Buttons'

const Counter = ({Counter: {counter}, increment, decrement, setAlert}) => {
    const incrementHandler = () => {increment()}
    const decrementHandler = () => {
        if(counter > 0) {
            decrement()
        } else {
            setAlert('warning', 'counter is already 0')
        }
    }
    
    return (
        <div>
            <h1>Counter {counter}</h1>

            <Button 
                body="-" 
                classType="btn-red" 
                clicked={decrementHandler}
            />
            <Button 
                body="+" 
                classType="btn-green"
                clicked={incrementHandler}
            />
        </div>
    )
}
Counter.propTypes = {
    Counter: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    Counter: state.Counter,    
})
export default connect(mapStateToProps, {increment, decrement, setAlert})(Counter)
