import React from 'react';

const Simpson = ({value}) => {
    return (
        <div>

            <h2>Name: {value.name}</h2>
            <img src={value.img} alt={value.name}/>
            <p>{value.info}</p>

        </div>
    );
};

export default Simpson;