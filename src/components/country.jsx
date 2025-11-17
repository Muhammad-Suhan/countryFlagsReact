import React from 'react';

const Country = ({country}) => {
    console.log(country);
    const {name, capital, region, subregion, population, flags} = country;
    return (
        <div className='border-2 border-green-500 m-4 p-4 rounded-lg bg-green-100 text-black flex flex-col justify-around'>
            <div>
                <img src={flags.png? flags.png: flags.svg? flags.svg: flags.alt} alt="" />
            </div>
            <h2 className="text-2xl">Name: {name.common? name.common : name.official}</h2>
            <div className='text-gray-700 text-sm'>
            <p>Region: {region? region: subregion}</p>
            <p>Capital: {capital[0]}</p>
            <p>Population: {population}</p>
            </div>
        </div>
    );
};

export default Country;