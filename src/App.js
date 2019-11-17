import React from 'react';
import './App.css';
import './assets/all.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/homePage';
import Login from './pages/login/login'
import Join from './pages/join/join';
import Dashboard from './pages/dashboard/userDashboard';
import Projects from './pages/projects/projects';
import CreateProject from './pages/createProject/createProject';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={Login} />
            <Route path="/join" exact component={Join} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/createProject" exact component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
