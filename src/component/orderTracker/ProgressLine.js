import React from 'react'


function ProgressLine(props) {

    const styles = {

        backgroundColor: `${props.color}`,
        height: '5px',
        width: '80px',
        borderRadius: '10px',
        margin:' 0 10px',
    }

    return (
        <div className = "progress-line" style = {styles}>
            
        </div>
    )
}

export default ProgressLine
