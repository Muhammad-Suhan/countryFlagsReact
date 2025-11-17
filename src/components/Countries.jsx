import React, { useEffect, useState } from 'react';
import Country from './country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/independent?status=true')
        .then(res => res.json())
        .then(data=> setCountries(data))
    },[])
    
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Countries: {countries.length}</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
            {
                countries.map(country => <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;