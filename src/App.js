import React from 'react' 
import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from 'react';

function App() {
const [state,setState]=useState("");
const [people,setPeople]=useState([]);

const Change=(event)=>{
setState(event.target.value) 
 }

 const click=()=>{
    
Items();
 setState("")
    // setPeople([...people,state])
    // console.log(people)
 }

const Api=()=>{

  axios.get('https://jsonplaceholder.typicode.com/users')
 
  .then((response) => {
 
     //console.log(response.data);
 
     setPeople(response.data);
 
  })
 
  .catch((error) => {
 
    console.log(error);
 
  });
 
  }
 const Items = () => {   
    
    axios.post('https://jsonplaceholder.typicode.com/users',{name:state})
    .then((response) => {
     console.log(response.data);
     
           
            
     })
   .catch((error) => {
    console.log(error);
     });
    
    
     };
     useEffect(()=>{
     Api();
     },[])
    
    return (
    
    <div>
     <div style={{border:"5px solid #171940",backgroundColor:"#171940", color:"white",textAlign:"center",margin:"25px 100px 10px 100px"}}>
    <h1 >Digikull Students</h1>
     </div>
    <div style={{textAlign:"center",marginBottom:"20px"}}>
     <h2>Hello User</h2>
     </div> 
    
    
   <div style={{display:"flex",justifyContent:"center",marginBottom:"50px"}}>
     <input  type={"text"} value={state} onChange={Change} />
     <button onClick={click}>ADD</button>
     </div>
     <div style={{width:"600px",left:"500px",position:"absolute"}}>
     <ListGroup> 
    
 {
     people.map(ele=>(
     <ListGroup.Item style={{marginBottom:"20px",textAlign:"center",border:"2px solid black",fontWeight:"bold"}} key={ele.name}>{ele.name} 
     </ListGroup.Item> 
    ))
}
   </ListGroup> 
    </div>
    </div>
    );
    }
    
    export default App;
    
    
