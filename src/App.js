import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminSection from "./containers/AdminSection";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/admin" component={AdminSection}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
