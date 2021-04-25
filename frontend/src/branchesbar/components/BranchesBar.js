import React from 'react'
import BranchList from './BranchList';

const DUMMY_BRANCHES = [{
    id: 'it',
    name: 'Information Technology'
},
{
    id: 'cse',
    name: 'Computer Science'
},
{
    id: 'me',
    name: 'Mechanical'
},
{
    id: 'ece',
    name: 'ECE'
},
{
    id: 'eee',
    name: 'EEE'
},
{
    id: 'ce',
    name: 'Chemical'
},
{
    id: 'ch',
    name: 'Chemistry'
},
{
    id: 'ph',
    name: 'Physics'
},
{
    id: 'mn',
    name: 'Mining'
}];

const BranchesBar = () => {
    return (
        <BranchList items={DUMMY_BRANCHES} />
    )
}

export default BranchesBar
