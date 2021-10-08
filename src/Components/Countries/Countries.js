import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
 const[countries,setCountries]=useState([]);
 useEffect( ()=>{
  fetch('https://api.countrylayer.com/v2/')
  .then(res=>res.json())
  .then(data=>setCountries(data))
 },[])
 return (
  <div className='container'>
   {
    countries.map(country=><Country 
     key={country.capital}
     country={country}></Country>)
   }
    
  </div>
 );
};

export default Countries;