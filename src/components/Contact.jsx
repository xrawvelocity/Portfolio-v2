/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section class="contact">
        <div class="contact-text">
          <h1 class="contact-text__title">
            Let's build something great together.
          </h1>
          <p class="contact-text__paragraph">
            If you'd like to start a new project, need help with an existing
            project or have any other enquiry, please get in touch.{" "}
          </p>
        </div>

        <div class="contact-links">
          <a
            href="https://linkedin.com/in/victor--fernandez"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-links__linkedin"
          />
          <a
            href="./files/VictorFernandezResume.docx"
            class="contact-links__resume"
            download
          >
            Download Resume
          </a>
          <a
            href="https://github.com/xrawvelocity"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-links__github"
          />
        </div>

        <form
          class="contact-form"
          action="https://formspree.io/xjvojgwr"
          method="POST"
        >
          <div class="contact-form-col-1">
            <div class="contact-form-group">
              <label class="contact-form-group__label" for="name">
                Name
              </label>
              <input
                class="contact-form-group__input"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>

            <div class="contact-form-group">
              <label class="contact-form-group__label" for="email">
                Email
              </label>
              <input
                class="contact-form-group__input"
                type="email"
                name="_replyto"
                id="email"
                required
              />
            </div>

            <div class="contact-form-group">
              <label class="contact-form-group__label" for="company">
                Company/Organization
              </label>
              <input
                class="contact-form-group__input"
                type="text"
                name="company"
                id="company"
              />
            </div>
          </div>

          <div class="contact-form-col-2">
            <div class="contact-form-group">
              <label class="contact-form-group__label" for="message">
                Message
              </label>
              <textarea
                class="contact-form-group__textarea"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button class="contact-form-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}
