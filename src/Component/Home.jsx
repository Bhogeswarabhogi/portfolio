import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <section className="home-content">
        <p>Hi, I'm BHOGESWARA REDDY KUKKALA, a MERN STACK DEVELOPER.</p>
      </section>
      <section className="home-content">
        <p>
          With a passion for creating innovative and efficient solutions, I
          specialize in front-end development.{" "}
        </p>
        <p>
          In this portfolio, you'll find information about me, my projects, and
          how to contact me.
        </p>
        <p>Feel free to explore and learn more about my work.</p>
        <p>Thank you for visiting!</p>
      </section>
      <footer className="home-footer">
        <p>Let's build something amazing together!</p>
      </footer>
    </div>
  );
};

export default Home;
