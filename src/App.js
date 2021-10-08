import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      {/* <Countries></Countries> */}
    </div>
  );
}
// function Countries(){
//   const[countries,setCountries]=useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//  return(
//    <div>
//      <h2>Travelling around</h2>
//      <h4>Countries available:{countries.length}</h4>
//      {
//        countries.map(country=><Country name={country.name} capital={country.capital}></Country>)
//      }
//    </div>
//  )

// }
// function Country(props){
//   return(
//     <div>
//      <h3>Name:{props.name}</h3>
//      <h6>Capital:{props.capital}</h6>
//     </div>
//   )
// }

export default App;
