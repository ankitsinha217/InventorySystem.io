import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import Path from './Route';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './login';
import back from "./back3.jpg"

function Signup(){
const [services,setServices]=useState([])
const [name,setName]=useState('');
const [email,setEmailId]=useState('');
const [password,setPassword]=useState('');
const [showSignUp,setShowSignUp]=useState('');

const submitHanlder=()=>{
fetch('http://localhost:9999/signup',{
    method:"POST",
    body:JSON.stringify({name:name,email:email,password:password}),
    headers:{
        "content-Type":"application/json",
    }
}).then((r)=>{
    console.log(r);
    setShowSignUp(true);
}).catch((e)=>{
    console.log("error");
})
}

return(
    <>
    {!showSignUp?
      <div style={{ backgroundImage: `url(${back})` }}>
    <div className="container">
    <form className="form" >
      <center>
          <h1>User Registration
          </h1>
      <div>
       <th>USER NAME </th> <td><input placeholder="Enter User Name" className="name" onChange={(event)=>{setName(event.target.value)}} style={{margin:"10px"}} /></td>
       </div><div>
       <th>EMAIL ID</th>
       <td> <input placeholder="Enter Email Id" className="email" onChange={(event)=>{setEmailId(event.target.value)}} style={{margin:"10px"}}/></td>
       </div><div>
       <th>PASSWORD</th>
       <td> <input placeholder="Enter Password" className="password" onChange={(event)=>{setPassword(event.target.value)}} style={{margin:"10px"}}/></td>
       </div><div>
      <Button onClick={submitHanlder} className="btn btn-primary">Sign Up</Button>
      <Router>
      <Route exact path="/login" component={Login} />
    </Router>
      </div>
      </center>
    </form>
    </div>
    </div>
    :null
    }
   
    


  {showSignUp? <Login/>:null}
 
 

    </>
   

)

}


export default Signup;