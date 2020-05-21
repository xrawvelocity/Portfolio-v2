import React from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import { Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  state = {
    selected: ""
  }

  setSelected = (what) => {
    this.setState({
      selected: what
    })
  }

  render() {
    return (
      <main className="landing">
      <nav className="landing-top">
          <Link onClick={() => {
            this.setState({
              selected: ""
            })
          }} to="/" className="landing-top-logo ">VD</Link>
          <div className="landing-top-nav">
            <Link onClick={() => {
              this.setState({
                selected: "work"
              })
            }} className={this.state.selected === "work" || window.location.href.includes("work") || this.props.history === "/work" ? "landing-top-nav-link_selected" : "landing-top-nav-link"} to="/work">Work</Link>
            <Link onClick={() => {
              this.setState({
                selected: "about"
              })
            }} className={this.state.selected === "about" || window.location.href.includes("about") || this.props.history === "/about" ? "landing-top-nav-link_selected" : "landing-top-nav-link"} to="/about">About</Link>
            <Link onClick={() => {
              this.setState({
                selected: "contact"
              })
            }} className={this.state.selected === "contact" || window.location.href.includes("contact") || this.props.history === "/contact" ? "landing-top-nav-link_selected" : "landing-top-nav-link"} to="/contact">Contact</Link>
          </div>
        </nav>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} setSelected={this.setSelected} />} />
        <Route exact path="/work" render={(props) => <Work {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/contact" render={(props) => <Contact {...props} />} />
      </Switch>
      </main>
    );
  }
}
