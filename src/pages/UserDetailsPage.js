import React, {useEffect, useState} from 'react';
import UserDetails from "../components/UsersContainer/UserDetails";
import {Outlet, useParams} from "react-router-dom";
import {usersService} from "../services/UsersService";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        usersService.getById(id).then(({data})=> setUserDetails(data))
    }, [id]);


    return (
        <div>
            <h1>----USER-DETAILS-PAGE----</h1>

            {userDetails&&<UserDetails userDetails={userDetails}/>}
            <Outlet/>


            <hr/>
        </div>
    );
};

export default UserDetailsPage;