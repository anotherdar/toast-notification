import React  from 'react'
import { connect } from 'react-redux'
import './Alert.css'
import PropTypes from 'prop-types'

const Alert = ({ alert }) => {
    return (
        alert.length > 0 && (alert.map(({id, type, msg}) => (
            <div key={id} className={`alert ${type} ${id ? 'open' : 'close'}`}>
                <div className="alert__icon">
                    <i className="material-icons">{type}</i>
                </div>
                <div 
                    className="alert__body"
                >
                    {msg}
                </div>
            </div>
        )))
    )
}
Alert.propTpes = {
    alert: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    alert: state.alert
})
export default connect(mapStateToProps, {} )(Alert)
