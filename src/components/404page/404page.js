import React from 'react';
// import "./404page.css";
import SettingEnv from "../Guides/SettingEnv/SettingEnv";
import Image from "./404.gif";

const NoMatchPage = () => {
    return (
      <div className="Page404">
      <div>
      <img className="Image404" src={Image}></img>
        {/* <h2>404...</h2>
        <h2>Page not found!</h2> */}
      </div>
      </div>
    );
  };

  export default NoMatchPage;
  