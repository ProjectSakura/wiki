import React, { useEffect, useState } from "react";
import "./BreadCrum.css";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";

const BreadCrum = () => {
  console.log(window.location.href);
  const [data, setData] = useState(window.location.href.split("/"));

  useEffect(() => {
    setData(window.location.href.split("/"));
  }, [window.location.href]);
  console.log(data);
  return (
    <div className="breadcrum">
      <div className="breadcrum_content">
        <HomeIcon className="breadcrum-home" /> /{" "}
        {data[3].toUpperCase()} / {data[4] && data[4].toUpperCase()}
      </div>
    </div>
  );
};

export default withRouter(BreadCrum);
