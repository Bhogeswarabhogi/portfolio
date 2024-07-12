import React, { useState } from "react";
import "./Contacts.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'yourformid' with your actual Formspree form ID
    fetch("https://formspree.io/f/yourformid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setFormState({ name: "", email: "", message: "" });
        } else {
          alert("Error submitting the form.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting the form.");
      });
  };

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Me</h1>
      </header>
      <section className="contact-content">
        <p>
          I'd love to hear from you! Whether you have a question, a project
          idea, or just want to say hello, feel free to reach out using the form
          below or any of the other methods listed.
        </p>

        <div className="contact-methods">
          <div className="contact-method">
            <h2>Email</h2>
            <p>
              <a href="mailto:kbhogesh17@gmail">kbhogesh17@gmail.com</a>
            </p>
          </div>

          <div className="contact-method">
            <h2>LinkedIn</h2>
            <p>
              <a
                href="https://www.linkedin.com/in/bhogeswara-kukkala-40b422246/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/bhogeswara-kukkala-40b422246/
              </a>
            </p>
          </div>

          <div className="contact-method">
            <h2>GitHub</h2>
            <p>
              <a
                href="https://github.com/bhogeswarabhogi"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/bhogeswarabhogi
              </a>
            </p>
          </div>

          <div className="contact-method">
            <h2>Twitter</h2>
            <p>
              <a
                href="https://twitter.com/bhogesh__war__bhogi"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Bhogesh__War__Bhogi
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact Form</h2>
          {submitted ? (
            <p>Thank you for your message! I will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
