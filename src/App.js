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
    <Router basename="/">
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/accolades" component={Accolades}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
