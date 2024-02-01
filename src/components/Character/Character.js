import React from 'react';

const Character = ({value}) => {
    const {id,name,status,species,gender,image,created} = value;

    return (
        <div>
            <h3>id: {id}</h3>
            <h2>Name: {name}</h2>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <div>Created: {created}</div>
            <img src={image} alt={name}/>
            <hr/>

        </div>
    );
};

export default Character;