import React from 'react';
import "./404page.css";
import Image from "./404.gif";

const NoMatchPage = () => {
  return (
    <div className="page404">
      <div>
        <img src={Image}></img>
      </div>
    </div>
  );
};

export default NoMatchPage;
