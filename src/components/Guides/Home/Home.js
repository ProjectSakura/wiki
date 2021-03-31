import React from "react";
import image from "./projectSakura.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <center>
        <div className="content">
          <img className="home_image" alt="data" src={image}></img>
          <h1>HOME</h1>
          <h3>WELCOME TO PROJECT SAKURA 🌸🌷 WIKI</h3>
          <h3>
            🌸PROJECT WAS FOUNDED IN FEBRUARY 2020 AND HAVE SEEN 3 MAJOR
            RELEASES FROM THEN.
          </h3>
          <h3>✨CURRENT STABLE RELEASE IS 3.R BASED ON LINEAGE OS 18.0</h3>

          <h3>⚡PROJECT IS MAINTAINED FULLY BY LORSHENRON AND ARUN TELTIA</h3>
          <h3>⚡CO-DEVELOPED BY FIREQUEEN 🔥</h3>
        </div>
      </center>
    </div>
  );
};

export default Home;
