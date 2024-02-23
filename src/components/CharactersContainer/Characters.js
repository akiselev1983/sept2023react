import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {charactersService} from "../../services";
import Character from "./Character";
import {useAppContext} from "../../hoc";

const Characters = () => {
    const {ids} = useParams()
    const [characters, setCharacters] = useState([])
    const  navigate = useNavigate()
    const [, setName] = useAppContext()

    useEffect(() => {
        charactersService.getAllIds(ids).then(({data})=>setCharacters(data))

    }, [ids]);

    const back = ()=>{
        navigate(-1)
        setName(null)
    }

    return (
        <div>
            <button onClick={back}>BACK</button>
            {characters.map(character=><Character character={character} key={character.id}/>)}
        </div>
    );
};

export default Characters;