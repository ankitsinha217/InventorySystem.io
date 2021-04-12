import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from './Cards';
import Add from './Add';

export default function Path() {
  return (
   <Router>
    <div>

        <div>
        <h1 > Inventory</h1>
      <div>ADD Inventory</div>
       
          <div><Link to="/">Cart</Link></div>
          <div><Link to="/add">Add Items</Link></div>
        </div>
 
   
    <Route path="/" exact component={Card} />
    <Route path="/add"  component={Add} />
    <Route path="/home" exact component={Card} />
    </div>
    
</Router>
  );
}

const Update=()=>{
    return(
        <>
        Update here   
        </>
    )
}


