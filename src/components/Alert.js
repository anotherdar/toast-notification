import React  from 'react'
import { connect } from 'react-redux'
import './Alert.css'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import {removeAlert} from '../actions/alertAction'

const Alert = ({ alert,removeAlert }) => {
    return (
        <TransitionGroup>
            {
                alert.length > 0 && (alert.map(({id, type, msg}) => (
                    <CSSTransition key={id} classNames="item" timeout={500}>
                        <div className={`alert ${type}`}>
                            <div className="alert__icon">
                                <i className="material-icons">{type}</i>
                            </div>
                            <div 
                                className="alert__body"
                            >
                                {msg}
                            </div>
                            <div className="alert__close">
                                <i className="material-icons"
                                    onClick={()=> removeAlert(id)}
                                >close</i>
                            </div>
                        </div>
                    </CSSTransition>
                )))
            }
        </TransitionGroup>
    )
}
Alert.propTpes = {
    alert: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    alert: state.alert
})
export default connect(mapStateToProps, {removeAlert} )(Alert)
