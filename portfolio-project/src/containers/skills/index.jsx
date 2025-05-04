import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__content-wrapper">
      <h2>Skills</h2>
      <div className="skills__content-wrapper__row-wise">
        {skillsData.map((item, i) => (
          <motion.div
            key={i}
            className="skills__content-wrapper__inner-content"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="skills__content-wrapper__inner-content__category-text">
              {item.label}
            </h3>
            <div className="skills__content-wrapper__inner-content__progressbar-container">
              {item.data.map((skillItem, j) => (
                <motion.div
                  key={j}
                  className="progressbar-wrapper"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + j * 0.2 }}
                >
                  <p>{skillItem.skillName}</p>
                  
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
