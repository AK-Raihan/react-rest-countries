import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const {name, capital, flag, region, timezones, population}=props.country;
    
    return (
        <div className="country">
            <h2>Name:{name}</h2>
            <img src={flag} alt="" />
            <h4>Capital:{capital}</h4>
            <h5>Region:{region}</h5>
            <h5>Population:{population}</h5>

            <h6>Time Zone:{timezones}</h6>
        </div>
    );
};

export default Country;