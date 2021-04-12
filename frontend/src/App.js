import './App.css';
import Services from './components/Services';
import login from './components/login';

import SignUp from './components/SignUp';
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

// function App() {
//   return (
//     <div className="App">
    
//       <h1 > Inventory App...</h1>
      
//      <Services/>
//     </div>
//   );
// }

// export default App;

function App() {
     return (
       <>
      
  <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={login} />
            <Route exact path="/register" component={SignUp} />

          </div>
        </Router>
</>
    );
  }

export default App;