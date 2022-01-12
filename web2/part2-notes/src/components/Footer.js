import React from 'react'


const Footer = () => {
    const footerStyles = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    return (
        <div style={footerStyles}>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki</em>
        </div>
    )
}

export default Footer