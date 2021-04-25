import React from 'react';

import UserItem from './UserItem';
import Card from '../../Shared/Components/UIElements/Card';
import './UserList.css';

const UserList = props => {
    if (props.items.length === 0) {
        return (
          <div className="center">
            <Card>
              <h2>No users found.</h2>
            </Card>
          </div>
        );
      }
    
      return (
        <div className="most-searched-bar">
          <ul className="users-list">
            {props.items.map(user => (
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                dept={user.dept}
              />
            ))}
          </ul>
        </div>
      );
};

export default UserList;