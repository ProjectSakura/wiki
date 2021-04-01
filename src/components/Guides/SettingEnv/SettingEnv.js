import React from "react";
import image from "./projectSakura.png";
import "./SettingEnv.css";

const SettingEnv = () => {
  return (
    <div className="environment">
      <center>
        <div className="content">
          <img className="home_image" alt="data" src={image}></img>        
          <h1>WELCOME TO PROJECT SAKURA WIKI</h1>
          <hr />
          <h3>
           Some basic info about ProjectSakura!</h3><p> ProjectSakura was started by LordShenron as a hobby Project in February of 2020. Later on ArunTeltia joined in as a fulltime web developer for the Project.</p>
           <p>ProjectSakura uses LineageOS as base and closely stick to it. Infact you can build ProjectSakura using same LineageOS trees.</p>
           <p>
           As of this moment ProjectSakura have evolved through 2 major Android Releases. The current Stable version is 5.R based on Android 11. 
           </p>
           <hr />
           <h4> This Wiki is completely created from scratch by ArunTeltia and LordShenron. <br />© All Rights Reserved 2020-2021, ProjectSakura</h4>
        </div>
      </center>
    </div>
  );
};

export default SettingEnv;
