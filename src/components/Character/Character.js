import React from 'react';

const Character = ({value}) => {
    const {id,name,status,species,gender,image} = value;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <img src={image} alt={name}/>

        </div>
    );
};

export default Character;