import React, { Component } from "react";
import back from "./back3.jpg"
import { Link } from "react-router-dom";
class Landing extends Component {

  render() {
    return (
       <div style={{ backgroundImage: `url(${back})` }}>
      <div style={{ height: "150vh"  }} className="container valign-wrapper">
        <div className="row">
          <div style={{ marginTop:"100px"  }} className="col s12 center-align">
            <h4>
              <b>Product App,</b>  Welcome !!!
              
            </h4>
            <p className="flow-text grey-text text-darken-1">
              New User? ,Please Register here..!!!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
              <b> <u>SignUp</u></b>
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                <b><u>Log In</u></b>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Landing;