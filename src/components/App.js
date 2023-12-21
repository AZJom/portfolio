import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import GitHub from './Repo';
import './styles/App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/github" component={GitHub} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
