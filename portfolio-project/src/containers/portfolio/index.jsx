import React from "react";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Mock Master",
    desc: "A platform to help job seekers prepare for interviews through real-world simulations. Built with React,Next.js, Drizzle ORM, and Clerk, offering an interactive and seamless user experience for mock interviews.",
    sourcelink: "https://github.com/jisangeorgekutty/ai-mock-interview",
    demolink: ""
  },
  {
    id: 2,
    name: "Chat Application",
    desc: "A real-time chat application enabling users to send and receive messages instantly. Utilized WebSockets for live communication, implemented user interface with React and Vite, and managed data persistence using MongoDB and Express on the backend.",
    sourcelink: "https://github.com/jisangeorgekutty/Chat-Application",
    demolink: ""
  },
  {
    id: 3,
    name: "Tech Tutor",
    desc: "An AI-powered chatbot using Node.js, JavaScript, Express, Handlebars, MongoDB, HTML, CSS, and Gemini AI. Enables real-time conversational interactions, user authentication, and intelligent responses for an enhanced user experience.",
    sourcelink: "https://github.com/jisangeorgekutty/MiniProject",
    demolink: ""
  },
  {
    id: 4,
    name: "Music Player",
    desc: "An a web-based music player for seamless audio streaming, built with Node.js, JavaScript, Handlebars, MongoDB, Express, HTML, and CSS. Features include user authentication, playlist management, and anintuitive UI for an enhanced listening experience.",
    sourcelink: "https://github.com/jisangeorgekutty/Music-Player",
    demolink: ""
  },
  {
    id: 5,
    name: "Product Store",
    desc: "Developed a full-stack product store web application using React and Vite for the frontend, Node.js and Express for the backend, and MongoDB for the database. The application displays products added by an admin, with dynamic rendering and seamless data flow between client and server.",
    sourcelink: "https://github.com/jisangeorgekutty/Product-Store",
    demolink: ""
  },
  {
    id: 6,
    name: "Movie App",
    desc: "Developed a movie reviewing web application where users can browse movies, submit reviews and ratings, and view feedback from other users. Implemented dynamic routing and server-side logic using Node.js and Express to handle user interactions and data display.",
    sourcelink: "https://github.com/jisangeorgekutty/Movie-App",
    demolink: ""
  },
  {
    id: 7,
    name: "Shopping Cart",
    desc: "A platform for purchasing gadgets. Built with Node.js, JavaScript, Express, Handlebars, and MongoDB.Features include user authentication, product management, and a seamless shopping experience.",
    sourcelink: "https://github.com/jisangeorgekutty/Shopping-Cart",
    demolink: ""
  },
  {
    id: 8,
    name: "OLX Project",
    desc: "A marketplace platform for buying and selling products, built with React.js and Firebase.Features include user authentication, real-time database updates, product listings, and a seamless user experience.",
    sourcelink: "https://github.com/jisangeorgekutty/olx-project",
    demolink: ""
  },
];

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);


  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");


  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__content">
        <h2>Development</h2>
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="card-arrow"></div>
              <div className="portfolio__content__cards__item__cont-wrapper">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <button onClick={() => window.open(item.sourcelink, "_blank")}>Source</button>
                    <button>Demo</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
