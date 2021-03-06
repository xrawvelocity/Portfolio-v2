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
          <div class="contact-form-group">
            <input
              class="contact-form-group__input"
              type="text"
              placeholder=""
              name="name"
              id="name"
              required
            />
            <label class="contact-form-group__label" for="name">
              Name
            </label>
          </div>

          <div class="contact-form-group">
            <input
              class="contact-form-group__input"
              type="email"
              placeholder=""
              name="_replyto"
              id="email"
              required
            />
            <label class="contact-form-group__label" for="email">
              Email
            </label>
          </div>

          <div class="contact-form-group">
            <input
              class="contact-form-group__input"
              type="text"
              placeholder=""
              name="company"
              id="company"
            />
            <label class="contact-form-group__label" for="company">
              Company/Organization
            </label>
          </div>

          <div class="contact-form-group">
            <input
              class="contact-form-group__input"
              name="message"
              placeholder=""
              id="message"
            />
            <label class="contact-form-group__label" for="message">
              Message
            </label>
          </div>
          <button class="contact-form-button" type="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
}
