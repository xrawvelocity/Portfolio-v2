import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main className="landing">
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
          <span className="star star-4"></span>

          <div className="shooting-star-container">
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
            <span className="shooting-star"></span>
          </div>

          <nav className="landing-top">
            <div className="landing-top-logo">VD</div>
            <div className="landing-top-nav">
              <div>Work</div>
              <div>About</div>
              <div>Contact</div>
            </div>
          </nav>
          <div className="landing-heading">
            <div className="landing-heading-top">
              <h2 className="landing-heading-top-title">
                Hi! I'm Victor, a freelance full-stack developer based in Miami,
                FL.
              </h2>
              <p className="landing-heading-top-subtitle">
                I craft creative and result-oriented websites for
                forward-thinking brands, like yours.
              </p>
            </div>
            <div className="landing-heading-bottom">
              Learn More <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </main>
        <section className="section-one">TESTING</section>
      </div>
    );
  }
}
