import React from 'react';
import './Country.css'
const Country = (props) => {
 console.log(props.country);
 const{name,capital,population,flag,region}=props.country;
  
 return (
  <div className='country'>
   <h1>this is a single country</h1>
   <img src={flag} alt="" />
   <p><small>{region}</small></p>
   <h3>{name}</h3>
   <h4>{capital}</h4>
   <h6>{population}</h6>
  </div>
 );
};

export default Country;