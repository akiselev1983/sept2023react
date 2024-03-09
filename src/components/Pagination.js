import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const Pagination = () => {
    const {next, prev} = useSelector(state => state.episodes)
    const [, setQuery] = useSearchParams({page:'1'})

    const prevPage = ()=>{
        setQuery(prev=>{
            prev.set('page', (+prev.get('page')-1).toString())
            return prev
        })
    }

    const nextPage = ()=>{
        setQuery(prev=>{
            prev.set('page', (+prev.get('page')+1).toString())
            return prev
        })
    }
    return (
        <div>
            <button disabled={!prev} onClick={prevPage}>PREV</button>
            <button disabled={!next} onClick={nextPage}>NEXT</button>

        </div>
    );
};

export default Pagination;