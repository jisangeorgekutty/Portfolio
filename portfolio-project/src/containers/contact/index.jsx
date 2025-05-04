import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./styles.scss";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qmait1t",
      "template_msalnha",
      e.target,
      "4QnRD2cKG3YWbE-HX" // OR public key if using new API
    ).then(
      (result) => {
        console.log("Message Sent:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.error("Error:", error.text);
        alert("Failed to send message.");
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <h2>Contact</h2>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <form onSubmit={sendEmail} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input required name="name" className="inputName" type="text" />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div>
                <input required name="email" className="inputEmail" type="email" />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div>
                <textarea required name="description" className="inputDescription" rows="5" />
                <label htmlFor="description" className="descriptionLabel">Description</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
