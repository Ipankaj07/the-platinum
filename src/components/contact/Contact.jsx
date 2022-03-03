import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";

import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rrg3swg",
        "template_kthljio",
        form.current,
        "JnvYVF4JDoQMGqmW1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
    setTimeout(() => {
      form.current.reset();
    }, 2000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>professor@money.heist</h5>
            <a href="mailto:professor@money.heist" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessage3Line className="contact__icon" />
            <h4>Messanger</h4>
            <h5>Alvaro Morte</h5>
            <a href="https://" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+01-9638527410</h5>
            <a
              href="https://api.whatsapp.com/send?phone+019638527410"
              target="_blank" rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* --- */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
