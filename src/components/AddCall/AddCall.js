import React from 'react';
import './AddCall.css'

function AddCall() {
    return (
        <div className="add-call">
            <h3>Add call</h3>
            <div className="add-call__details">
                <input className="add-call__info" placeholder="Name"></input>
                <input className="add-call__info" placeholder="Phone number"></input>
                <input className="add-call__info" placeholder="Time"></input>
                <div>
                    <span>Add</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default AddCall
