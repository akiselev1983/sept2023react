import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../store";
import Character from "./Character";

const Characters = () => {
    const {ids} = useParams()
    const {characters} = useSelector(state => state.characters)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(charactersActions.getAll({ids}))
    }, [ids]);
    console.log(characters);
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;