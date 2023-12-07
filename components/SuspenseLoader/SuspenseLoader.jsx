import React from 'react';
import './Scss/SuspenseLoader.scss';

const SuspenseLoader = () => {

    const squares = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15},
        {id: 16}
    ]

    return (
        <div className='SuspenseLoader'>
            <div className="shapes">
                {squares.map((c) => (
                    <div key={c.id} className="square" style={{transform: `rotate(${360/squares.length*(squares.indexOf(c) + 1)}deg)`, transformOrigin: `${9}vw`, animationDelay: `${c.id/8}s`}}></div>
                ))}
            </div>
        </div>
    );
};

export default SuspenseLoader;