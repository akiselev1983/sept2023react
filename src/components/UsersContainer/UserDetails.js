import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, phone} = userDetails
    const navigate = useNavigate()
    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>USERNAME: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <button onClick={()=>navigate('posts', {state:{userId:id}})}>post of current user</button>
            <hr/>
        </div>
    );
};

export default UserDetails;