import React, {useEffect, useState} from 'react';
import axios from "axios";
import flight from "../Flight/Flight";
import Flight from "../Flight/Flight";
import {flightService} from "../../../services/flightService";

const Flights = () => {

    const [flights, setFlights] = useState([])

    useEffect(() => {
        flightService.getAll().then(({data}) => {
            console.log(data)
            const newValue = data.filter(item => item.launch_year !== '2020')
                setFlights(newValue)})

    }, []);


    return (
        <div>

            {flights.map((flight, index) => (<Flight flight={flight} key={index}/>))}

        </div>
    );
};

export default Flights;