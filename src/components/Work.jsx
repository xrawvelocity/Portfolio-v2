import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <section className="work">
        <div className="work-title">My Work</div>
        <div className="work-grid">
          <div class="work-grid-card-container" id="projects4">
            <div class="work-grid-card">
              <div class="work-grid-card__side work-grid-card__side--front">
                <div class="work-grid-card__picture work-grid-card__picture--4">
                  &nbsp;
                </div>
                <h4 class="work-grid-card__heading">
                  <span class="work-grid-card__heading-image work-grid-card__heading-image--4"></span>
                  <span class="work-grid-card__heading-span work-grid-card__heading-span--4">
                    fitsocial
                  </span>
                </h4>
                <div class="work-grid-card__details">
                  <ul>
                    <li>
                      React.js{" "}
                      <span class="work-grid-card__details-logo-react"></span>
                    </li>
                    <li>
                      Redux{" "}
                      <span class="work-grid-card__details-logo-redux"></span>
                    </li>
                    <li>
                      Node.js{" "}
                      <span class="work-grid-card__details-logo-node"></span>
                    </li>
                    <li>
                      Express.js{" "}
                      <span class="work-grid-card__details-logo-express"></span>
                    </li>
                    <li>
                      Firebase{" "}
                      <span class="work-grid-card__details-logo-firebase"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="work-grid-card__side work-grid-card__side--back work-grid-card__side--back-4">
                <div class="work-grid-card__cta">
                  <div class="work-grid-card__price-box">
                    <p class="work-grid-card__price-only">
                      Social Media for exercise enthusiasts who want to keep
                      each other accountable
                    </p>
                  </div>
                  <a href="#popup4" id="bookBtn" class="btn btn--white">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="work-grid-card-container" id="projects1">
            <div class="work-grid-card">
              <div class="work-grid-card__side work-grid-card__side--front">
                <div class="work-grid-card__picture work-grid-card__picture--1">
                  &nbsp;
                </div>
                <h4 class="work-grid-card__heading">
                  <span class="work-grid-card__heading-image work-grid-card__heading-image--1"></span>
                  <span class="work-grid-card__heading-span work-grid-card__heading-span--1">
                    Track Trade
                  </span>
                </h4>
                <div class="work-grid-card__details">
                  <ul>
                    <li>
                      React.js{" "}
                      <span class="work-grid-card__details-logo-react"></span>
                    </li>
                    <li>
                      Redux{" "}
                      <span class="work-grid-card__details-logo-redux"></span>
                    </li>
                    <li>
                      Node.js{" "}
                      <span class="work-grid-card__details-logo-node"></span>
                    </li>
                    <li>
                      Express.js{" "}
                      <span class="work-grid-card__details-logo-express"></span>
                    </li>
                    <li>
                      MongoDB{" "}
                      <span class="work-grid-card__details-logo-mongo"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="work-grid-card__side work-grid-card__side--back work-grid-card__side--back-1">
                <div class="work-grid-card__cta">
                  <div class="work-grid-card__price-box">
                    <p class="work-grid-card__price-only">
                      Social media for Foreign Exchange Traders that allows
                      users to visualize their performance using charts.
                    </p>
                  </div>
                  <a href="#popup" id="bookBtn" class="btn btn--white">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="work-grid-card-container" id="projects2">
            <div class="work-grid-card">
              <div class="work-grid-card__side work-grid-card__side--front">
                <div class="work-grid-card__picture work-grid-card__picture--2">
                  &nbsp;
                </div>
                <h4 class="work-grid-card__heading">
                  <span class="work-grid-card__heading-image work-grid-card__heading-image--2"></span>
                  <span class="work-grid-card__heading-span work-grid-card__heading-span--2">
                    Live Style
                  </span>
                </h4>
                <div class="work-grid-card__details">
                  <ul>
                    <li>
                      React.js{" "}
                      <span class="work-grid-card__details-logo-react"></span>
                    </li>
                    <li>
                      Express.js{" "}
                      <span class="work-grid-card__details-logo-express"></span>
                    </li>
                    <li>
                      SASS{" "}
                      <span class="work-grid-card__details-logo-sass"></span>
                    </li>
                    <li>
                      Cheerio{" "}
                      <span class="work-grid-card__details-logo-cheerio"></span>
                    </li>
                    <li>
                      AJAX{" "}
                      <span class="work-grid-card__details-logo-ajax"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="work-grid-card__side work-grid-card__side--back work-grid-card__side--back-2">
                <div class="work-grid-card__cta">
                  <div class="work-grid-card__price-box">
                    <p class="work-grid-card__price-only">
                      Single-page web app built with React. Uses custom Amazon
                      Web Scrape and YouTube API to recommend specific videos
                      and products to the users.
                    </p>
                  </div>
                  <a href="#popup2" id="bookBtn" class="btn btn--white">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
