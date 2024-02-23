import React from 'react';

const Character = ({character}) => {
    const {id, name, image} = character

    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <img src={image} alt={name}></img>

        </div>
    );
};

export default Character;