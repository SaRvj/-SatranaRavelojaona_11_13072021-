import React, { useEffect, useState } from 'react';
import data from '../../Data/data.json';
import axios from 'axios';

export default function Parent(){
    const [logements, getLogements] = useState('');
    const url = 'http://localhost:3000/';

    useEffect(() => {
        getAllLogements();
    }, []);

    const getAllLogements = () => {
        axios.get(`${url}past`)
        .then ((response) => {
            const data = response.data.logements.data;
            getLogements(data);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    return(
        <data logements={data}/>
    ) 
}