import React from 'react';

const Display = (props) => {
    return (
        <div>
            <div className='strike'>Strikes: {props.strikes}</div>
            <div className='ball'>Balls: {props.balls}</div>
        </div>
    )
}

export default Display;