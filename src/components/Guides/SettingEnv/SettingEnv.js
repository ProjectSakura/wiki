import React from "react";
import image from "./projectSakura.png";
import "./SettingEnv.css";

const SettingEnv = () => {
  return (
    <div className="environment">
      <center>
        <div className="content">
          <img className="home_image" alt="data" src={image}></img>        
          <h1>Setting up Environments to build Project Sakura</h1>
          <h3>WELCOME TO PROJECT SAKURA 🌸🌷 WIKI</h3>
          <h3>
            🌸PROJECT WAS FOUNDED IN FEBRUARY 2020 AND HAVE SEEN 3 MAJOR
            RELEASES FROM THEN.
          </h3>
          <h3>✨CURRENT STABLE RELEASE IS 3.R BASED ON LINEAGE OS 18.0</h3>

          <h3>⚡PROJECT IS MAINTAINED FULLY BY LORSHENRON AND ARUN TELTIA</h3>
        </div>
      </center>
    </div>
  );
};

export default SettingEnv;
