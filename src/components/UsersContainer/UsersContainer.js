import React, {useEffect, useState} from 'react';
import {apiService} from "../../services/apiService";
import {usersService} from "../../services/usersService";
import UserForm from "./UserForm";
import Users from "./Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UsersContainer;