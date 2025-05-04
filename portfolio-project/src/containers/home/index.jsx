import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./styles.scss";
import About from "../about";
import Skills from "../skills";
import Contact from "../contact";
import Portfolio from "../portfolio";
import Footer from "../footer";

const Home = () => {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm <span className="text-white">Jisan George</span>
          <br />
          Software Developer
        </h1>
      </div>

      <motion.div
        initial={{ y: 550 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="home__contact-me"
      >
        <button onClick={handleScrollToContact}>Hire Me</button>
      </motion.div>

      <About />
      <Skills />
      <Portfolio />

      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
