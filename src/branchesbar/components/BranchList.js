import React from 'react';

import BranchItem from './BranchItem';
import './BranchList.css';

const BranchList = (props) => {

    return (
        <React.Fragment>
            <div className="branches-bar">
                <div className="branch-list__header">
                    <p>Branches</p>
                </div>
                <ul className="branch-list__content">
                    {props.items.map((branch) => <BranchItem key={branch.id} id={branch.id} name={branch.name} />)}
                </ul>
            </div>
        </React.Fragment>
    )
};

export default BranchList
