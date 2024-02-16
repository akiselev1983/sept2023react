import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const navigate = useNavigate()

    const {id, name} = user
    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <button onClick={()=>navigate(`/users/${id}`)}>USER-DETAILS</button>
            <hr/>
        </div>
    );
};

export default User;