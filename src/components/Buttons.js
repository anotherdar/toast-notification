import React from 'react'
import './Buttons.css'
const Buttons = ({classType, clicked, body}) => {

    return (
        <button 
            className={`btn ${classType}`}
            onClick={clicked}
        >
            {body}
        </button>
    )
}

export default Buttons
