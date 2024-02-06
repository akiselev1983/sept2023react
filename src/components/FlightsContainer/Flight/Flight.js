import React from 'react';


const Flight = ({flight}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = flight
    return (
        <div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <img src={mission_patch_small} alt={flight.mission_name}/>
            <hr/>

        </div>
    );
};

export default Flight;