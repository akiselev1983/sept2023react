import React, {useEffect, useState} from 'react';
import axios from "axios";
import flight from "../Flight/Flight";
import Flight from "../Flight/Flight";

const Flights = () => {

    const [flights, setFlights] = useState([])

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/')
            .then(value => value.data)
            .then(value => {
                const newValue = value.filter(item => item.launch_year !== '2020')
                setFlights(newValue)
            })
    }, []);


    return (
        <div>

            {flights.map((flight, index) => (<Flight flight={flight} key={index}/>))}

        </div>
    );
};

export default Flights;