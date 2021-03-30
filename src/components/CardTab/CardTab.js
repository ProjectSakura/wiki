import React from "react";
import "./CardTab.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import TelegramIcon from "@material-ui/icons/Telegram";
import WebIcon from "@material-ui/icons/Web";
import GetAppIcon from "@material-ui/icons/GetApp";
const CardTab = () => {
  return (
    <div className="cardtab">
      <div class="card_table_of_content">
        <div className="card_list">
          <h5 className="card_heading">Table of Contents</h5>
          <div className="card_listitem">
            <ArrowForwardIosIcon style={{ backgroundColor: "#1e1e1e" }} />{" "}
            Introduction
          </div>
          <div className="card_listitem">
            <ArrowForwardIosIcon style={{ backgroundColor: "#1e1e1e" }} />{" "}
            Sakura Related Links
          </div>
        </div>
      </div>
      <div class="card_table_of_content">
        <div className="card_list">
          <h5 className="card_heading">Talk with us</h5>
          <div className="card_listitem">
            <WebIcon style={{ backgroundColor: "#1e1e1e" }} /> Website
          </div>
          <div className="card_listitem">
            <GetAppIcon style={{ backgroundColor: "#1e1e1e" }} /> Download
          </div>
          <div className="card_listitem">
            <TelegramIcon style={{ backgroundColor: "#1e1e1e" }} /> Telegram
          </div>
          <div className="card_listitem">
            <EqualizerIcon style={{ backgroundColor: "#1e1e1e" }} /> Stats
          </div>
          <div className="card_listitem">
            <GitHubIcon style={{ backgroundColor: "#1e1e1e" }} /> Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTab;
