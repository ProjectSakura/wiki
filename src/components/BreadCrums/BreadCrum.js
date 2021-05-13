import React, { useEffect, useState } from "react";
import "./BreadCrum.css";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";

const BreadCrum = () => {
  const [data, setData] = useState(window.location.href.split("/"));

  // eslint-disable-next-line
  useEffect(() => {
    setData(window.location.href.split("/")); // eslint-disable-next-line
  }, [window.location.href]);
  return (
    <div className="breadcrum">
      <div className="breadcrum_content">
        <HomeIcon className="breadcrum_home" />
        {" "}
        {data[3].toUpperCase()}
        {" "}
        /
        {" "}
        {data[4] && data[4].toUpperCase()}
      </div>
    </div>
  );
};

export default withRouter(BreadCrum);
