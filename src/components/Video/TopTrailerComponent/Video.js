import React from 'react'
import './Video.css'

const video = (props) => {
    const backgroundPicture = {
        backgroundImage: `url(${props.image})`
    }
    return (
        <div className="VideoComponent" style={backgroundPicture}>
            {props.children}
        </div>
    )
}

export default video