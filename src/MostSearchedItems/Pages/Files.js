import React from 'react';

import UserList from '../Components/UserList';

const Files = props => {
    const USERS = [
        {
          id: 'f1',
          name: 'IT254-MidSem QP',
          image:
            'https://cutt.ly/DxzQBdK'
        },
        {
          id: 'f2',
          name: 'IT251 Assignment-2',
          image:
            'https://cutt.ly/lxzlrta'
        },
        {
            id: 'f3',
            name: 'IT250 Lecture-3',
            image:
              'https://cutt.ly/Mxzl4BD'
        },
        {
            id: 'f4',
            name: 'IT200 EndSem QP',
            image:
              'https://cutt.ly/DxzQBdK'
        },
        {
            id: 'f5',
            name: 'IT254 NodeJS Lecture',
            image:
              'https://cutt.ly/Mxzl4BD'
        },
        {
            id: 'f3',
            name: 'CS292 Assignment-3',
            image:
              'https://cutt.ly/lxzlrta'
        }
      ];

      return <UserList items={USERS} />;
};

export default Files;