import React from 'react';
import Weather from './Weather';


const Country = ({ countriestoshow }) => {
 return(
  <div className="container 
              text-center
              d-flex
              flex-column
              table
              border-secondary
              p-3"
              >
    {countriestoshow.map(country => <h2 key={country.name.common}>{country.name.common}</h2>)}
    <img className="align-center my-auto mx-auto" src={countriestoshow[0].flags.png} alt="countryflag" width="10%" height="10%"></img>
    <h3>Capital city: </h3>
    <p>{countriestoshow.map(country => country.capital)}</p>
    <h3>Area code: </h3>
    <p>{countriestoshow.map(country => country.area)}</p>
    <h3>Languages: </h3>
    <ul className="list-unstyled">{Object.values(countriestoshow[0].languages).map((language) => (<li key={language}>{language}</li>))}</ul>
    <Weather city={countriestoshow[0].capital}/>
    <br/>
    <br/>
    <div className="p-3">
      <h1>This app's source code:</h1>
    </div>
    
    <a href="https://github.com/DavittBarry/Country-Weather-API-search"> GitHub repository</a>
  </div>
 )
};

export default Country