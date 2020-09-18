import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Accolades from './Accolades/Accolades';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/accolades" component={Accolades}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
