import React from 'react'

import './BranchItem.css';

const BranchItem = (props) => {

    return (
        <li className="branch-item">
            <p>{props.name}</p>
        </li>
    )
}

export default BranchItem
