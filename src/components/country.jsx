import React, { useState } from 'react';

const Country = ({country}) => {
    const {name, capital, region, subregion, population, flags, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);
    }
    return (
        <div className='border-2 border-green-500 m-4 p-4 rounded-lg bg-green-100 text-black flex flex-col justify-around'>
            <div>
                <img src={flags.png? flags.png: flags.svg? flags.svg: flags.alt} alt="" />
            </div>
            <h2 className="text-2xl">Name: {name.common? name.common : name.official}</h2>
            <div className='text-gray-700 text-sm'>
            <p className='border p-2 font-bold text-center mt-2 bg-green-300'>Code: {cca3}</p>
            <p>Region: {region? region: subregion}</p>
            <p>Capital: {capital[0]}</p>
            <p>Population: {population}</p>
            <button onClick={()=> handleVisited()} className='btn btn-success text-white'>Visited</button>
            {visited && <div class="bg-purple-600 text-white py-1 text-center rounded-full mt-2 text-xs">I have visited this country</div>}
            </div>
        </div>
    );
};

export default Country;