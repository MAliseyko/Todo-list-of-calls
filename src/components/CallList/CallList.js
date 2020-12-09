import React from 'react';
import './CallList.css';

function CallList() {
    return (
        <div className="call-list">
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Phone number</th>
                    <th>Time</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>Name Surname</td>
                    <td>00420 777 888 999</td>
                    <td>9:20</td>
                    <td>delete</td>
                    <td><input type="checkbox"></input></td>
                </tr>
            </table>
            <div className="calls-filters">
                <button>All</button>
                <button>Next</button>
                <button>Finished</button>
            </div>
        </div>
    )
}

export default CallList
