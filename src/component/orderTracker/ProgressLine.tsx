import React from 'react'

interface ProgressLineProps{
    color: string
}

function ProgressLine(props : ProgressLineProps) {

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
