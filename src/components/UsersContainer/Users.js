import React from 'react';
import User from "./User";

const Users = ({users}) => {

    return (
        <div>
            <h1>----ALL USERS----</h1>
            {users.map(user=> <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;