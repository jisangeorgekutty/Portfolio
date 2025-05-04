import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { motion } from "framer-motion";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const jobSummary =
  "Full-stack web designer and developer with over 2 years of experience. Specialized in creating visually stunning and accessible web applications that prioritize high availability and scalability. Committed to lifelong learning and embracing new challenges, seeking continuous growth and improvement.";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <motion.div
            initial={{ x: -900 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <h2>About Me</h2>
            <p>{jobSummary}</p>
          </motion.div>
        </div>

        <div className="about__content__servicesWrapper">
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
