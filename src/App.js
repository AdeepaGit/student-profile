
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/profile';
import Scoursed from './components/courseContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";
  

function App() {
  return (
    

<>
{/* This is the alias of BrowserRouter i.e. Router */}
<Router>
  <Switch>
  {/* This route is for home component
  with exact path "/", in component props
  we passes the imported component
  <Route exact path="/" component={Home} />*/}
    
  {/* This route is for about component
  with exact path "/about", in component
  props we passes the imported component*/}
  <Route path="/course" component={Scoursed} />
    
  {/* This route is for contactus component
  with exact path "/contactus", in
  component props we passes the imported component*/}
  <Route path="/" component={Profile} />
    
  {/* If any route mismatches the upper
  route endpoints then, redirect triggers
  and redirects app to home component with to="/" onClick={() => window.location.reload(false)}*/}
  <Redirect to="/" />
  </Switch>
</Router>
</>

  );
}

export default App;
