import React from 'react'

import UserList from '../Components/UserList';

const BranchWise = () => {
    const USERS = [
        {
          id: 'f1',
          name: 'IT254-MidSem QP',
          dept: 'IT',
          image:
            'https://cutt.ly/DxzQBdK'
        },
        {
          id: 'f2',
          name: 'IT251 Assignment-2',
          dept: 'IT',
          image:
            'https://cutt.ly/lxzlrta'
        },
        {
            id: 'f3',
            name: 'IT250 Lecture-3',
            dept: 'IT',
            image:
              'https://cutt.ly/Mxzl4BD'
        },
        {
            id: 'f4',
            name: 'IT200 EndSem QP',
            dept: 'IT',
            image:
              'https://cutt.ly/DxzQBdK'
        },
        {
            id: 'f5',
            name: 'IT254 NodeJS Lecture',
            dept: 'IT',
            image:
              'https://cutt.ly/Mxzl4BD'
        },
        {
            id: 'f6',
            name: 'CS292 Assignment-3',
            dept: 'CS',
            image:
              'https://cutt.ly/lxzlrta'
        }
      ];

      return <UserList items={USERS.filter(user => user.dept === "IT")} />;
}

export default BranchWise
