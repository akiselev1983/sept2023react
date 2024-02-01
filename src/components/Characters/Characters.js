import React from 'react';
import Character from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            id: 1,
            name:"Rick Sanchez",
            status:"Alive",
            species:"Human",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            created:"2017-11-04T18:48:46.250Z"
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            created: "2017-11-04T18:50:21.651Z"
        },
        {
            id: 3,
            name:"Summer Smith",
            status:"Alive",
            species:"Human",
            gender:"Female",
            image:"https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            created:"2017-11-04T19:09:56.428Z"
        },
        {
            id: 4,
            name:"Beth Smith",
            status:"Alive",
            species:"Human",
            gender:"Female",
            image:"https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            created:"2017-11-04T19:22:43.665Z"
        },
        {
            id: 5,
            name:"Jerry Smith",
            status:"Alive",
            species:"Human",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            created:"2017-11-04T19:26:56.301Z"
        },
        {
            id: 6,
            name:"Abadango Cluster Princess",
            status:"Alive",
            species:"Alien",
            gender:"Female",
            image:"https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            created:"2017-11-04T19:50:28.250Z"
        }
    ]

    return (
        <div>
            {characters.map(value => (<Character value={value} key={value.id}/>))}
        </div>
    );
};

export default Characters;