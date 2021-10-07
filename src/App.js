import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const style={
    color:'blue',
     backgroundColor: 'green',
     paddingLeft:'30px'
  }
  return (
    <div className="App">
      <Blog heading='Good'author='John'></Blog>
  <Blog heading='Better'author='Rony'></Blog>
  <Blog heading='Best'author='Kelly'></Blog>
  <Mobile></Mobile>
  <LoadData></LoadData>
      <div>
        <article className='blog'>
          I am learning react and so far I having so much fun in it.
          <h2 style={style}>You should try it</h2>
          <p style={{color:'white'}}>What if you fail sometimes?? Trying is the main thing</p>
        </article>
      </div>
    </div>
  );
}


function Blog(props){
  return(
    <div>
      <p>You are doing it {props.heading}</p>
      <p>Remember the name {props.author}</p>
    </div>
  )
}
function Mobile(){
  const[count,setCount]=useState(100);
  const handleButton=(e)=>setCount(count-10);
  if(count===0){
    <h3>'no more change'</h3>
  }
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={handleButton}>Battery down</button>
    </div>
  )
}
function LoadData(){
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  return(
    <div>
      {
        data.map(singleData=><Data title={singleData.title} id={singleData.userId}></Data>)
      }

    </div>
  )
}
function Data(props){
  return(
    <div>
      <h1>{props.id}</h1>
    <h3>{props.title}</h3>
    </div>
  )
}
export default App;
