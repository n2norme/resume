import React from 'react';
import './css/prefixed/App.css';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import { BrowserRouter as Router,Route ,Switch} from "react-router-dom";
import Navigation from './Components/Navigation';
import Contact from './Components/Pages/Contact';


function App() {

  return (
    <Router>
      <div id="outer-container">
        <Navigation pageWrapId={"page-wrap"} outerContainerId={ "outer-container" }/>

        <div id="page-wrap">
          <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;