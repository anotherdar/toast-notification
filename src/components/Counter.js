import React from 'react'
import PropTypes from 'prop-types'
//redux
import { connect } from 'react-redux'
import { setAlert } from '../actions/alertAction'
//componets
import Button from './Buttons'

const Counter = ({setAlert}) => {
    const erroAlert = () => setAlert('error', 'ups something went wrong')
    const warinigAlert = () => setAlert('warning', 'runnig out of money')       
    const succesAlert = () => setAlert('check_circle', 'operation complete') 
    const infoAlert = () => setAlert('info', 'you are awesome')   
    return (
        <div>
            <h1>Toast notification react js</h1>

            <Button 
                body="error" 
                classType="btn-red" 
                clicked={erroAlert}
            />
            <Button 
                body="warning" 
                classType="btn-orange"
                clicked={warinigAlert}
            />
            <Button 
                body="Succes"
                classType="btn-green"
                clicked={succesAlert}
            />
            <Button 
                body="info"
                classType="btn-blue"
                clicked={infoAlert}
            />
        </div>
    )
}
Counter.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, {setAlert})(Counter)
