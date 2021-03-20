import React from "react";
import "./BreadCrum.css";
import HomeIcon from "@material-ui/icons/Home";

const BreadCrum = (props) => {
  console.log(window.location.href);

  const data = window.location.href.split("/");

  console.log(data);
  return (
    <div className="breadcrum">
      <div className="breadcrum_content">
        <HomeIcon style={{ backgroundColor: "#1e1e1e" }} /> /{" "}
        {data[3].toUpperCase()} / {data[4] && data[4].toUpperCase()}
      </div>
    </div>
  );
};

export default BreadCrum;
