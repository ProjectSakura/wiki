import React from 'react'
import './CardTab.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CardTab = (props) => {
    return (
        <div className="cardtab">
            <div class="card_table_of_content">
                <div className="card_list">
                    <h5 className="card_heading">Table of Contents</h5>
                    <div className="card_listitem" onClick={() => props.environmentClicked()}><ArrowForwardIosIcon style={{ backgroundColor: "#1e1e1e" }} />   Introduction</div>
                    <div className="card_listitem" onClick={() => props.reportBugClicked()}><ArrowForwardIosIcon style={{ backgroundColor: "#1e1e1e" }} />   Sakura Related Links</div>
                </div>
            </div>
            <div class="card_table_of_content">
                <div className="card_list">
                    <h5 className="card_heading"><a href="https://t.me/ProjectSakura">Talk with us </a></h5>
                </div>
            </div>
            <div class="card_table_of_content">
                <div className="card_list">
                    <h5 className="card_heading">Last Edited By </h5>
                    <h5 className="card_heading1">Arun Teltia</h5>
                    <h6 className="card_heading1">01/10/2020</h6>
                </div>
            </div>
        </div>
    )
}

export default CardTab
