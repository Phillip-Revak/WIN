import React, { Component } from 'react';
import Home from './Home'
import Board from './Board'
import Navbars from './Navbars'
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbars />
          <hr />
          <Route name="Home" exact path="/" component={Home} />
          <Route name="Board" path="/board" component={Board} />
          <Route name="About" path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default Routes