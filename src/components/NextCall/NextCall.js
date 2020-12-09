import React from 'react';
import './NextCall.css';

function NextCall() {
    return (
        <div className="next-call">
            <h3>Next call</h3>
            <div className="next-call__details">
                <span className="next-call__info">Name Surname</span>
                <span className="next-call__info">00420 222 333 444</span>
                <span className="next-call__info">12:40</span>
            </div>
        </div>
    )
}

export default NextCall
