import React, {useEffect, useState} from 'react';
import {authService, carService} from "../../services";
import Car from "./Car";
import {useAppContext} from "../../hooks";
import {useNavigate, useSearchParams} from "react-router-dom";

const Cars = () => {

    const [cars, setCars] = useState([])
    const [query, setQuery] = useSearchParams({page:'1'})
    const [prevNext, setPrevNext] = useState({prev:null, next:null})
    const navigate = useNavigate()

    const {trigger} = useAppContext()

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data})=> {
            setCars(data.items)
            setPrevNext({prev:data.prev, next: data.next})
        }).catch(()=>{
            authService.deleteToken()
            navigate('/login')
        })
    }, [trigger, navigate, query]);
    const prev = ()=>{
        setQuery(prev=>{
            prev.set('page', (+prev.get('page')-1).toString())
            return prev
        })
    }
    const next =()=>{
        setQuery(prev=>{
            prev.set('page', (+prev.get('page')+1).toString())
            return prev
        })
    }

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>PREV</button>
            <button disabled={!prevNext.next} onClick={next}>NEXT</button>
        </div>
    );
};

export default Cars;