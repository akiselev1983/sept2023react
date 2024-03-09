import React from 'react';
import css from './Episodes.module.css'
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const navigate = useNavigate()
    const {id, name, episode:chapter, characters} = episode

    const toCharacters=()=>{
        const ids = characters.map(chapter=>chapter.split('/').slice(-1)[0]).join(',')
        console.log(ids);
        navigate(`/characters/${ids}`)

    }

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Episode: {chapter}</div>
        </div>
    );
};

export default Episode;