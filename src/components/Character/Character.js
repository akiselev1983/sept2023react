import React from 'react';

const Character = ({value}) => {
    const {id,name,status,species,gender,image,created} = value;

    return (
        <div>
            <div>id {id}</div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <div>{created}</div>
            <img src={image} alt={name}/>
            <hr/>

        </div>
    );
};

export default Character;