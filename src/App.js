import React from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import { Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <main className="landing">
      <nav className="landing-top">
          <Link to="/" className="landing-top-logo ">VD</Link>
          <div className="landing-top-nav">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/work" render={(props) => <Work {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/contact" render={(props) => <Contact {...props} />} />
      </Switch>
      </main>
    );
  }
}
