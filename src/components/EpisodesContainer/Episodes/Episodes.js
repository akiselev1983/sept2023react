import React, {useEffect, useState} from 'react';

import {episodesService} from "../../../services";
import Episode from "../Episode/Episode";
import css from './Episodes.module.css'
import {usePageQuery} from "../../../hooks";

const Episodes = () => {
    const [episodes, setEpisodes] = useState({prev:null, next:null, results:[]})
   const {page, nextPage, prevPage} = usePageQuery()

    useEffect(() => {
        episodesService.getAll(page).then(({data})=> setEpisodes(()=> {
            const {info:{prev, next}, results} = data
            return {
                next, prev, results
            }
            }))
        }, [page]);



    return (
        <div>
            <div className={css.Episodes}>{episodes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <div className={css.button}>
                <button disabled={!episodes.prev} onClick={prevPage}>PREV</button>
                <button disabled={!episodes.next} onClick={nextPage}>NEXT</button>
            </div>
        </div>
    );
};

export default Episodes;