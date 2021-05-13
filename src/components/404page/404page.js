import React from "react";
import "./404page.css";
import Image from "./404.gif";

const NoMatchPage = () => (
  <div className="page404">
    <div>
      <img src={Image} alt="404" />
    </div>
  </div>
);

export default NoMatchPage;
