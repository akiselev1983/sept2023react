import React from 'react';

const Character = ({character}) => {
    const {id, name, gender, image} = character


    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>Gender: {gender}</div>
            <img src={image} alt={name}/>

        </div>
    );
};

export default Character;