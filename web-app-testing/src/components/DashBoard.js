import React from 'react';

const DashBoard = (props) => {
    return (
        <div className ='dashboard'>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
        </div>
    )
}

export default DashBoard;