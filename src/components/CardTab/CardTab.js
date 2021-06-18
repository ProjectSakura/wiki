import React from "react";
import "./CardTab.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import TelegramIcon from "@material-ui/icons/Telegram";
import WebIcon from "@material-ui/icons/Web";
import GetAppIcon from "@material-ui/icons/GetApp";
import Mascot from "./export_3.png";

const CardTab = () => (
  <div className="cardtab">
    <div className="card_table_of_content">
      <div className="card_list">
        <h5 className="card_heading">Talk with us</h5>
        <div className="card_listitem">
          <WebIcon style={{ backgroundColor: "#1e1e1e" }} />
          <a href="https://projectsakura.xyz">Website</a>
        </div>
        <div className="card_listitem">
          <GetAppIcon style={{ backgroundColor: "#1e1e1e" }} />
          <a href="https://projectsakura.xyz/download">Download</a>
        </div>
        <div className="card_listitem">
          <EqualizerIcon style={{ backgroundColor: "#1e1e1e" }} />
          <a href="https://projectsakura.xyz/stats.html">Stats</a>
        </div>
        <div className="card_listitem">
          <GitHubIcon style={{ backgroundColor: "#1e1e1e" }} />
          <a href="https://github.com/ProjectSakura">Github</a>
        </div>
        <div className="card_listitem">
          <TelegramIcon style={{ backgroundColor: "#1e1e1e" }} />
          <a href="https://t.me/ProjectSakura">Telegram </a>
        </div>
      </div>
    </div>
    <div className="mascot">
      <center>
        <h4>Proud Sponsor</h4>
        <br />
        <a href="https://www.xsl.tel/" target="_blank" rel="noreferrer">
          <img
            src={Mascot}
            className="sponsor"
            alt="project sakura mascot"
          />
        </a>
      </center>
    </div>
  </div>
);

export default CardTab;
