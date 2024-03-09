import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {episodesActions} from "../../store";
import Episode from "./Episode";
import css from './Episodes.module.css'
import Pagination from "../Pagination";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes)
    const [query, ] = useSearchParams({page:'1'})
    const dispatch = useDispatch()
    const page = query.get('page')

    useEffect(() => {
        dispatch(episodesActions.getAllEpisodes({page}))
    }, [page]);

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <Pagination/>
        </div>
    );
};

export default Episodes;